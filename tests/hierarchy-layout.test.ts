import { expect, it } from 'vitest';
import { data } from '../src/data/load';
import { buildGraph } from '../src/domain/graph';
import { primaryEdgeIds } from '../src/domain/edge-layout';

it('separates chapter, problem and method rings while preserving every semantic edge', () => {
  const library = data.libraries.find((item) => item.id === 'math-one')!;
  const graph = buildGraph(library, data.methods, '', true, data.problemTypes);
  const primary = primaryEdgeIds(graph.nodes, graph.edges);
  const radius = (node: typeof graph.nodes[number]) => Math.hypot((node.position.x + 105) / 1.35, node.position.y + 30);
  for (const kind of ['chapter', 'problem', 'method'] as const) {
    const values = graph.nodes.filter((node) => node.data.kind === kind).map(radius);
    const next = kind === 'chapter' ? 'problem' : kind === 'problem' ? 'method' : undefined;
    if (next) expect(Math.max(...values)).toBeLessThan(Math.min(...graph.nodes.filter((node) => node.data.kind === next).map(radius)));
  }
  expect(primary.size).toBe(graph.nodes.length - 1);
  expect(graph.edges.length).toBeGreaterThan(primary.size);
  const moved = graph.nodes.map((node) => ({ ...node, position: { x: -node.position.x, y: node.position.y * 2 } }));
  expect(primaryEdgeIds(moved, graph.edges)).toEqual(primary);
  for (let i = 0; i < graph.nodes.length; i++) for (const other of graph.nodes.slice(i + 1)) {
    const point = graph.nodes[i].position;
    expect(Math.abs(point.x - other.position.x) >= 240 || Math.abs(point.y - other.position.y) >= 90).toBe(true);
  }
});

it('keeps independent chapter subtrees from crossing in the initial backbone', () => {
  const library = data.libraries.find((item) => item.id === 'math-one')!;
  const graph = buildGraph(library, data.methods, '', true, data.problemTypes);
  const primary = primaryEdgeIds(graph.nodes, graph.edges);
  const byId = new Map(graph.nodes.map((node) => [node.id, node.position]));
  const edges = graph.edges.filter((edge) => primary.has(edge.id));
  type Point = { x: number; y: number };
  const side = (a: Point, b: Point, c: Point) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
  let crossings = 0;
  for (let i = 0; i < edges.length; i++) for (const other of edges.slice(i + 1)) {
    const edge = edges[i];
    if ([edge.source, edge.target].some((id) => id === other.source || id === other.target)) continue;
    const a = byId.get(edge.source)!, b = byId.get(edge.target)!;
    const c = byId.get(other.source)!, d = byId.get(other.target)!;
    if (side(a, b, c) * side(a, b, d) < 0 && side(c, d, a) * side(c, d, b) < 0) crossings++;
  }
  expect(crossings).toBe(0);
});
