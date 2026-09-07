import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Paper, Question, Method, Library } from '../domain/schema';
import { getArchiveStats } from '../domain/archive-statistics';
import { ArchiveCoverage } from './ArchiveCoverage';
import { methodRoleLabel } from '../domain/method-roles';
import { resolveSource, sameSourceResource, sourceHref, sourceLocationLabel } from '../domain/source';
import { SourceDetails } from './SourceDetails';
import { Subquestions } from './Subquestions';

type Props = { papers: Paper[]; questions: Question[]; methods: Method[]; chapters: Library['chapters']; onClose: () => void;
  examScope?: Library['examScope'];
  onSelect: (id: string) => void };
export function PaperLibrary({ papers, questions, methods, chapters, examScope, onClose, onSelect }: Props) {
  const [year, setYear] = useState('');
  const [methodId, setMethodId] = useState('');
  const [subject, setSubject] = useState('');
  const archive = getArchiveStats(papers, questions, examScope);
  const subjects = [...new Set(chapters.map((chapter) => chapter.subject))];
  const eligibleMethods = methods.filter((method) => !subject || chapters.some((chapter) =>
    chapter.id === method.chapterId && chapter.subject === subject));
  const eligibleIds = new Set(eligibleMethods.map((method) => method.id));
  const matchingQuestions = questions.filter((question) =>
    (!subject || question.methodLinks.some((link) => eligibleIds.has(link.methodId)))
    && (!methodId || question.methodLinks.some((link) => link.methodId === methodId)));
  const filtered = papers.filter((paper) => (!year || String(paper.year) === year)
    && (!(subject || methodId) || matchingQuestions.some((question) => question.paperId === paper.id)))
    .sort((a, b) => b.year - a.year);
  return <aside className="detail-panel glass-panel" aria-label="历年真题">
    <header className="panel-header"><span className="eyebrow">ARCHIVE / 真题</span>
      <button aria-label="关闭真题库" onClick={onClose}><X size={19} /></button></header>
    <div className="detail-scroll"><h1>让方法回到题目里。</h1>
      <ArchiveCoverage stats={archive} />
      {papers.length > 0 && <><label className="field-label">年份<select aria-label="年份" value={year} onChange={(event) => setYear(event.target.value)}>
        <option value="">全部年份</option>{[...papers].sort((a, b) => b.year - a.year).map((paper) =>
          <option key={paper.id} value={paper.year}>{paper.year}</option>)}</select></label>
      <details><summary>按学科与方法筛选</summary>
        <label className="field-label">学科<select aria-label="学科" value={subject} onChange={(event) => { setSubject(event.target.value); setMethodId(''); }}>
          <option value="">全部学科</option>{subjects.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="field-label">关联方法<select aria-label="关联方法" value={methodId} onChange={(event) => setMethodId(event.target.value)}>
          <option value="">全部方法</option>{eligibleMethods.map((method) => <option key={method.id} value={method.id}>{method.title}</option>)}</select></label>
      </details></>}
      {papers.length > 0 && !filtered.length && <p role="status">此筛选下暂无关联记录。</p>}
      {filtered.map((paper) => {
        const entries = matchingQuestions.filter((question) => question.paperId === paper.id);
        const stats = archive.perPaper.find((item) => item.paperId === paper.id)!;
        return <section className="paper" key={paper.id}><h2>{paper.title}</h2>
          <a href={paper.source.url} target="_blank" rel="noreferrer">查看来源原卷 <ArrowUpRight size={14} /></a>
          <SourceDetails source={paper.source} />
          <p className="fine-print">{paper.sourceNote ?? '公开转载来源，尚未完成官方原卷逐字核对。'}</p>
          <p className="fine-print">已索引 {stats.indexed}/{stats.expected ?? '待核'} 题 ·
            {stats.complete ? '逐题索引齐全' : '收录进行中'}</p>
          {!entries.length && <p className="muted">{methodId || subject ? '此筛选下暂无关联记录。' : '逐题内容待录入。'}</p>}
          {entries.map((question) => <article className="question-card" key={question.id}>
            <a href={sourceHref(question.source)} target="_blank" rel="noreferrer">
              第 {question.number} 题 <ArrowUpRight size={14} /></a><p>{question.summary}</p>
            {question.source.locatorKind === 'image-index' && <p className="fine-print">{sourceLocationLabel(question.source)}</p>}
            {question.sourceNote && <p className="source-note">{question.sourceNote}</p>}
            {(question.source.metadata || !sameSourceResource(question.source.url, paper.source.url))
              && <SourceDetails source={resolveSource(question.source, paper.source)} />}
            <div className="related-methods">{question.methodLinks.map((link) => <button key={link.methodId}
              onClick={() => onSelect(link.methodId)}>{methods.find((m) => m.id === link.methodId)?.title}
              <small className="method-role">{methodRoleLabel(link.role)}</small>
              {link.verification === 'pending' ? ' · 待核' : ''}</button>)}</div>
            <Subquestions question={question} methods={methods} onSelect={onSelect} />
            <details><summary>关联依据</summary>{question.methodLinks.map((link) => <div key={link.methodId}>
              <p><strong>{methods.find((method) => method.id === link.methodId)?.title} · {methodRoleLabel(link.role)}</strong></p>
              {link.roleNote && <p>{link.roleNote}</p>}<p>{link.note}</p>
            </div>)}</details>
          </article>)}</section>;
      })}
      {papers.length > 0 && <p className="fine-print">原题在来源站点查看，本库保存原创方法分析与索引。</p>}
    </div></aside>;
}
