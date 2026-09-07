import type { Method, Question } from '../domain/schema';
import { resolveSource, sourceHref, sourceLocationLabel } from '../domain/source';
import { SourceDetails } from './SourceDetails';

type Props = { question: Question; methods: Method[]; onSelect: (id: string) => void };
export function Subquestions({ question, methods, onSelect }: Props) {
  const parts = question.subquestions;
  if (!parts?.length) return null;
  return <details><summary>{question.subquestionAudit ? '查看' : '已录'} {parts.length} 个子问</summary>
    {parts.map((part) => <section key={part.id}>
      <p><a href={sourceHref(part.source ?? question.source)} target="_blank" rel="noreferrer">
        {part.label} · {part.summary}
      </a></p>
      {(part.source ?? question.source).locatorKind === 'image-index'
        && <p className="fine-print">{sourceLocationLabel(part.source ?? question.source)}</p>}
      {part.source && <SourceDetails source={resolveSource(part.source, question.source)} />}
      <div className="related-methods">{part.methodIds.map((id) => <button key={id} onClick={() => onSelect(id)}>
        {methods.find((method) => method.id === id)?.title ?? id}
        {question.methodLinks.find((link) => link.methodId === id)?.verification === 'pending' ? ' · 待核' : ''}
      </button>)}</div>
      {!part.methodIds.length && <p className="fine-print">该子问的方法关联待补。</p>}
      <p className="fine-print">{part.evidenceNote}</p>
    </section>)}
    <p className="fine-print">子问共用原题条件，方法频次按主问题计一次。</p>
  </details>;
}
