import { expect, it } from 'vitest';
import { createMotionScheduler } from '../src/domain/motion-scheduler';

function harness(interval = 50) {
  let time = 0, sequence = 0, steps = 0, running = false;
  const pending = new Map<number, (time: number) => void>();
  const scheduler = createMotionScheduler({ now: () => time,
    request(callback) { pending.set(++sequence, callback); return sequence; },
    cancel(id) { pending.delete(id); } }, () => { steps++; }, (value) => { running = value; }, interval);
  return { scheduler, pending, get steps() { return steps; }, get running() { return running; },
    advance(duration: number) {
      for (let elapsed = 0; elapsed < duration; elapsed += 10) {
        time += 10;
        const callbacks = [...pending.values()]; pending.clear();
        callbacks.forEach((callback) => callback(time));
      }
    } };
}

it('keeps simulating while idle without creating duplicate frames', () => {
  const h = harness(); h.scheduler.wake(); h.advance(2000);
  expect(h.running).toBe(true); expect(h.pending.size).toBe(1);
  const count = h.steps; h.advance(60000); expect(h.steps - count).toBe(1200);
  h.scheduler.stop(); expect(h.pending.size).toBe(0);
});

it('extends dragging without duplicate loops and cancels immediately when hidden or disabled', () => {
  const h = harness(); h.scheduler.wake(); h.advance(1000);
  h.scheduler.wake(); h.scheduler.wake(); expect(h.pending.size).toBe(1);
  h.advance(1000); expect(h.running).toBe(true);
  h.scheduler.stop(); expect(h.pending.size).toBe(0);
  const count = h.steps; h.advance(1000); expect(h.steps).toBe(count);
});

it('continues even when the physics callback reports no motion', () => {
  let time = 0, active = true, steps = 0;
  let callback: ((time: number) => void) | undefined;
  const scheduler = createMotionScheduler({ now: () => time,
    request(next) { callback = next; return 1; }, cancel() { callback = undefined; } },
  () => { steps++; return active; }, () => {});
  scheduler.wake();
  for (time = 40; time <= 10000; time += 40) { const next = callback; callback = undefined; next?.(time); }
  expect(steps).toBe(250);
  expect(callback).toBeDefined();
  active = false;
  for (; time <= 13000; time += 40) { const next = callback; callback = undefined; next?.(time); }
  expect(callback).toBeDefined();
  expect(steps).toBe(325);
  scheduler.stop();
  expect(callback).toBeUndefined();
});
