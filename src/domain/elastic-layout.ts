import type { Edge, XYPosition } from '@xyflow/react';
import type { AtlasNode } from './graph';

type Body = { id: string; position: XYPosition; vx: number; vy: number; degree: number };
type Spring = { a: Body; b: Body; length: number };
export type ElasticLayout = { bodies: Map<string, Body>; links: Spring[]; center: XYPosition };
const distance = (a: Body, b: Body) => Math.hypot(a.position.x - b.position.x, a.position.y - b.position.y);

export function createElasticLayout(nodes: AtlasNode[], edges: Edge[]): ElasticLayout {
  const bodies = new Map(nodes.map((node) => [node.id, { id: node.id,
    position: { ...node.position }, vx: 0, vy: 0, degree: 0 }]));
  const links: Spring[] = [];
  for (const edge of edges) {
    const a = bodies.get(edge.source), b = bodies.get(edge.target);
    if (a && b) { links.push({ a, b, length: Math.max(260, distance(a, b)) }); a.degree++; b.degree++; }
  }
  const center = nodes.reduce((sum, node) => ({ x: sum.x + node.position.x / nodes.length,
    y: sum.y + node.position.y / nodes.length }), { x: 0, y: 0 });
  return { bodies, links, center };
}

/** Adopt the user's arrangement; there are no per-node home positions. */
export function retainElasticArrangement(layout: ElasticLayout) {
  for (const link of layout.links) link.length = Math.max(260, distance(link.a, link.b));
  for (const body of layout.bodies.values()) { body.vx = 0; body.vy = 0; }
}

export function stepElasticLayout(layout: ElasticLayout, pinned: string | null, _time: number) {
  const bodies = [...layout.bodies.values()];
  for (const { a, b, length } of layout.links) {
    const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
    const d = Math.max(1, Math.hypot(dx, dy)), stretch = d - length;
    const tension = Math.sign(stretch) * Math.max(0, Math.abs(stretch) - 24);
    const force = Math.max(-6, Math.min(6, tension * 0.018 / Math.sqrt(Math.max(a.degree, b.degree, 1))));
    a.vx += dx / d * force; a.vy += dy / d * force;
    b.vx -= dx / d * force; b.vy -= dy / d * force;
  }
  for (let i = 0; i < bodies.length; i++) for (let j = i + 1; j < bodies.length; j++) {
    const a = bodies[i], b = bodies[j];
    const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
    const ox = 260 - Math.abs(dx), oy = 110 - Math.abs(dy);
    if (ox > 0 && oy > 0) {
      // Card collision separates along the smaller penetration.
      if (ox < oy) {
        const push = (Math.sign(dx) || 1) * Math.min(10, ox * 0.12);
        a.vx -= push; b.vx += push;
      } else {
        const push = (Math.sign(dy) || (i % 2 ? -1 : 1)) * Math.min(10, oy * 0.12);
        a.vy -= push; b.vy += push;
      }
    } else {
      const d = Math.hypot(dx, dy);
      if (d > 0 && d < 520) {
        const force = 0.08 * (1 - d / 520);
        a.vx -= dx / d * force; a.vy -= dy / d * force;
        b.vx += dx / d * force; b.vy += dy / d * force;
      }
    }
  }
  const center = bodies.reduce((sum, body) => ({ x: sum.x + body.position.x / bodies.length,
    y: sum.y + body.position.y / bodies.length }), { x: 0, y: 0 });
  const dx = center.x - layout.center.x, dy = center.y - layout.center.y;
  const drift = Math.hypot(dx, dy);
  const correction = drift > 240 ? Math.min(0.8, (drift - 240) * 0.001) / drift : 0;
  for (const body of bodies) {
    if (body.id === pinned) { body.vx = 0; body.vy = 0; continue; }
    body.vx = Math.max(-20, Math.min(20, (body.vx - dx * correction) * 0.8));
    body.vy = Math.max(-20, Math.min(20, (body.vy - dy * correction) * 0.8));
    body.position.x += body.vx; body.position.y += body.vy;
  }
}
