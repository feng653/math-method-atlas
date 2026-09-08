import { ArrowUpRight } from 'lucide-react';
import type { Method, Paper, Question } from '../domain/schema';
import type { ThinkingSample } from '../domain/thinking-schema';
import { sourceHref } from '../domain/source';

type Props = { samples: ThinkingSample[]; questions: Question[]; papers: Paper[]; methods: Method[];
  onSelect: (id: string) => void };
export function ThinkingSamples({ samples, questions, papers, methods, onSelect }: Props) {
  if (!samples.length) return null;
  return <section className="thinking-samples" aria-label="真题思路样本">
    <h2>在真题中怎样想到</h2>
    <p className="muted">代表性抽样，用于说明思路，不是考试频次或完整解法统计。</p>
    {samples.map((sample) => {
      const question = questions.find((item) => item.id === sample.questionId && item.libraryId === sample.libraryId);
      if (!question) return null;
      const paper = papers.find((item) => item.id === question.paperId && item.libraryId === sample.libraryId);
      return <details className="thinking-sample" key={sample.id}>
        <summary>{paper?.year} 年 · 第 {question.number} 题<small>{question.summary}</small></summary>
        <h3>看见的信号</h3><p>{sample.signal}</p>
        <h3>思考顺序</h3><ol>{sample.reasoning.map((text) => <li key={text}>{text}</li>)}</ol>
        <p className="sample-boundary">边界：{sample.boundary}</p>
        <div className="related-methods">{sample.methodIds.map((id) => <button key={id} onClick={() => onSelect(id)}>
          {methods.find((method) => method.id === id)?.title ?? id}<ArrowUpRight size={14} /></button>)}</div>
        <a className="evidence-link" href={sourceHref(question.source)} target="_blank" rel="noreferrer">查看原题来源<ArrowUpRight size={15} /></a>
        <p className="fine-print">{sample.evidenceBasis}</p>
      </details>;
    })}
  </section>;
}
