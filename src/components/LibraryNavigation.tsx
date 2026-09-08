import { ChevronRight, X } from 'lucide-react';
import type { Library, Method, ProblemType } from '../domain/schema';
import { getCoverage } from '../domain/coverage';

type Props = { library: Library; libraries: Library[]; onLibrary: (id: string) => void; methods: Method[]; onClose: () => void;
  problemTypes: ProblemType[]; onProblemType: (id: string) => void;
  onChapter: (id: string) => void; onSelect: (id: string) => void };
export function LibraryNavigation({ library, libraries, onLibrary, methods, problemTypes, onProblemType, onClose, onChapter, onSelect }: Props) {
  const coverage = getCoverage(library, methods);
  return <aside className="navigation-panel glass-panel" aria-label="章节目录">
    <header className="panel-header"><span className="eyebrow">CONTENTS / 目录</span>
      <button aria-label="关闭目录" onClick={onClose}><X size={19} /></button></header>
    <div className="detail-scroll"><h2>循着问题，找到方法。</h2>
      <label className="field-label">方法体系<select value={library.id} onChange={(event) => onLibrary(event.target.value)}>
        {libraries.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
      <p className="muted">{library.syllabus.version}<br />已写 {coverage.written}/{coverage.total} 项 · 审校方法覆盖 {coverage.reviewed} 项</p>
      {library.chapters.map((chapter) => <details key={chapter.id} className="chapter-item">
        <summary><span>{chapter.title}<small>{chapter.subject}</small></span></summary>
        <button className="focus-chapter" onClick={() => onChapter(chapter.id)}>在图中聚焦章节 <ChevronRight size={14} /></button>
        {problemTypes.filter((type) => type.chapterId === chapter.id).map((type) =>
          <button className="method-item" key={type.id} onClick={() => onProblemType(type.id)}>题型 · {type.title}</button>)}
        {methods.filter((method) => method.chapterId === chapter.id).map((method) =>
          <button className="method-item" key={method.id} onClick={() => onSelect(method.id)}>{method.title}</button>)}
      </details>)}
      {!!coverage.missing.length && <details><summary>待补充 {coverage.missing.length} 项</summary>
        <ul>{coverage.missing.map((topic) => <li key={topic.id}>{topic.title}</li>)}</ul></details>}
      <p className="fine-print">比例仅针对当前体系已列出的条目，不代表外部课纲完整覆盖。</p>
    </div>
  </aside>;
}
