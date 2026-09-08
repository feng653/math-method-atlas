import { ArrowUpRight, X } from 'lucide-react';
import type { Method, Paper, ProblemType, Question } from '../domain/schema';
import { getProblemQuestions } from '../domain/problem-types';
import { resolveSource, sourceHref } from '../domain/source';
import { Formula } from './Formula';
import { SourceDetails } from './SourceDetails';

type Props = { type: ProblemType; methods: Method[]; questions: Question[]; papers: Paper[];
  onSelect: (id: string) => void; onClose: () => void };
export function ProblemTypeDetail({ type, methods, questions, papers, onSelect, onClose }: Props) {
  const examples = getProblemQuestions(type, questions);
  const trigger = type.kind === 'trigger';
  const label = trigger ? '触发条件' : '题型';
  return <aside className="detail-panel glass-panel" aria-label={`${label}详情`}>
    <header className="panel-header"><span className="eyebrow">{trigger ? 'TRIGGER / 触发条件' : 'PROBLEM TYPE / 题型'}</span>
      <button aria-label={`关闭${label}详情`} onClick={onClose}><X size={19} /></button></header>
    <div className="detail-scroll">
      <h1>{type.title}</h1><p className="method-summary">{type.summary}</p>
      <span className="status-tag">{type.status === 'reviewed' ? `已审校${label}` : `${label}内容草案`}</span>
      <h2>{trigger ? '看到什么时想到' : '识别题目要求'}</h2><ul>{type.recognition.map((text) => <li key={text}>{text}</li>)}</ul>
      <h2>{trigger ? '下一步尝试' : '解题检查顺序'}</h2><ol className="steps">{type.strategy.map((text) => <li key={text}>{text}</li>)}</ol>
      <h2>可选方法 · {type.methods.length}</h2>
      {type.methods.map((choice) => <div className="type-choice" key={choice.methodId}>
        <button onClick={() => onSelect(choice.methodId)}>
          {methods.find((method) => method.id === choice.methodId)?.title ?? choice.methodId}<ArrowUpRight size={15} /></button>
        <p>{choice.when}</p></div>)}
      {type.formulas.length > 0 && <h2>{trigger ? '结构示例' : '常用二级公式'} · {type.formulas.length}</h2>}
      {type.formulas.map((formula) => <details className="derived-formula" key={formula.id}>
        <summary>{formula.title}</summary><Formula value={formula.latex} />
        <ul>{formula.conditions.map((condition) => <li key={condition}>{condition}</li>)}</ul>
        <p>{formula.derivation}</p><div className="related-methods">
          {formula.methodIds.map((id) => <button key={id} onClick={() => onSelect(id)}>
            {methods.find((method) => method.id === id)?.title ?? id}<ArrowUpRight size={14} /></button>)}</div>
      </details>)}
      <h2>分类与使用边界</h2><ul>{type.boundaries.map((text) => <li key={text}>{text}</li>)}</ul>
      {!trigger && <><h2>本题型历年真题</h2>
      <p className="muted">{examples.length ? `已选入 ${examples.length} 题，按作答目标归类；复合题可属于多个题型。`
        : '尚未选入对应真题，不代表从未考查。'}{type.status === 'draft' && ' 分类仍待独立复核，不作为题型考试频次。'}</p>
      {examples.map((question) => <div key={question.id}><a className="evidence-link" href={sourceHref(question.source)}
        target="_blank" rel="noreferrer"><span>{papers.find((paper) => paper.id === question.paperId)?.year} 年 · 第 {question.number} 题
          <small>{question.summary}</small></span><ArrowUpRight size={16} /></a>
        <SourceDetails source={resolveSource(question.source, papers.find((paper) => paper.id === question.paperId)?.source)} /></div>)}</>}
    </div>
  </aside>;
}
