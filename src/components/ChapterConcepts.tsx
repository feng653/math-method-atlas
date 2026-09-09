import type { Library } from '../domain/schema';
import { Formula } from './Formula';

export function ChapterConcepts({ concepts }: { concepts: Library['chapters'][number]['concepts'] }) {
  return <div className="chapter-concepts">{concepts?.map(concept =>
    <details key={concept.title}>
      <summary>{concept.title}</summary>
      {concept.explanation.split(/\n+|(?=数学定义：|常用性质：|易错点：|使用边界：)/)
        .filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {concept.formulas?.map((value, index) => <Formula key={index} value={value} />)}
    </details>)}</div>;
}
