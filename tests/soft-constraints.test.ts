import { expect, it } from 'vitest';
import { createElasticLayout, stepElasticLayout } from '../src/domain/elastic-layout';
import { defaultPhysics, PHYSICS_STEP } from '../src/domain/physics-settings';
import { createMotionScheduler } from '../src/domain/motion-scheduler';
import { advanceDrag } from '../src/domain/drag-target';
import type { AtlasNode } from '../src/domain/graph';
const nodes: AtlasNode[] = ['a', 'b'].map((id, i) => ({ id, position: { x: i * 300, y: 0 },
  data: { kind: 'method', label: id, subtitle: '', color: '#000' } }));
const edges = [{ id: 'ab', source: 'a', target: 'b' }];
it('handles a stiff stretched link for ten seconds without exploding', () => {
  const layout = createElasticLayout(nodes, edges);
  layout.bodies.get('b')!.position.x = 3000;
  for (let i = 0; i < 1200; i++) {
    stepElasticLayout(layout, 'a', 0, { ...defaultPhysics, frequency: 30, repulsion: 0 });
    const body = layout.bodies.get('b')!;
    expect(Number.isFinite(body.vx + body.position.x)).toBe(true);
    expect(Math.abs(body.position.x)).toBeLessThanOrEqual(3000);
  }
  expect(Math.abs(layout.bodies.get('b')!.position.x)).toBeLessThan(350);
});
it('uses time-based air drag, with zero drag preserving free velocity', () => {
  const layout = createElasticLayout(nodes.slice(0, 1), []);
  const body = layout.bodies.get('a')!; body.vx = 100;
  for (let i = 0; i < 120; i++) stepElasticLayout(layout, null, 0, { ...defaultPhysics, airDrag: 0 });
  expect(body.vx).toBe(100);
  for (let i = 0; i < 120; i++) stepElasticLayout(layout, null, 0, { ...defaultPhysics, airDrag: 2 });
  expect(body.vx).toBeCloseTo(100 * Math.exp(-2), 8);
});
it('interpolates dragging instead of teleporting and supplies endpoint velocity', () => {
  const body = { position: { x: 0, y: 0 }, vx: 0, vy: 0 };
  advanceDrag(body, { x: 1000, y: 0 }, PHYSICS_STEP);
  expect(body.position.x).toBeGreaterThan(0); expect(body.position.x).toBeLessThan(1000);
  expect(body.vx).toBeCloseTo(body.position.x / PHYSICS_STEP);
  for (let i = 0; i < 120; i++) advanceDrag(body, { x: 1000, y: 0 }, PHYSICS_STEP);
  expect(body.position.x).toBeCloseTo(1000, 5);
});
it('produces the same physics with different rendering cadence', () => {
  function run(frameMs: number) {
    let now = 0, callback: ((time: number) => void) | undefined;
    const layout = createElasticLayout(nodes, edges);
    layout.bodies.get('b')!.position.x = 800;
    const scheduler = createMotionScheduler({ now: () => now,
      request(next) { callback = next; return 1; }, cancel() {} },
    time => stepElasticLayout(layout, null, time), () => {});
    scheduler.wake();
    for (now = frameMs; now <= 1000; now += frameMs) callback?.(now);
    return [...layout.bodies.values()].map(body => body.position);
  }
  expect(run(10)).toEqual(run(40));
});
