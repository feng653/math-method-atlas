type Point = { position: { x: number; y: number } };

/** Rebuild per step. Only adjacent spatial cells can contain pairs within radius. */
export function nearbyPairs(points: Point[], radius: number): [number, number][] {
  const cells = new Map<string, number[]>();
  const pairs: [number, number][] = [];
  points.forEach(({ position }, i) => {
    const x = Math.floor(position.x / radius), y = Math.floor(position.y / radius);
    for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
      for (const j of cells.get(`${x + ox},${y + oy}`) ?? []) {
        const other = points[j].position;
        const dx = position.x - other.x, dy = position.y - other.y;
        if (dx * dx + dy * dy < radius * radius) pairs.push([j, i]);
      }
    }
    const key = `${x},${y}`;
    const cell = cells.get(key);
    if (cell) cell.push(i);
    else cells.set(key, [i]);
  });
  return pairs;
}
