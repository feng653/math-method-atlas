import type { Edge } from '@xyflow/react';
import type { AtlasNode } from './graph';

/** Visual degree is computed once per graph; labels never alter physics. */
export function sizeGraphNodes(nodes: AtlasNode[], edges: Edge[]): AtlasNode[] {
  const neighbors = new Map(nodes.map(node => [node.id, new Set<string>()]));
  for (const edge of edges) {
    if (edge.source === edge.target) continue;
    if (!neighbors.has(edge.source) || !neighbors.has(edge.target)) continue;
    neighbors.get(edge.source)!.add(edge.target);
    neighbors.get(edge.target)!.add(edge.source);
  }
  return nodes.map(node => ({ ...node, data: { ...node.data,
    dotSize: Math.min(56, 12 + 6 * Math.sqrt(neighbors.get(node.id)!.size)),
  } }));
}
