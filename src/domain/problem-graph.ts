import type { Edge } from '@xyflow/react';
import type { AtlasNode } from './graph';
import type { ProblemType } from './schema';
import { separateNodes } from './layout';

/** Insert the task layer into the existing layout; method nodes remain shared. */
export function addProblemTypes(graph: { nodes: AtlasNode[]; edges: Edge[] }, types: ProblemType[],
  chapterId: string, libraryId: string) {
  if (!types.length) return graph;
  const nodes = [...graph.nodes], edges = [...graph.edges];
  const attached = new Set<string>();
  for (const [index, type] of types.entries()) {
    const parent = nodes.find((node) => node.id === (chapterId ? `root:${libraryId}` : `chapter:${type.chapterId}`));
    if (!parent) continue;
    const children = nodes.filter((node) => node.data.methodId && type.methods.some((choice) => choice.methodId === node.data.methodId));
    if (!children.length) continue;
    const average = children.reduce((sum, node) => ({ x: sum.x + node.position.x / children.length,
      y: sum.y + node.position.y / children.length }), { x: 0, y: 0 });
    const id = `problem:${type.id}`;
    const position = chapterId ? { x: index % 2 ? 160 : -370, y: (Math.floor(index / 2) - (types.length / 4)) * 180 }
      : { x: (parent.position.x + average.x) / 2, y: (parent.position.y + average.y) / 2 };
    nodes.push({ id, type: 'atlas', position, data: { kind: 'problem', label: type.title,
      subtitle: `${type.kind === 'trigger' ? '触发条件 · ' : ''}${type.methods.length} 个可选方法`, color: parent.data.color,
      problemTypeId: type.id, chapterId: type.chapterId } });
    const left = position.x < parent.position.x;
    edges.push({ id: `task-${type.id}`, source: parent.id, target: id, type: 'default',
      sourceHandle: left ? 'left-source' : 'right-source', targetHandle: left ? 'right-target' : 'left-target',
      style: { stroke: parent.data.color, opacity: 0.55 } });
    for (const child of children) {
      attached.add(child.id);
      const childLeft = child.position.x < position.x;
      edges.push({ id: `choice-${type.id}-${child.data.methodId}`, source: id, target: child.id, type: 'default',
        sourceHandle: childLeft ? 'left-source' : 'right-source', targetHandle: childLeft ? 'right-target' : 'left-target',
        style: { stroke: parent.data.color, opacity: 0.3 } });
    }
  }
  return { nodes: separateNodes(nodes), edges: edges.filter((edge) => !edge.id.startsWith('tree-') || !attached.has(edge.target)) };
}
