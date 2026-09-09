import { expect, it } from 'vitest';
import { data } from '../src/data/load';
import { buildGraph } from '../src/domain/graph';
import { primaryEdgeIds } from '../src/domain/edge-layout';
import { createElasticLayout, stepElasticLayout } from '../src/domain/elastic-layout';

const library = data.libraries.find((item) => item.id === 'math-one')!;
const fullGraph = () => buildGraph(library, data.methods, '', true, data.problemTypes);

it('relaxes the complete graph deterministically without label overlap or losing semantic parents', () => {
  const graph = fullGraph();
  expect(fullGraph()).toEqual(graph);
  const primary = primaryEdgeIds(graph.nodes, graph.edges);
  expect(primary.size).toBe(graph.nodes.length - 1);
  expect(graph.edges.length).toBeGreaterThan(primary.size);
  const moved = graph.nodes.map((node) => ({ ...node, position: { x: -node.position.x, y: node.position.y * 2 } }));
  expect(primaryEdgeIds(moved, graph.edges)).toEqual(primary);
  for (let i = 0; i < graph.nodes.length; i++) for (const other of graph.nodes.slice(i + 1)) {
    const point = graph.nodes[i].position;
    expect(Math.abs(point.x - other.position.x) >= 264 || Math.abs(point.y - other.position.y) >= 32).toBe(true);
  }
  expect(graph.nodes.filter((node) => node.data.methodId)).toHaveLength(
    data.methods.filter((method) => method.libraryId === library.id).length);
}, 15000);

it('pulls a longer connection harder during initial relaxation', () => {
  const sample = buildGraph(library, data.methods, library.chapters[1].id).nodes.slice(0, 2);
  const movement = (distance: number) => {
    const pair = sample.map((node, i) => ({ ...node, position: { x: i * distance, y: 0 } }));
    const layout = createElasticLayout(pair, [{ id: 'test', source: pair[0].id, target: pair[1].id }], true);
    stepElasticLayout(layout, null, 0);
    return layout.bodies.get(pair[0].id)!.position.x;
  };
  expect(movement(400)).toBeGreaterThan(movement(250));
  expect(movement(250)).toBeGreaterThan(0);
});

it('repels nearby unconnected nodes', () => {
  const sample = buildGraph(library, data.methods, library.chapters[1].id).nodes.slice(0, 2)
    .map((node, i) => ({ ...node, position: { x: i * 600, y: 0 } }));
  const layout = createElasticLayout(sample, []);
  stepElasticLayout(layout, null, 0);
  expect(layout.bodies.get(sample[0].id)!.position.x).toBeLessThan(0);
  expect(layout.bodies.get(sample[1].id)!.position.x).toBeGreaterThan(600);
});
