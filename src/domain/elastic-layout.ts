import { defaultPhysics, PHYSICS_STEP, type PhysicsSettings } from './physics-settings';
import type { Edge, XYPosition } from '@xyflow/react';
import type { AtlasNode } from './graph';

type Body = { id: string; position: XYPosition; vx: number; vy: number; degree: number; compact: boolean };
type Spring = { a: Body; b: Body; length: number; strength: number };
export type ElasticLayout = { bodies: Map<string, Body>; links: Spring[]; initializing: boolean };
const distance = (a: Body, b: Body) => Math.hypot(a.position.x - b.position.x, a.position.y - b.position.y);

export function createElasticLayout(nodes: AtlasNode[], edges: Edge[], initializing = false, preserveScale = false): ElasticLayout {
  const bodies = new Map(nodes.map((node) => [node.id, { id: node.id,
    position: { ...node.position }, vx: 0, vy: 0, degree: 0, compact: !!node.data.compact }]));
  const links: Spring[] = [];
  for (const edge of edges) {
    const a = bodies.get(edge.source), b = bodies.get(edge.target);
    if (a && b) { links.push({ a, b, length: preserveScale ? Math.max(240, Math.min(560, distance(a, b) * 0.3))
      : initializing ? (a.compact ? 110 : 180) : Math.max(1, distance(a, b)),
      strength: edge.data?.layoutPrimary === false ? 0.15 : 1 });
      a.degree++; b.degree++; }
  }
  return { bodies, links, initializing };
}

/** Adopt the user's arrangement; there are no per-node home positions. */
export function retainElasticArrangement(layout: ElasticLayout) {
  for (const link of layout.links) link.length = Math.max(1, distance(link.a, link.b));
  for (const body of layout.bodies.values()) { body.vx = 0; body.vy = 0; }
}

/** Implicit velocity-level soft rope constraints; velocities are world units/second. */
export function stepElasticLayout(layout: ElasticLayout, pinned: string | null, _time: number,
  settings: PhysicsSettings = defaultPhysics, h = PHYSICS_STEP) {
  const bodies = [...layout.bodies.values()];
  const drag = Math.exp(-settings.airDrag * h);
  for (const body of bodies) if (body.id !== pinned) { body.vx *= drag; body.vy *= drag; }
  for (let i = 0; i < bodies.length; i++) for (let j = i + 1; j < bodies.length; j++) {
    const a = bodies[i], b = bodies[j];
    let dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
    if (dx === 0 && dy === 0) dx = 1;
    const d = Math.sqrt(dx * dx + dy * dy);
    const impulse = settings.repulsion * 700 * 625 * h / Math.max(900, d * d);
    if (a.id !== pinned) { a.vx -= dx / d * impulse; a.vy -= dy / d * impulse; }
    if (b.id !== pinned) { b.vx += dx / d * impulse; b.vy += dy / d * impulse; }
  }
  const constraints = settings.frequency > 0 ? layout.links.flatMap(({ a, b, length, strength }) => {
    const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
    const d = Math.max(1e-6, Math.sqrt(dx * dx + dy * dy));
    const error = d - length - 24;
    if (error <= 0) return [];
    const wa = a.id === pinned ? 0 : 1, wb = b.id === pinned ? 0 : 1;
    const inverseMass = wa + wb;
    if (!inverseMass) return [];
    const omega = 2 * Math.PI * settings.frequency * Math.sqrt(strength);
    const stiffness = omega * omega / inverseMass;
    const damping = 2 * settings.dampingRatio * omega / inverseMass;
    const gamma = 1 / (h * (damping + h * stiffness));
    const bias = error * h * stiffness * gamma;
    return [{ a, b, wa, wb, nx: dx / d, ny: dy / d, gamma, bias,
      mass: 1 / (inverseMass + gamma), impulse: 0 }];
  }) : [];
  for (let iteration = 0; iteration < settings.iterations; iteration++) for (const c of constraints) {
    const speed = (c.b.vx - c.a.vx) * c.nx + (c.b.vy - c.a.vy) * c.ny;
    const next = Math.min(0, c.impulse - c.mass * (speed + c.bias + c.gamma * c.impulse));
    const delta = next - c.impulse;
    c.impulse = next;
    c.a.vx -= c.wa * delta * c.nx; c.a.vy -= c.wa * delta * c.ny;
    c.b.vx += c.wb * delta * c.nx; c.b.vy += c.wb * delta * c.ny;
  }
  for (const body of bodies) if (body.id !== pinned) {
    body.position.x += body.vx * h; body.position.y += body.vy * h;
  }
}
