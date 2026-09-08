import type { Edge, XYPosition } from '@xyflow/react';
import type { AtlasNode } from './graph';

type Body = { id: string; home: XYPosition; position: XYPosition; vx: number; vy: number; degree: number };
export type ElasticLayout = { bodies: Map<string, Body>; links: [Body, Body][] };

/** Springs preserve each branch's rest vector, so a drag flows through the tree. */
export function createElasticLayout(nodes: AtlasNode[], edges: Edge[]): ElasticLayout {
  const bodies = new Map(nodes.map((node) => [node.id, { id: node.id,
    home: { ...node.position }, position: { ...node.position }, vx: 0, vy: 0, degree: 0 }]));
  const links: [Body, Body][] = [];
  for (const edge of edges) {
    const a = bodies.get(edge.source), b = bodies.get(edge.target);
    if (a && b) { links.push([a, b]); a.degree++; b.degree++; }
  }
  return { bodies, links };
}

export function stepElasticLayout(layout: ElasticLayout, pinned: string | null, time: number) {
  for (const [a, b] of layout.links) {
    const dx = (b.position.x - b.home.x) - (a.position.x - a.home.x);
    const dy = (b.position.y - b.home.y) - (a.position.y - a.home.y);
    const strength = 0.035 / Math.sqrt(Math.max(a.degree, b.degree, 1));
    a.vx += dx * strength; a.vy += dy * strength;
    b.vx -= dx * strength; b.vy -= dy * strength;
  }
  let index = 0;
  for (const body of layout.bodies.values()) {
    const phase = index++ * 2.399;
    if (body.id === pinned) { body.vx = 0; body.vy = 0; continue; }
    // A quiet, slow current; the drag supplies the visible spring energy.
    body.vx += (body.home.x - body.position.x) * 0.002 + Math.sin(time * 0.0005 + phase) * 0.009;
    body.vy += (body.home.y - body.position.y) * 0.002 + Math.cos(time * 0.0004 + phase) * 0.009;
    body.vx = Math.max(-35, Math.min(35, body.vx * 0.86));
    body.vy = Math.max(-35, Math.min(35, body.vy * 0.86));
    body.position.x += body.vx; body.position.y += body.vy;
  }
}
