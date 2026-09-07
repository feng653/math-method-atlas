import type { AtlasNode } from './graph';

/** Keep readable card rectangles separate while retaining the radial branch structure. */
export function separateNodes(nodes: AtlasNode[]): AtlasNode[] {
  const placed: AtlasNode[] = [];
  const overlaps = (x: number, y: number) => placed.some((other) =>
    Math.abs(other.position.x - x) < 240 && Math.abs(other.position.y - y) < 90);
  for (const node of nodes) {
    let { x, y } = node.position;
    if (overlaps(x, y)) {
      search: for (let radius = 1; radius <= nodes.length; radius++) {
        for (let dy = -radius; dy <= radius; dy++) {
          for (let dx = -radius; dx <= radius; dx++) {
            if (Math.max(Math.abs(dx), Math.abs(dy)) !== radius) continue;
            const candidateX = node.position.x + dx * 240;
            const candidateY = node.position.y + dy * 90;
            if (!overlaps(candidateX, candidateY)) {
              x = candidateX; y = candidateY; break search;
            }
          }
        }
      }
    }
    placed.push({ ...node, position: { x, y } });
  }
  return placed;
}
