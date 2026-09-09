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

export function stepElasticLayout(layout: ElasticLayout, pinned: string | null, _time: number, multipliers = { attraction: 1, repulsion: 1 }) {
  const bodies = [...layout.bodies.values()];
  for (const { a, b, length, strength } of layout.links) {
    const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
    const d = Math.max(1, Math.sqrt(dx * dx + dy * dy)), stretch = d - length;
    const tension = Math.max(0, stretch - 24);
    const force = multipliers.attraction * tension * strength * (layout.initializing ? 0.15 : 0.03) / Math.sqrt(Math.max(a.degree, b.degree, 1));
    a.vx += dx / d * force; a.vy += dy / d * force;
    b.vx -= dx / d * force; b.vy -= dy / d * force;
  }
  for (let i = 0; i < bodies.length; i++) for (let j = i + 1; j < bodies.length; j++) {
    const a = bodies[i], b = bodies[j];
    const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
    // Only the point has physical size; labels never contribute forces.
    if (dx === 0 && dy === 0) { a.vx -= multipliers.repulsion; b.vx += multipliers.repulsion; }
    const d = Math.max(1, Math.sqrt(dx * dx + dy * dy));
    // Every pair repels at any distance; only soften the near-zero singularity.
    const force = multipliers.repulsion * (layout.initializing ? 9000 : 700) / Math.max(900, d * d);
    a.vx -= dx / d * force; a.vy -= dy / d * force;
    b.vx += dx / d * force; b.vy += dy / d * force;
  }
  for (const body of bodies) {
    if (body.id === pinned) { body.vx = 0; body.vy = 0; continue; }
    body.vx = Math.max(-20, Math.min(20, body.vx * 0.7));
    body.vy = Math.max(-20, Math.min(20, body.vy * 0.7));
    body.position.x += body.vx; body.position.y += body.vy;
  }
}


