type Clock = { now: () => number; request: (callback: (time: number) => void) => number;
  cancel: (id: number) => void };

/** Run continuously while enabled; pause and visibility changes explicitly stop the loop. */
export function createMotionScheduler(clock: Clock, step: (time: number) => void,
  onRunning: (running: boolean) => void, interval = 40) {
  let frame: number | null = null, previous = -Infinity;
  function stop() {
    if (frame !== null) clock.cancel(frame);
    frame = null;
    onRunning(false);
  }
  function tick(time: number) {
    frame = null;
    if (time - previous >= interval) { previous = time;
      step(time); }
    frame = clock.request(tick);
  }
  return { stop, wake() {
    if (frame === null) { onRunning(true); frame = clock.request(tick); }
  } };
}
