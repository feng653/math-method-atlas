import { useEffect, useMemo, useState } from 'react';
import { Background, ReactFlow, useNodesState, type ReactFlowInstance } from '@xyflow/react';
import { Focus, Minus, Plus, RotateCcw, Waves } from 'lucide-react';
import { buildGraph, graphNodeId, type AtlasNode as NodeType } from '../domain/graph';
import type { Library, Method } from '../domain/schema';
import { AtlasNode } from './AtlasNode';
import { useElasticGraph } from './useElasticGraph';

const nodeTypes = { atlas: AtlasNode };
type Props = { library: Library; methods: Method[]; selected: string; chapter: string;
  onSelect: (id: string) => void; onChapter: (id: string) => void };

export function AtlasGraph({ library, methods, selected, chapter, onSelect, onChapter }: Props) {
  const [allMethods, setAllMethods] = useState(true);
  const [motion, setMotion] = useState(true);
  const graph = useMemo(() => buildGraph(library, methods, chapter, allMethods), [library, methods, chapter, allMethods]);
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeType>(graph.nodes);
  const elastic = useElasticGraph(graph.nodes, graph.edges, motion, setNodes);
  const [flow, setFlow] = useState<ReactFlowInstance<NodeType> | null>(null);
  const [zoom, setZoom] = useState(1);
  const duration = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 650;
  useEffect(() => { setNodes(graph.nodes); }, [graph, setNodes]);
  useEffect(() => {
    if (!flow) return;
    const timer = setTimeout(() => {
      const node = selected ? flow.getNode(graphNodeId('method', selected)) : undefined;
      if (node) void flow.setCenter(node.position.x + 105, node.position.y + 25, { zoom: 1.05, duration: duration() });
      else void flow.fitView({ padding: 0.22, duration: duration() });
    }, 80);
    return () => clearTimeout(timer);
  }, [flow, graph, selected]);
  useEffect(() => {
    setNodes((current) => current.map((node) => ({ ...node, selected: node.data.methodId === selected })));
  }, [selected, graph, setNodes]);
  const selectedMethod = methods.find((method) => method.id === selected);
  const selectedNodeId = graphNodeId('method', selected);
  const motionAllowed = elastic.active;
  const edges = graph.edges.map((edge) => ({ ...edge,
    animated: motionAllowed && edge.target === selectedNodeId,
    style: { ...edge.style, opacity: selected && edge.target !== selectedNodeId ? 0.13 : edge.style?.opacity },
  }));
  if (selectedMethod) for (const relatedId of selectedMethod.relatedIds) {
    const relatedNodeId = graphNodeId('method', relatedId);
    if (nodes.some((node) => node.id === relatedNodeId)) edges.push({ id: `relation-${relatedId}`,
      source: selectedNodeId, target: relatedNodeId, animated: motionAllowed, type: 'default',
      style: { stroke: '#b48c53', strokeDasharray: '5 6', strokeWidth: 1.3, opacity: 0.65 } });
  }
  function activateNode(id: string) {
    const node = nodes.find((item) => item.id === id);
    if (node?.data.kind === 'method') onSelect(node.data.methodId ?? '');
    else if (node?.data.kind === 'chapter') onChapter(node.data.chapterId ?? '');
    else if (node) onChapter('');
  }
  function restoreLayout() {
    elastic.reset();
    setNodes(graph.nodes.map((node) => ({ ...node, selected: node.data.methodId === selected })));
    requestAnimationFrame(() => { void flow?.fitView({ duration: duration() }); });
  }
  return <section className={`graph-stage ${elastic.active ? 'is-flowing' : ''}`} aria-label="可拖拽缩放的方法思维导图" onKeyDownCapture={(event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const wrapper = (event.target as HTMLElement).closest<HTMLElement>('.react-flow__node');
    if (!wrapper?.dataset.id) return;
    event.preventDefault(); event.stopPropagation(); activateNode(wrapper.dataset.id);
  }}>
    <ReactFlow<NodeType> nodes={nodes} edges={edges} nodeTypes={nodeTypes}
      onNodesChange={(changes) => { elastic.sync(changes); onNodesChange(changes); }}
      onInit={setFlow} onMoveEnd={(_, viewport) => setZoom(viewport.zoom)}
      onNodeDragStart={(_, node) => elastic.drag(node)} onNodeDrag={(_, node) => elastic.drag(node)}
      onNodeDragStop={(_, node) => elastic.release(node)} nodeDragThreshold={5}
      onNodeClick={(_, node) => activateNode(node.id)}
      fitView minZoom={0.03} maxZoom={2.2} nodesConnectable={false} edgesReconnectable={false}
      deleteKeyCode={null} selectionOnDrag={false} zoomOnDoubleClick={false}
      ariaLabelConfig={{ 'node.a11yDescription.default': '按 Enter 选择方法，方向键移动节点。',
        'node.a11yDescription.keyboardDisabled': '选择节点查看内容。' }}>
      <Background color="#ccd6cf" gap={30} size={0.9} />
    </ReactFlow>
    <div className="graph-views" aria-label="图谱范围">
      <button aria-pressed={allMethods && !chapter} onClick={() => { setAllMethods(true); onChapter('');
        if (allMethods && !chapter) void flow?.fitView({ duration: duration(), padding: 0.22 }); }}>
        完整图谱 <small>{methods.length}</small></button>
      <button aria-pressed={!allMethods && !chapter} onClick={() => { setAllMethods(false); onChapter(''); }}>章节概览</button>
    </div>
    <div className="canvas-controls" aria-label="画布控制">
      <button aria-label="缩小" title="缩小" onClick={() => void flow?.zoomOut({ duration: duration() })}><Minus size={17} /></button>
      <span className="zoom-label">{Math.round(zoom * 100)}%</span>
      <button aria-label="放大" title="放大" onClick={() => void flow?.zoomIn({ duration: duration() })}><Plus size={17} /></button>
      <i />
      <button aria-label="适配当前图" title="适配当前图" onClick={() => void flow?.fitView({ duration: duration(), padding: 0.18 })}><Focus size={17} /></button>
      <button aria-label={motion ? '暂停图谱流动' : '开启图谱流动'} title={motion ? '暂停图谱流动' : '开启图谱流动'}
        aria-pressed={motion} onClick={() => setMotion(!motion)}><Waves size={17} /></button>
      <button aria-label="恢复节点布局" title="恢复节点布局" onClick={restoreLayout}><RotateCcw size={16} /></button>
    </div>
    <div className="canvas-hint">拖动节点感受牵引 · 滚轮缩放 · 点击节点深入</div>
  </section>;
}
