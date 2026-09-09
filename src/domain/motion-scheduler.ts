type Clock = { now: () => number; request: (callback: (time: number) => void) => number;
  cancel: (id: number) => void };

/** Active physics extends the window until settled; idle work leaves no queued frames. */
export function createMotionScheduler(clock: Clock, step: (time: number) => boolean | void,
  onRunning: (running: boolean) => void, interval = 40) {
  let frame: number | null = null, deadline = 0, previous = -Infinity;
  function stop() {
    if (frame !== null) clock.cancel(frame);
    frame = null;
    onRunning(false);
  }
  function tick(time: number) {
    frame = null;
    if (time >= deadline) { stop(); return; }
    if (time - previous >= interval) { previous = time;
      if (step(time) === true) deadline = time + 1800; }
    frame = clock.request(tick);
  }
  return { stop, wake() {
    deadline = clock.now() + 1800;
    if (frame === null) { onRunning(true); frame = clock.request(tick); }
  } };
}
