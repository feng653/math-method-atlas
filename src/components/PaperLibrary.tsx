import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Paper, Question, Method } from '../domain/schema';

type Props = { papers: Paper[]; questions: Question[]; methods: Method[]; onClose: () => void;
  onSelect: (id: string) => void };
export function PaperLibrary({ papers, questions, methods, onClose, onSelect }: Props) {
  const [year, setYear] = useState('');
  const [methodId, setMethodId] = useState('');
  const filtered = papers.filter((paper) => !year || String(paper.year) === year).sort((a, b) => b.year - a.year);
  return <aside className="detail-panel glass-panel" aria-label="历年真题">
    <header className="panel-header"><span className="eyebrow">ARCHIVE / 真题</span>
      <button aria-label="关闭真题库" onClick={onClose}><X size={19} /></button></header>
    <div className="detail-scroll"><h1>让方法回到题目里。</h1>
      <p className="muted">目标 2009—2026 年 · 当前 {papers.length} 卷有来源，{questions.length} 题已索引。</p>
      <label className="field-label">年份<select value={year} onChange={(event) => setYear(event.target.value)}>
        <option value="">全部年份</option>{[...papers].sort((a, b) => b.year - a.year).map((paper) =>
          <option key={paper.id} value={paper.year}>{paper.year}</option>)}</select></label>
      <label className="field-label">关联方法<select value={methodId} onChange={(event) => setMethodId(event.target.value)}>
        <option value="">全部方法</option>{methods.map((method) => <option key={method.id} value={method.id}>{method.title}</option>)}</select></label>
      {!papers.length && <p>尚未收录真题来源。</p>}
      {filtered.map((paper) => {
        const entries = questions.filter((question) => question.paperId === paper.id
          && (!methodId || question.methodLinks.some((link) => link.methodId === methodId)));
        return <section className="paper" key={paper.id}><h2>{paper.year} 年数学一</h2>
          <a href={paper.source.url} target="_blank" rel="noreferrer">查看来源原卷 <ArrowUpRight size={14} /></a>
          <p className="fine-print">已索引 {questions.filter((q) => q.paperId === paper.id).length}/{paper.expectedQuestionCount ?? '待核'} 题 ·
            {paper.status === 'complete' ? '逐题索引齐全' : '收录进行中'}</p>
          {!entries.length && <p className="muted">{methodId ? '此筛选下暂无关联记录。' : '逐题内容待录入。'}</p>}
          {entries.map((question) => <article className="question-card" key={question.id}>
            <a href={`${question.source.url}${question.source.page ? `#page=${question.source.page}` : ''}`} target="_blank" rel="noreferrer">
              第 {question.number} 题 <ArrowUpRight size={14} /></a><p>{question.summary}</p>
            <div className="related-methods">{question.methodLinks.map((link) => <button key={link.methodId}
              onClick={() => onSelect(link.methodId)}>{methods.find((m) => m.id === link.methodId)?.title}
              {link.verification === 'pending' ? ' · 待核' : ''}</button>)}</div>
            <details><summary>关联依据</summary>{question.methodLinks.map((link) => <p key={link.methodId}>{link.note}</p>)}</details>
          </article>)}</section>;
      })}
      <p className="fine-print">原题在来源站点查看，本库保存原创方法分析与索引。未收录年份不参与频次统计。</p>
    </div></aside>;
}
