import type { Edge, XYPosition } from '@xyflow/react';
import type { AtlasNode } from './graph';
import { nearbyPairs } from './spatial-neighbors';

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
    if (a && b) { links.push({ a, b, length: preserveScale ? Math.max(160, Math.min(420, distance(a, b) * 0.22))
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

export function stepElasticLayout(layout: ElasticLayout, pinned: string | null, _time: number) {
  const bodies = [...layout.bodies.values()];
  for (const { a, b, length, strength } of layout.links) {
    const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
    const d = Math.max(1, Math.hypot(dx, dy)), stretch = d - length;
    const tension = Math.max(0, stretch - 24);
    const force = tension * strength * (layout.initializing ? 0.18 : 0.036) / Math.sqrt(Math.max(a.degree, b.degree, 1));
    a.vx += dx / d * force; a.vy += dy / d * force;
    b.vx -= dx / d * force; b.vy -= dy / d * force;
  }
  for (const [i, j] of nearbyPairs(bodies, 800)) {
    const a = bodies[i], b = bodies[j];
    const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
    const compact = a.compact && b.compact;
    const ox = (compact ? 264 : 240) - Math.abs(dx), oy = (compact ? 32 : 110) - Math.abs(dy);
    if (ox > 0 && oy > 0) {
      // Card collision separates along the smaller penetration.
      if (ox / (compact ? 4 : 1) < oy) {
        const push = (Math.sign(dx) || 1) * Math.min(40, ox * 0.35);
        a.vx -= push; b.vx += push;
      } else {
        const push = (Math.sign(dy) || (i % 2 ? -1 : 1)) * Math.min(40, oy * 0.35);
        a.vy -= push; b.vy += push;
      }
    }
    const d = Math.max(1, Math.hypot(dx, dy));
    // Nearby pairs repel regardless of connectivity; soften the cutoff and singularity.
    const force = (layout.initializing ? 3600 : 280) * (1 - d * d / (800 * 800)) / Math.max(900, d * d);
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

/** Project residual label overlaps out after cooling; never snap nodes onto a grid. */
export function settleCollisions(layout: ElasticLayout) {
  const bodies = [...layout.bodies.values()];
  for (let pass = 0; pass < 1000; pass++) {
    let overlaps = 0;
    for (const [i, j] of nearbyPairs(bodies, 300)) {
      const a = bodies[i], b = bodies[j];
      const compact = a.compact && b.compact;
      const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
      const ox = (compact ? 272 : 246) - Math.abs(dx), oy = (compact ? 40 : 112) - Math.abs(dy);
      if (ox <= 0 || oy <= 0) continue;
      overlaps++;
      if (ox / (compact ? 4 : 1) < oy) {
        const shift = (Math.sign(dx) || 1) * (ox / 2 + 0.01);
        a.position.x -= shift; b.position.x += shift;
      } else {
        const shift = (Math.sign(dy) || 1) * (oy / 2 + 0.01);
        a.position.y -= shift; b.position.y += shift;
      }
    }
    if (!overlaps) break;
  }
}
