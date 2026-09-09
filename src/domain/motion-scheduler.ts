import { PHYSICS_STEP } from './physics-settings';
type Clock = { now: () => number; request: (callback: (time: number) => void) => number;
  cancel: (id: number) => void };

/** Fixed physics, independent publication rate; hidden time is never replayed. */
export function createMotionScheduler(clock: Clock, step: (time: number) => void,
  onRunning: (running: boolean) => void, interval = 40, publish: () => void = () => {}) {
  let frame: number | null = null, previous = 0, lastPublish = -Infinity, accumulator = 0, elapsed = 0;
  function stop() {
    if (frame !== null) clock.cancel(frame);
    frame = null; accumulator = 0; onRunning(false);
  }
  function tick(time: number) {
    frame = null;
    accumulator += Math.min(100, Math.max(0, time - previous));
    previous = time;
    const stepMs = PHYSICS_STEP * 1000;
    while (accumulator + 1e-8 >= stepMs) {
      elapsed += stepMs; step(elapsed); accumulator -= stepMs;
    }
    if (time - lastPublish >= interval) { lastPublish = time; publish(); }
    frame = clock.request(tick);
  }
  return { stop, wake() {
    if (frame === null) { previous = clock.now(); onRunning(true); frame = clock.request(tick); }
  } };
}
