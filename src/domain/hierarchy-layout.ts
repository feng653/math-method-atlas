import type { Edge } from '@xyflow/react';
import type { AtlasNode } from './graph';
import { primaryEdgeIds } from './edge-layout';
import { createElasticLayout, stepElasticLayout, settleCollisions } from './elastic-layout';

/** Deterministic force relaxation; the same engine also handles interactive dragging. */
export function hierarchyLayout(graph: { nodes: AtlasNode[]; edges: Edge[] }, compact = false) {
  const primary = primaryEdgeIds(graph.nodes, graph.edges);
  const edges = graph.edges.map((edge) => ({ ...edge,
    data: { ...edge.data, layoutPrimary: primary.has(edge.id) } }));
  const nodes = graph.nodes.map((node) => {
    return { ...node, data: { ...node.data, compact },
      position: { x: node.position.x * 0.65, y: node.position.y * 0.65 } };
  });
  const layout = createElasticLayout(nodes, edges, true);
  for (let tick = 0; tick < 420; tick++) stepElasticLayout(layout, null, tick);
  settleCollisions(layout);
  return { nodes: nodes.map((node) => ({ ...node,
    position: { ...layout.bodies.get(node.id)!.position } })), edges };
}
