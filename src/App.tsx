import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { BookOpen, ChevronDown, ListTree, Search, X } from 'lucide-react';
import { data } from './data/load';
import { searchMethods } from './domain/search';
import { AtlasGraph } from './components/AtlasGraph';
import { LibraryNavigation } from './components/LibraryNavigation';
import { atlasRouteHash, resolveAtlasRoute } from './domain/route';

const MethodDetail = lazy(() => import('./components/MethodDetail').then((module) => ({ default: module.MethodDetail })));
const PaperLibrary = lazy(() => import('./components/PaperLibrary').then((module) => ({ default: module.PaperLibrary })));
const readRoute = () => resolveAtlasRoute(location.hash, data);
export default function App() {
  const [libraryId, setLibraryId] = useState(() => readRoute().libraryId);
  const [selected, setSelected] = useState(() => readRoute().methodId);
  const [chapter, setChapter] = useState(() => readRoute().chapterId);
  const [routeNotice, setRouteNotice] = useState(() => readRoute().notice);
  const [query, setQuery] = useState('');
  const [panel, setPanel] = useState<'none' | 'directory' | 'papers'>('none');
  const library = data.libraries.find((item) => item.id === libraryId) ?? data.libraries[0];
  const methods = useMemo(() => data.methods.filter((method) => method.libraryId === library.id), [library]);
  const questions = data.questions.filter((question) => question.libraryId === library.id);
  const papers = data.papers.filter((paper) => paper.libraryId === library.id);
  const results = useMemo(() => query.trim() ? searchMethods(methods, query) : [], [methods, query]);
  const method = methods.find((item) => item.id === selected);
  useEffect(() => {
    history.replaceState(null, '', atlasRouteHash(library.id, method?.id, chapter));
  }, [library, method, chapter]);
  useEffect(() => {
    const change = () => { const route = readRoute(); setLibraryId(route.libraryId);
      setSelected(route.methodId); setChapter(route.chapterId); setRouteNotice(route.notice);
      setQuery(''); setPanel('none'); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setSelected(''); setPanel('none'); setQuery(''); } };
    window.addEventListener('hashchange', change); window.addEventListener('keydown', escape);
    return () => { window.removeEventListener('hashchange', change); window.removeEventListener('keydown', escape); };
  }, []);
  function select(id: string) {
    const target = methods.find((item) => item.id === id);
    if (target?.chapterId !== chapter) setChapter(target?.chapterId ?? '');
    setSelected(id); setQuery(''); setPanel('none'); setRouteNotice('');
  }
  return <main className={method || panel === 'papers' ? 'atlas-app has-detail' : 'atlas-app'}>
    <AtlasGraph key={library.id} library={library} methods={methods} selected={selected} chapter={chapter}
      onSelect={select} onChapter={(id) => { setChapter(id); setSelected(''); }} />
    <header className="floating-header">
      <a className="brand" href="#" onClick={(event) => { event.preventDefault(); setChapter(''); setSelected(''); }}>
        <span className="brand-mark">方</span><span>方寸<small>METHOD ATLAS</small></span></a>
      <div className="library-select"><select aria-label="选择方法体系" value={library.id}
        onChange={(event) => { setLibraryId(event.target.value); setSelected(''); setChapter(''); setQuery(''); setPanel('none'); setRouteNotice(''); }}>
        {data.libraries.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select><ChevronDown size={13} /></div>
    </header>
    <div className="search-area">
      <form className="search-box" onSubmit={(event) => { event.preventDefault(); if (results[0]) select(results[0].id); }}>
        <Search size={17} /><input aria-label="搜索方法" placeholder="寻找一个方法…" value={query}
          onChange={(event) => setQuery(event.target.value)} />
        {query ? <button type="button" aria-label="清空搜索" onClick={() => setQuery('')}><X size={15} /></button> : <kbd>↵</kbd>}
      </form>
      {routeNotice && !query.trim() && <div className="search-results glass-panel" role="status">
        <p>{routeNotice}</p><button onClick={() => setRouteNotice('')}>知道了</button></div>}
      {query.trim() && <div className="search-results glass-panel" aria-label="搜索结果">
        <p role="status">{results.length ? `找到 ${results.length} 个方法` : '没有匹配的方法，试试“极限”或“换元”。'}</p>
        {results.slice(0, 15).map((result) => <button key={result.id} onClick={() => select(result.id)}>
          <strong>{result.title}</strong><small>{result.summary}</small></button>)}
        {results.length > 15 && <p>仅显示前 15 项，请细化关键词。</p>}
      </div>}
    </div>
    <nav className="utility-nav" aria-label="辅助导航">
      <button aria-label="打开章节目录" title="章节目录" onClick={() => { setPanel(panel === 'directory' ? 'none' : 'directory'); setSelected(''); }}><ListTree size={19} /></button>
      <button aria-label="打开历年真题" title="历年真题" onClick={() => { setPanel(panel === 'papers' ? 'none' : 'papers'); setSelected(''); }}><BookOpen size={18} /></button>
    </nav>
    {chapter && <button className="back-overview" onClick={() => { setChapter(''); setSelected(''); }}>← 全部章节</button>}
    <Suspense fallback={<aside className="detail-panel glass-panel" role="status">正在加载内容…</aside>}>
      {method && <MethodDetail method={method} methods={methods} questions={questions} papers={papers} onSelect={select} onClose={() => setSelected('')} />}
      {panel === 'papers' && <PaperLibrary key={library.id} papers={papers} questions={questions} methods={methods}
        chapters={library.chapters} onClose={() => setPanel('none')} onSelect={select} />}
    </Suspense>
    {panel === 'directory' && <LibraryNavigation library={library} libraries={data.libraries}
      onLibrary={(id) => { setLibraryId(id); setSelected(''); setChapter(''); setQuery(''); setRouteNotice(''); }} methods={methods} onClose={() => setPanel('none')}
      onSelect={select} onChapter={(id) => { setChapter(id); setPanel('none'); setSelected(''); }} />}
    <div className="library-note">{methods.length} 个方法<span />{library.syllabus.reviewStatus === 'draft' ? '课纲映射草案' : library.syllabus.version}</div>
  </main>;
}
