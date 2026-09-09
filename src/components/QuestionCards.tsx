import type { Paper, Question } from '../domain/schema';
import { resolveSource, sourceHref } from '../domain/source';
import { SourceDetails } from './SourceDetails';
import { Formula } from './Formula';

export function QuestionCards({ questions, papers }: { questions: Question[]; papers: Paper[] }) {
  return <>
    {questions.map(question => <section className="question-card" key={question.id}>
      <h3>{papers.find(paper => paper.id === question.paperId)?.year} 年 · 第 {question.number} 题</h3>
      {question.statement ? <>
        <p>{question.statement.intro}</p>
        {question.statement.formulas.map((value, i) => <Formula key={i} value={value} />)}
        {question.statement.tasks.map((task, i) => <p key={i}>{task}</p>)}
        {question.statement.options?.map((value, i) => <div key={i}>
          <strong>{String.fromCharCode(65 + i)}.</strong><Formula value={value} /></div>)}
        <p className="muted">{question.statement.note}</p>
      </> : <><p>{question.summary}</p><p className="muted">原题题面尚待整理，目前仅有内容摘要。</p></>}
    </section>)}
    {questions.length > 0 && <details className="question-sources">
      <summary>真题来源 · {questions.length} 道题</summary>
      {questions.map(question => <div key={question.id}>
        <a className="evidence-link" href={sourceHref(question.source)} target="_blank" rel="noreferrer">
          {papers.find(paper => paper.id === question.paperId)?.year} 年 · 第 {question.number} 题 · 查看原卷
        </a>{question.statement?.source && <a className="evidence-link"
          href={sourceHref(question.statement.source)} target="_blank" rel="noreferrer">题面整理核对页</a>}
        <SourceDetails source={resolveSource(question.source,
          papers.find(paper => paper.id === question.paperId)?.source)} />
      </div>)}
    </details>}
  </>;
}
