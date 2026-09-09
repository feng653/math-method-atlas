type Body = { position: { x: number; y: number }; vx: number; vy: number };
/** Follow pointer samples exponentially inside physics steps, including after release. */
export function advanceDrag(body: Body, target: { x: number; y: number }, h: number) {
  const alpha = 1 - Math.exp(-h / 0.035);
  const dx = (target.x - body.position.x) * alpha, dy = (target.y - body.position.y) * alpha;
  body.position.x += dx; body.position.y += dy;
  body.vx = dx / h; body.vy = dy / h;
  return Math.hypot(target.x - body.position.x, target.y - body.position.y) < 0.25;
}
