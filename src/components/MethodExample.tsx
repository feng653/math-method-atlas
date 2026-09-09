import type { Method, Paper, Question } from '../domain/schema';
import { sourceHref } from '../domain/source';
import { Formula } from './Formula';

export function MethodExample({ example, questions = [], papers = [], expanded = true }: {
  example: Method['example']; questions?: Question[]; papers?: Paper[]; expanded?: boolean;
}) {
  const question = questions.find(item => item.id === example.questionId);
  const paper = papers.find(item => item.id === question?.paperId);
  return <section className="example" aria-label="例题与分步解答">
    <span className="eyebrow">{question ? '真题 · 原创讲解' : '例题'}</span>
    {question && <p><a href={sourceHref(question.source)} target="_blank" rel="noreferrer">
      查看原题来源 · {paper ? `${paper.year} 年` : '真题'} · 第 {question.number} 题</a></p>}
    <p>{example.prompt}</p>
    {example.formulas?.map((value, index) => <Formula key={index} value={value} />)}
    <details open={expanded}><summary>分步解答</summary>
      {typeof example.solution === 'string'
        ? <div className="example-prose">{example.solution.split(/(?<=[。；])\s*/).filter(Boolean)
          .map((text, index) => <p key={index}>{text}</p>)}</div>
        : <div className="example-steps">{example.solution.map((step, index) => <section key={index}>
          <h3><span>{index + 1}</span>{step.title}</h3><p>{step.text}</p>
          {step.formulas.map((value, n) => <Formula key={n} value={value} />)}
        </section>)}</div>}
    </details>
  </section>;
}
