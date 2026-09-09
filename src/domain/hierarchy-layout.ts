import type { Edge } from '@xyflow/react';
import type { AtlasNode } from './graph';
import { primaryEdgeIds } from './edge-layout';
import { createElasticLayout, stepElasticLayout } from './elastic-layout';

/** Allocate contiguous angular intervals to whole subtrees, then place depth rings. */
export function radialSeed(graph: { nodes: AtlasNode[]; edges: Edge[] }) {
  const primary = primaryEdgeIds(graph.nodes, graph.edges);
  const children = new Map<string, string[]>();
  const parents = new Set<string>();
  for (const edge of graph.edges) if (primary.has(edge.id)) {
    children.set(edge.source, [...(children.get(edge.source) ?? []), edge.target]);
    parents.add(edge.target);
  }
  const root = graph.nodes.find((node) => !parents.has(node.id));
  if (!root) return graph;
  const rootId = root.id;
  const weights = new Map<string, number>();
  let maxDepth = 1;
  function weigh(id: string, depth = 0): number {
    maxDepth = Math.max(maxDepth, depth);
    const list = children.get(id) ?? [];
    const weight = list.length ? list.reduce((sum, child) => sum + weigh(child, depth + 1), 0) : 1;
    weights.set(id, weight);
    return weight;
  }
  const total = weigh(root.id);
  const positions = new Map<string, { x: number; y: number }>();
  const outerRadius = Math.max(maxDepth * 520, total * 16);
  const byId = new Map(graph.nodes.map((node) => [node.id, node]));
  function place(id: string, start: number, end: number, depth: number) {
    const node = byId.get(id)!;
    const angle = (start + end) / 2;
    const level = id === rootId ? 0 : node.data.kind === 'method' ? maxDepth : depth;
    const radius = outerRadius * level / maxDepth;
    positions.set(id, { x: Math.cos(angle) * radius * 1.35 - 105, y: Math.sin(angle) * radius - 30 });
    const list = children.get(id) ?? [];
    // Keep sibling branches apart without changing their data order.
    const gap = Math.min(0.045, (end - start) * 0.12 / Math.max(1, list.length));
    const available = end - start - gap * list.length;
    let cursor = start + gap / 2;
    for (const child of list) {
      const span = available * weights.get(child)! / weights.get(id)!;
      place(child, cursor, cursor + span, depth + 1);
      cursor += span + gap;
    }
  }
  place(root.id, -Math.PI / 2, Math.PI * 1.5, 0);
  // Resolve crowding outward along the same ray, never sideways into a sibling sector.
  const placed: { x: number; y: number }[] = [];
  const order = { root: 0, chapter: 1, category: 2, problem: 3, method: 4 };
  for (const node of [...graph.nodes].sort((a, b) => order[a.data.kind] - order[b.data.kind])) {
    const point = positions.get(node.id)!;
    const dx = point.x + 105, dy = point.y + 30, length = Math.hypot(dx, dy);
    if (length) while (placed.some((other) => Math.abs(other.x - point.x) < 260 && Math.abs(other.y - point.y) < 110)) {
      point.x += dx / length * 90; point.y += dy / length * 90;
    }
    placed.push(point);
  }
  return {
    nodes: graph.nodes.map((node) => ({ ...node, position: positions.get(node.id) ?? node.position })),
    edges: graph.edges.map((edge) => ({ ...edge, data: { ...edge.data, layoutPrimary: primary.has(edge.id) } })),
  };
}
/** Start with the spacious historical rings and stop only after sustained low motion. */
export function hierarchyLayout(graph: { nodes: AtlasNode[]; edges: Edge[] }, compact = false) {
  const seed = radialSeed(graph);
  const nodes = seed.nodes.map(node => ({ ...node, data: { ...node.data, compact } }));
  const layout = createElasticLayout(nodes, seed.edges, true, true);
  let quietTicks = 0;
  let ticks = 0, maxSpeed = 0;
  for (let tick = 0; tick < 8000; tick++) {
    stepElasticLayout(layout, null, tick);
    ticks = tick + 1;
    maxSpeed = Math.max(0, ...[...layout.bodies.values()].map(body => Math.hypot(body.vx, body.vy)));
    quietTicks = maxSpeed < 0.12 ? quietTicks + 1 : 0;
    if (quietTicks >= 30) break;
  }
  return { nodes: nodes.map(node => ({ ...node, position: { ...layout.bodies.get(node.id)!.position } })),
    edges: seed.edges, relaxation: { settled: quietTicks >= 30, ticks, maxSpeed } };
}
