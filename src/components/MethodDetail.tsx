import { ArrowUpRight, X } from 'lucide-react';
import type { Library, Method, Paper, Question } from '../domain/schema';
import { ArticlePanel } from './ArticlePanel';
import { getMethodStats } from '../domain/statistics';
import { getArchiveStats } from '../domain/archive-statistics';
import { ArchiveCoverage } from './ArchiveCoverage';
import { MethodLearning } from './MethodLearning';
import { Formula } from './Formula';
import { QuestionCards } from './QuestionCards';
import { MethodExample } from './MethodExample';

type Props = { method: Method; methods: Method[]; questions: Question[]; papers: Paper[];
  examScope?: Library['examScope'];
  onClose: () => void; onSelect: (id: string) => void };
export function MethodDetail({ method, methods, questions, papers, examScope, onClose, onSelect }: Props) {
  if (method.article !== undefined) return <ArticlePanel path={method.article} onClose={onClose} />;
  const stats = getMethodStats(method.id, questions);
  return <aside className="detail-panel glass-panel" aria-label="方法详情">
    <header className="panel-header"><span className="eyebrow">METHOD / 方法</span>
      <button aria-label="关闭方法详情" onClick={onClose}><X size={19} /></button></header>
    <div className="detail-scroll">
      {method.supersededBy && <section aria-label="新版细分工具"><h2>本类已拆分为独立工具</h2>
        <div className="related-methods">{method.supersededBy.map(id => <button key={id} onClick={() => onSelect(id)}>
          {methods.find(item => item.id === id)?.title ?? id}</button>)}</div>
        <p className="muted">以下保留原大类的内容与真题关联；这些关联不自动计入新工具。</p></section>}
      <h1>{method.title}</h1>
      <p className="method-summary">{method.summary}</p>
      <span className="status-tag">{method.status === 'reviewed' ? '已交叉审校' : '内容草案'}</span>
      {method.learning && <MethodLearning learning={method.learning} />}
      <Formula value={method.formula} />
      <h2>怎么做</h2>
      <ol className="steps">{method.steps.map((text) => <li key={text}>{text}</li>)}</ol>
      <MethodExample key={method.id} example={method.example} questions={questions} papers={papers}
        expanded={Boolean(method.learning)} />
      <h2>什么时候适用</h2>
      <ul>{method.conditions.map((text) => <li key={text}>{text}</li>)}</ul>
      <h2>留意这些条件</h2>
      <ul>{method.pitfalls.map((text) => <li key={text}>{text}</li>)}</ul>
      <h2>相关方法</h2>
      <div className="related-methods">{method.relatedIds.map((id) => <button key={id} onClick={() => onSelect(id)}>
        {methods.find((item) => item.id === id)?.title ?? id}<ArrowUpRight size={14} /></button>)}</div>
      <h2>真题足迹</h2>
      <p className="muted">{stats.questionCount ? `已核验 ${stats.questionCount} 题 · 出现于 ${stats.paperCount} 张试卷`
        : '尚无已核验关联，不代表从未考查。'}</p>
      <ArchiveCoverage stats={getArchiveStats(papers, questions, examScope)} />
      <QuestionCards questions={stats.questions} papers={papers} />
    </div>
  </aside>;
}
