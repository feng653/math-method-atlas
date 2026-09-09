import type { Method } from '../domain/schema';
import { Formula } from './Formula';

export function MethodExample({ example, expanded = true }: { example: Method['example']; expanded?: boolean }) {
  return <section className="example" aria-label="例题与分步解答">
    <span className="eyebrow">例题</span>
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
