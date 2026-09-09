import { ArrowUpRight, X } from 'lucide-react';
import type { Library, Method, ProblemType } from '../domain/schema';
import { ChapterConcepts } from './ChapterConcepts';

type Props = { chapter: Library['chapters'][number]; types: ProblemType[];
  methods: Method[]; onMethod: (id: string) => void;
  onSelect: (id: string) => void; onClose: () => void };
export function ChapterDetail({ chapter, types, methods, onMethod, onSelect, onClose }: Props) {
  const chapterTypes = types.filter(type => type.chapterId === chapter.id);
  return <aside className="detail-panel glass-panel" aria-label="章节基础">
    <header className="panel-header"><span className="eyebrow">CHAPTER / 章节</span>
      <button aria-label="关闭章节基础" onClick={onClose}><X size={19} /></button></header>
    <div className="detail-scroll"><h1>{chapter.title}</h1>
      <p className="method-summary">先理解基本概念，再选择题型，跟着方法中的例题练习。</p>
      <h2>基础概念</h2><p className="muted">展开概念查看定义、性质与适用条件。</p>
      <ChapterConcepts key={chapter.id} concepts={chapter.concepts} />
      <h2>{chapterTypes.length ? '选择要学习的题型' : '选择要学习的方法'}</h2><div className="chapter-types">
        {chapterTypes.map(type =>
          <button key={type.id} onClick={() => onSelect(type.id)}>
            <strong>{type.title}<ArrowUpRight size={16} /></strong><span>{type.summary}</span>
          </button>)}
        {!chapterTypes.length && methods.filter(method => method.chapterId === chapter.id).map(method =>
          <button key={method.id} onClick={() => onMethod(method.id)}>
            <strong>{method.title}<ArrowUpRight size={16} /></strong><span>{method.learning?.intuition ?? method.summary}</span>
          </button>)}
      </div>
    </div>
  </aside>;
}
