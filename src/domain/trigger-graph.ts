import type { Edge } from '@xyflow/react';
import type { AtlasNode } from './graph';
import type { ProblemType } from './schema';
import { thinkingCategories } from './thinking-schema';

/** Categories group trigger nodes only; ordinary problem-type branches stay intact. */
export function addTriggerCategories(graph: { nodes: AtlasNode[]; edges: Edge[] }, types: ProblemType[]) {
  const nodes = [...graph.nodes], edges = graph.edges.map((edge) => ({ ...edge }));
  for (const category of thinkingCategories) {
    const groups = types.filter((type) => type.kind === 'trigger' && type.category === category.id);
    const parents = new Map<string, Edge[]>();
    for (const group of groups) {
      const edge = edges.find((edge) => edge.id === `task-${group.id}`);
      if (edge) parents.set(edge.source, [...(parents.get(edge.source) ?? []), edge]);
    }
    for (const [parentId, children] of parents) {
      const parent = nodes.find((node) => node.id === parentId)!;
      const id = `category:${parentId}:${category.id}`;
      nodes.push({ id, type: 'atlas', position: { ...parent.position }, data: { kind: 'category',
        label: category.title, subtitle: `${children.length} 个触发条件`, color: category.color,
        categoryId: category.id, chapterId: parent.data.chapterId ?? groups[0]?.chapterId } });
      for (const edge of children) edge.source = id;
      edges.push({ id: `category-edge:${id}`, source: parentId, target: id, type: 'default',
        style: { stroke: category.color, opacity: 0.5 } });
    }
  }
  return { nodes, edges };
}
