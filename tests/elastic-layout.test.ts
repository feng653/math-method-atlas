import { expect, it } from 'vitest';
import { createElasticLayout, stepElasticLayout } from '../src/domain/elastic-layout';
import type { AtlasNode } from '../src/domain/graph';

const nodes: AtlasNode[] = ['a', 'b', 'c'].map((id, index) => ({ id,
  position: { x: index * 300, y: 0 }, data: { kind: 'method', label: id, subtitle: '', color: '#000' } }));
const edges = [{ id: 'ab', source: 'a', target: 'b' }, { id: 'bc', source: 'b', target: 'c' }];

it('holds the dragged node and propagates displacement through connected neighbors', () => {
  const layout = createElasticLayout(nodes, edges);
  layout.bodies.get('a')!.position.y = 180;
  for (let i = 0; i < 60; i++) stepElasticLayout(layout, 'a', 0);
  expect(layout.bodies.get('a')!.position.y).toBe(180);
  expect(layout.bodies.get('b')!.position.y).toBeGreaterThan(50);
  expect(layout.bodies.get('c')!.position.y).toBeGreaterThan(20);
  expect(nodes[0].position.y).toBe(0);
});

it('damps a released extreme drag without non-finite coordinates and resets exactly', () => {
  const layout = createElasticLayout(nodes, edges);
  layout.bodies.get('b')!.position.x = 10000;
  for (let i = 0; i < 3000; i++) stepElasticLayout(layout, null, i * 33);
  for (const body of layout.bodies.values()) {
    expect(Number.isFinite(body.position.x + body.position.y)).toBe(true);
    expect(Math.abs(body.position.x - body.home.x)).toBeLessThan(15);
  }
  expect(createElasticLayout(nodes, edges).bodies.get('b')!.position).toEqual(nodes[1].position);
});
