import { expect, it } from 'vitest';
import { sizeGraphNodes } from '../src/domain/node-presentation';
import type { AtlasNode } from '../src/domain/graph';
import { createElasticLayout, stepElasticLayout } from '../src/domain/elastic-layout';

const nodes: AtlasNode[] = ['a', 'b', 'c'].map((id, i) => ({ id, position: { x: i * 100, y: 0 },
  data: { kind: 'method', label: id, subtitle: '', color: '#000' } }));
it('sizes dots by unique connected neighbors without moving nodes', () => {
  const edges = [{ id: 'ab', source: 'a', target: 'b' }, { id: 'ac', source: 'a', target: 'c' }];
  const result = sizeGraphNodes(nodes, edges);
  expect(result[0].data.dotSize).toBeGreaterThan(result[1].data.dotSize!);
  expect(sizeGraphNodes(nodes, [...edges, edges[0]])).toEqual(result);
  expect(result.map(n => n.position)).toEqual(nodes.map(n => n.position));
  expect(nodes[0].data.dotSize).toBeUndefined();
});
it('changing text length does not affect physical forces', () => {
  const a = createElasticLayout(nodes, []);
  const b = createElasticLayout(nodes.map(n => ({ ...n, data: { ...n.data, label: '长文字'.repeat(50) } })), []);
  stepElasticLayout(a, null, 0); stepElasticLayout(b, null, 0);
  expect([...a.bodies.values()]).toEqual([...b.bodies.values()]);
});
