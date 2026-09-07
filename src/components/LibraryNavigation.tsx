import { ChevronRight, X } from 'lucide-react';
import type { Library, Method } from '../domain/schema';
import { getCoverage } from '../domain/coverage';

type Props = { library: Library; libraries: Library[]; onLibrary: (id: string) => void; methods: Method[]; onClose: () => void;
  onChapter: (id: string) => void; onSelect: (id: string) => void };
export function LibraryNavigation({ library, libraries, onLibrary, methods, onClose, onChapter, onSelect }: Props) {
  const coverage = getCoverage(library, methods);
  return <aside className="navigation-panel glass-panel" aria-label="章节目录">
    <header className="panel-header"><span className="eyebrow">CONTENTS / 目录</span>
      <button aria-label="关闭目录" onClick={onClose}><X size={19} /></button></header>
    <div className="detail-scroll"><h2>循着问题，找到方法。</h2>
      <label className="field-label">方法体系<select value={library.id} onChange={(event) => onLibrary(event.target.value)}>
        {libraries.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
      <p className="muted">课纲映射草案 · 已写 {coverage.written}/{coverage.total} 项<br />已审校方法覆盖 {coverage.reviewed} 项</p>
      {library.chapters.map((chapter) => <details key={chapter.id} className="chapter-item">
        <summary><span>{chapter.title}<small>{chapter.subject}</small></span></summary>
        <button className="focus-chapter" onClick={() => onChapter(chapter.id)}>在图中聚焦章节 <ChevronRight size={14} /></button>
        {methods.filter((method) => method.chapterId === chapter.id).map((method) =>
          <button className="method-item" key={method.id} onClick={() => onSelect(method.id)}>{method.title}</button>)}
      </details>)}
      {!!coverage.missing.length && <details><summary>待补充 {coverage.missing.length} 项</summary>
        <ul>{coverage.missing.map((topic) => <li key={topic.id}>{topic.title}</li>)}</ul></details>}
      <p className="fine-print">覆盖比例以本项目草案考点为分母；尚未完成官方大纲逐条核验。</p>
    </div>
  </aside>;
}
