import { expect, it } from 'vitest';
import { createMotionScheduler } from '../src/domain/motion-scheduler';

function harness(interval = 50) {
  let time = 0, sequence = 0, steps = 0, running = false;
  const pending = new Map<number, (time: number) => void>();
  const scheduler = createMotionScheduler({ now: () => time,
    request(callback) { pending.set(++sequence, callback); return sequence; },
    cancel(id) { pending.delete(id); } }, () => steps++, (value) => { running = value; }, interval);
  return { scheduler, pending, get steps() { return steps; }, get running() { return running; },
    advance(duration: number) {
      for (let elapsed = 0; elapsed < duration; elapsed += 10) {
        time += 10;
        const callbacks = [...pending.values()]; pending.clear();
        callbacks.forEach((callback) => callback(time));
      }
    } };
}

it('stops scheduling frames after interaction and leaves idle time free of simulation', () => {
  const h = harness(); h.scheduler.wake(); h.advance(2000);
  expect(h.running).toBe(false); expect(h.pending.size).toBe(0);
  expect(h.steps).toBeLessThanOrEqual(36);
  const count = h.steps; h.advance(60000); expect(h.steps).toBe(count);
  h.scheduler.wake(); h.advance(100); expect(h.steps).toBeGreaterThan(count);
});

it('extends dragging without duplicate loops and cancels immediately when hidden or disabled', () => {
  const h = harness(); h.scheduler.wake(); h.advance(1000);
  h.scheduler.wake(); h.scheduler.wake(); expect(h.pending.size).toBe(1);
  h.advance(1000); expect(h.running).toBe(true);
  h.scheduler.stop(); expect(h.pending.size).toBe(0);
  const count = h.steps; h.advance(1000); expect(h.steps).toBe(count);
});
