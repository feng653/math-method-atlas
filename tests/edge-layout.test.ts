import { expect, it } from 'vitest';
import { edgeHandles, primaryEdgeIds } from '../src/domain/edge-layout';
import { buildGraph } from '../src/domain/graph';
import { data } from '../src/data/load';

it('keeps a connected backbone with one visual parent for each shared method', () => {
  const library = data.libraries.find((item) => item.id === 'math-one')!;
  const graph = buildGraph(library, data.methods, '', true, data.problemTypes);
  const ids = primaryEdgeIds(graph.nodes, graph.edges);
  expect(ids.size).toBeLessThan(graph.edges.length);
  for (const node of graph.nodes.filter((node) => node.data.kind === 'method')) {
    expect(graph.edges.filter((edge) => ids.has(edge.id) && edge.target === node.id)).toHaveLength(1);
  }
  expect(graph.edges.every((edge) => !edge.id.startsWith('choice-') ? ids.has(edge.id) : true)).toBe(true);
});

it('reroutes to facing ports after a node crosses to another side', () => {
  const graph = buildGraph(data.libraries[0], data.methods);
  const a = { ...graph.nodes[0], position: { x: 0, y: 0 } };
  const b = { ...graph.nodes[1], position: { x: 500, y: 0 } };
  expect(edgeHandles(a, b)).toEqual({ sourceHandle: 'right-source', targetHandle: 'left-target' });
  expect(edgeHandles(a, { ...b, position: { x: 0, y: -500 } }))
    .toEqual({ sourceHandle: 'top-source', targetHandle: 'bottom-target' });
});
