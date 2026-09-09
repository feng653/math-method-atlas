import { ForceTestSliders } from './ForceTestSliders';
import { LevelHighlight } from './LevelHighlight';
import { useEffect, useMemo, useState } from 'react';
import { Background, ReactFlow, useNodesState, type ReactFlowInstance } from '@xyflow/react';
import { Focus, Minus, Plus, RotateCcw, Waves, Network } from 'lucide-react';
import { primaryEdgeIds } from '../domain/edge-layout';
import { buildGraph, graphNodeId, type AtlasNode as NodeType } from '../domain/graph';
import type { Library, Method, ProblemType } from '../domain/schema';
import { sizeGraphNodes } from '../domain/node-presentation';
import { AtlasNode } from './AtlasNode';
import { useElasticGraph } from './useElasticGraph';
import { thinkingCategories } from '../domain/thinking-schema';

const nodeTypes = { atlas: AtlasNode };
type Props = { library: Library; methods: Method[]; selected: string; chapter: string;
  problemTypes: ProblemType[]; problemType: string; onProblemType: (id: string) => void;
  onSelect: (id: string) => void; onChapter: (id: string) => void };

export function AtlasGraph({ library, methods, selected, chapter, problemTypes, problemType, onProblemType, onSelect, onChapter }: Props) {
  const [allMethods, setAllMethods] = useState(true);
  const [motion, setMotion] = useState(true);
  const [allLinks, setAllLinks] = useState(false);
  const [highlightLevel, setHighlightLevel] = useState('');
  const [hovered, setHovered] = useState('');
  const [categoryView, setCategoryView] = useState<{ id: string; chapter: string } | null>(null);
  const category = !selected && !problemType && categoryView?.chapter === chapter ? categoryView.id : '';
  useEffect(() => { if (!chapter) setCategoryView(null); }, [chapter]);
  const graph = useMemo(() => {
    const groups = category ? problemTypes.filter((group) => group.chapterId === chapter && group.category === category) : problemTypes;
    const choices = new Set(groups.flatMap((group) => group.methods.map((choice) => choice.methodId)));
    const result = buildGraph(library, category ? methods.filter((method) => choices.has(method.id)) : methods,
      chapter, allMethods, groups, problemType);
    const compact = allMethods && !chapter && !problemType;
    return { ...result, nodes: sizeGraphNodes(result.nodes.map((node) => ({ ...node, data: { ...node.data, compact } })), result.edges) };
  },
    [library, methods, chapter, allMethods, problemTypes, problemType, category]);
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeType>(graph.nodes);
  const primary = useMemo(() => primaryEdgeIds(graph.nodes, graph.edges), [graph]);
  const elastic = useElasticGraph(graph.nodes, graph.edges, motion, setNodes);
  const [flow, setFlow] = useState<ReactFlowInstance<NodeType> | null>(null);
  const [zoom, setZoom] = useState(1);
  const duration = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 650;
  function readGraph(instance = flow) {
    if (!instance) return;
    const labels = instance.getNodes();
    if (!labels.length) return;
    const left = Math.min(...labels.map(n => n.position.x - 150));
    const top = Math.min(...labels.map(n => n.position.y));
    const right = Math.max(...labels.map(n => n.position.x + 150));
    const bottom = Math.max(...labels.map(n => n.position.y + 150));
    void instance.fitBounds({ x: left, y: top, width: right - left, height: bottom - top },
      { padding: 0.06, duration: duration() });
  }
  useEffect(() => { setNodes(graph.nodes); }, [graph, setNodes]);
  useEffect(() => {
    if (!flow) return;
    const timer = setTimeout(() => {
      const node = selected ? flow.getNode(graphNodeId('method', selected)) : undefined;
      if (node) void flow.setCenter(node.position.x + 105, node.position.y + 25, { zoom: 1.05, duration: duration() });
      else readGraph(flow);
    }, 80);
    return () => clearTimeout(timer);
  }, [flow, graph, selected]);
  useEffect(() => {
    setNodes((current) => current.map((node) => ({ ...node, selected: node.data.methodId === selected })));
  }, [selected, graph, setNodes]);
  const selectedMethod = methods.find((method) => method.id === selected);
  const selectedNodeId = graphNodeId('method', selected);
  const motionAllowed = elastic.active;
  const byId = new Map(graph.nodes.map((node) => [node.id, node]));
  const levels = [['chapter', '章节'], ['category', '分类'], ['problem', '题型'], ['method', '方法']]
    .filter(([kind]) => graph.nodes.some(n => n.data.kind === kind));
  const active = hovered || (selected ? selectedNodeId : '');
  const edges = graph.edges.filter((edge) => allLinks || byId.get(edge.target)?.data.kind === highlightLevel || primary.has(edge.id)
    || edge.source === active || edge.target === active).map((edge) => {
    const a = byId.get(edge.source), b = byId.get(edge.target);
    const related = edge.source === active || edge.target === active;
    const levelMatch = b?.data.kind === highlightLevel;
    return { ...edge, sourceHandle: 'dot-source', targetHandle: 'dot-target', type: 'straight',
      animated: motionAllowed && related,
      style: { ...edge.style, strokeWidth: highlightLevel && levelMatch ? 3 : edge.style?.strokeWidth,
        opacity: highlightLevel ? (levelMatch ? 1 : 0.05) : active ? (related ? 0.85 : 0.07)
        : a?.data.kind === 'root' && a.data.compact ? 0.09 : edge.style?.opacity } };
  });
  if (selectedMethod) for (const relatedId of selectedMethod.relatedIds) {
    const relatedNodeId = graphNodeId('method', relatedId);
    if (nodes.some((node) => node.id === relatedNodeId)) edges.push({ id: `relation-${relatedId}`,
      source: selectedNodeId, target: relatedNodeId, sourceHandle: 'dot-source', targetHandle: 'dot-target', animated: motionAllowed, type: 'default',
      style: { stroke: '#b48c53', strokeDasharray: '5 6', strokeWidth: 1.3, opacity: 0.65 } });
  }
  function activateNode(id: string) {
    const node = nodes.find((item) => item.id === id);
    if (node?.data.kind === 'method') onSelect(node.data.methodId ?? '');
    else if (node?.data.kind === 'problem') onProblemType(node.data.problemTypeId ?? '');
    else if (node?.data.kind === 'chapter') onChapter(node.data.chapterId ?? '');
    else if (node?.data.kind === 'category') {
      setCategoryView({ id: node.data.categoryId ?? '', chapter: node.data.chapterId ?? chapter });
      onChapter(node.data.chapterId ?? chapter);
    }
    else if (node) onChapter('');
  }
  function restoreLayout() {
    elastic.reset();
    setNodes(graph.nodes.map((node) => ({ ...node, selected: node.data.methodId === selected })));
    requestAnimationFrame(() => readGraph());
  }
  return <section className={`graph-stage ${elastic.active ? 'is-flowing' : ''}`} aria-label="可拖拽缩放的方法思维导图" onKeyDownCapture={(event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const wrapper = (event.target as HTMLElement).closest<HTMLElement>('.react-flow__node');
    if (!wrapper?.dataset.id) return;
    event.preventDefault(); event.stopPropagation(); activateNode(wrapper.dataset.id);
  }} onFocusCapture={(event) => setHovered((event.target as HTMLElement).closest<HTMLElement>('.react-flow__node')?.dataset.id ?? '')}
    onBlurCapture={() => setHovered('')}>
    {import.meta.env.DEV && <ForceTestSliders />}
    <div className="graph-canvas"><ReactFlow<NodeType> nodes={nodes} edges={edges} nodeTypes={nodeTypes}
      onNodesChange={(changes) => { elastic.sync(changes); onNodesChange(changes); }}
      onInit={setFlow} onMoveEnd={(_, viewport) => setZoom(viewport.zoom)}
      onNodeMouseEnter={(_, node) => setHovered(node.id)} onNodeMouseLeave={() => setHovered('')}
      onNodeDragStart={(_, node) => elastic.drag(node)} onNodeDrag={(_, node) => elastic.drag(node)}
      onNodeDragStop={(_, node) => elastic.release(node)} nodeDragThreshold={5}
      onNodeClick={(_, node) => activateNode(node.id)}
      minZoom={0.03} maxZoom={2.2} nodesConnectable={false} edgesReconnectable={false}
      deleteKeyCode={null} selectionOnDrag={false} zoomOnDoubleClick={false}
      ariaLabelConfig={{ 'node.a11yDescription.default': '按 Enter 选择方法，方向键移动节点。',
        'node.a11yDescription.keyboardDisabled': '选择节点查看内容。' }}>
      <Background color="#ccd6cf" gap={30} size={0.9} />
    </ReactFlow></div>
    <div className="graph-views" aria-label="图谱范围">
      {category && <button className="category-back" onClick={() => setCategoryView(null)} title="返回全部思路分类">← {thinkingCategories.find((item) => item.id === category)?.title}</button>}
      <button aria-pressed={allMethods && !chapter} onClick={() => { setAllMethods(true); onChapter('');
        if (allMethods && !chapter) readGraph(); }}>
        完整图谱 <small>{methods.length}</small></button>
      <button aria-pressed={!allMethods && !chapter} onClick={() => { setAllMethods(false); onChapter(''); }}>章节概览</button>
    </div>
    <div className="canvas-controls" aria-label="画布控制">
      <button aria-label="缩小" title="缩小" onClick={() => void flow?.zoomOut({ duration: duration() })}><Minus size={17} /></button>
      <span className="zoom-label">{Math.round(zoom * 100)}%</span>
      <button aria-label="放大" title="放大" onClick={() => void flow?.zoomIn({ duration: duration() })}><Plus size={17} /></button>
      <i />
      <button className="reading-size" onClick={() => void flow?.zoomTo(1, { duration: duration() })}>阅读大小</button>
      <button aria-label="适配全图" title="适配全图" onClick={() => readGraph()}><Focus size={17} /></button>
      <button aria-label={motion ? '暂停图谱流动' : '开启图谱流动'} title={motion ? '暂停图谱流动' : '开启图谱流动'}
        aria-pressed={motion} onClick={() => setMotion(!motion)}><Waves size={17} /></button>
      <button aria-label="恢复节点布局" title="恢复节点布局" onClick={restoreLayout}><RotateCcw size={16} /></button>
      <button aria-label={allLinks ? '仅显示主干连线' : '显示全部关联连线'} title={allLinks ? '仅显示主干连线' : '显示全部关联连线'}
        aria-pressed={allLinks} onClick={() => setAllLinks(!allLinks)}><Network size={17} /></button>
      <LevelHighlight value={highlightLevel} levels={levels} onChange={setHighlightLevel} />
    </div>
    <div className="canvas-hint">{zoom < 0.85 ? '整体预览 · 点击「阅读大小」放大文字' : '拖动空白浏览 · 滚轮缩放 · 点击节点深入'}</div>
  </section>;
}
