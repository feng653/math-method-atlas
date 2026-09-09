import { expect, it } from 'vitest';
import { createElasticLayout, retainElasticArrangement, stepElasticLayout } from '../src/domain/elastic-layout';
import type { AtlasNode } from '../src/domain/graph';

const nodes: AtlasNode[] = ['a', 'b', 'c'].map((id, index) => ({ id,
  position: { x: index * 300, y: 0 }, data: { kind: 'method', label: id, subtitle: '', color: '#000' } }));
const edges = [{ id: 'ab', source: 'a', target: 'b' }, { id: 'bc', source: 'b', target: 'c' }];

it('holds a dragged node while tension moves its neighbors', () => {
  const layout = createElasticLayout(nodes, edges);
  layout.bodies.get('a')!.position.y = 300;
  for (let i = 0; i < 120; i++) stepElasticLayout(layout, 'a', 0);
  expect(layout.bodies.get('a')!.position.y).toBe(300);
  expect(layout.bodies.get('b')!.position.y).toBeGreaterThan(10);
  expect(nodes[0].position.y).toBe(0);
});

it('retains an expanded arrangement after release instead of returning home', () => {
  const layout = createElasticLayout(nodes, edges);
  layout.bodies.get('b')!.position.y = 350;
  retainElasticArrangement(layout);
  for (let i = 0; i < 900; i++) stepElasticLayout(layout, null, i * 33);
  expect(layout.bodies.get('b')!.position.y).toBeGreaterThan(300);
  expect(layout.bodies.get('a')!.position.x).toBeLessThan(100);
  expect(createElasticLayout(nodes, edges).bodies.get('b')!.position).toEqual(nodes[1].position);
});

it('separates coincident cards without NaN or forcing an old position', () => {
  const layout = createElasticLayout(nodes.slice(0, 2).map((node) => ({ ...node, position: { x: 0, y: 0 } })), []);
  for (let i = 0; i < 200; i++) stepElasticLayout(layout, null, 0);
  const [a, b] = [...layout.bodies.values()];
  expect(Number.isFinite(a.position.x + a.position.y + b.position.x + b.position.y)).toBe(true);
  expect(Math.hypot(a.position.x - b.position.x, a.position.y - b.position.y)).toBeGreaterThan(0);
});

it('preserves a translated arrangement without artificial center attraction', () => {
  const layout = createElasticLayout(nodes, edges);
  for (const body of layout.bodies.values()) body.position.x += 1000;
  retainElasticArrangement(layout);
  for (let i = 0; i < 3000; i++) stepElasticLayout(layout, null, 0);
  const bodies = [...layout.bodies.values()];
  const center = bodies.reduce((sum, body) => sum + body.position.x / bodies.length, 0);
  expect(center).toBeCloseTo(1300, 6);
  expect(bodies[2].position.x - bodies[0].position.x).toBeGreaterThan(550);
});

it('does not push a connected neighbor outward when dragging shortens its link', () => {
  const pair = nodes.slice(0, 2).map((node, i) => ({ ...node, position: { x: i * 1000, y: 0 } }));
  const linked = createElasticLayout(pair, [edges[0]]);
  const isolated = createElasticLayout(pair, []);
  for (const layout of [linked, isolated]) {
    layout.bodies.get('a')!.position.x = 600;
    stepElasticLayout(layout, 'a', 0);
  }
  expect(linked.bodies.get('b')!.vx).toBeCloseTo(isolated.bodies.get('b')!.vx, 10);
  expect(linked.bodies.get('b')!.vx).toBeLessThan(0.01);
});
