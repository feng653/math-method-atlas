import type { Edge } from '@xyflow/react';
import type { AtlasNode } from './graph';

/** One visual parent per shared method; all semantic edges remain in data. */
export function primaryEdgeIds(nodes: AtlasNode[], edges: Edge[]) {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const chosen = new Map<string, { id: string; score: number }>();
  const visible = new Set<string>();
  for (const edge of edges) {
    if (!edge.id.startsWith('choice-')) { visible.add(edge.id); continue; }
    const a = byId.get(edge.source), b = byId.get(edge.target);
    if (!a || !b) continue;
    const score = Math.hypot(a.position.x - b.position.x, a.position.y - b.position.y)
      + (a.data.chapterId === b.data.chapterId ? 0 : 100000);
    if (score < (chosen.get(edge.target)?.score ?? Infinity)) chosen.set(edge.target, { id: edge.id, score });
  }
  for (const choice of chosen.values()) visible.add(choice.id);
  return visible;
}

export function edgeHandles(a: AtlasNode, b: AtlasNode) {
  const dx = b.position.x - a.position.x, dy = b.position.y - a.position.y;
  const vertical = Math.abs(dy) > Math.abs(dx) * 0.8;
  const source = vertical ? (dy < 0 ? 'top' : 'bottom') : (dx < 0 ? 'left' : 'right');
  const target = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[source];
  return { sourceHandle: `${source}-source`, targetHandle: `${target}-target` };
}
