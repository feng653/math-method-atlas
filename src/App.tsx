import { ForceTestSliders } from './components/ForceTestSliders';
import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { BookOpen, ChevronDown, Compass, ListTree, Search, X } from 'lucide-react';
import { data } from './data/load';
import { searchMethods, searchProblemTypes } from './domain/search';
import { AtlasGraph } from './components/AtlasGraph';
import { LibraryNavigation } from './components/LibraryNavigation';
import { atlasRouteHash, resolveAtlasRoute } from './domain/route';
import { ThinkingCoverage } from './components/ThinkingCoverage';

const MethodDetail = lazy(() => import('./components/MethodDetail').then((module) => ({ default: module.MethodDetail })));
const PaperLibrary = lazy(() => import('./components/PaperLibrary').then((module) => ({ default: module.PaperLibrary })));
const ProblemTypeDetail = lazy(() => import('./components/ProblemTypeDetail').then((module) => ({ default: module.ProblemTypeDetail })));
const readRoute = () => resolveAtlasRoute(location.hash, data);
export default function App() {
  const [libraryId, setLibraryId] = useState(() => readRoute().libraryId);
  const [selected, setSelected] = useState(() => readRoute().methodId);
  const [chapter, setChapter] = useState(() => readRoute().chapterId);
  const [problemTypeId, setProblemTypeId] = useState(() => readRoute().problemTypeId ?? '');
  const [routeNotice, setRouteNotice] = useState(() => readRoute().notice);
  const [query, setQuery] = useState('');
  const [panel, setPanel] = useState<'none' | 'directory' | 'papers'>('none');
  const library = data.libraries.find((item) => item.id === libraryId) ?? data.libraries[0];
  const methods = useMemo(() => data.methods.filter((method) => method.libraryId === library.id), [library]);
  const problemTypes = useMemo(() => data.problemTypes.filter((type) => type.libraryId === library.id), [library]);
  const problemType = problemTypes.find((type) => type.id === problemTypeId);
  const questions = data.questions.filter((question) => question.libraryId === library.id);
  const papers = data.papers.filter((paper) => paper.libraryId === library.id);
  const results = useMemo(() => query.trim() ? searchMethods(methods, query) : [], [methods, query]);
  const typeResults = useMemo(() => query.trim() ? searchProblemTypes(problemTypes, query) : [], [problemTypes, query]);
  const method = methods.find((item) => item.id === selected);
  useEffect(() => {
    history.replaceState(null, '', atlasRouteHash(library.id, method?.id, chapter, problemType?.id));
  }, [library, method, chapter, problemType]);
  useEffect(() => {
    const change = () => { const route = readRoute(); setLibraryId(route.libraryId);
      setSelected(route.methodId); setChapter(route.chapterId); setRouteNotice(route.notice);
      setProblemTypeId(route.problemTypeId ?? '');
      setQuery(''); setPanel('none'); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setSelected(''); setProblemTypeId(''); setPanel('none'); setQuery(''); } };
    window.addEventListener('hashchange', change); window.addEventListener('keydown', escape);
    return () => { window.removeEventListener('hashchange', change); window.removeEventListener('keydown', escape); };
  }, []);
  function select(id: string, preserveGraph = false) {
    if (!preserveGraph) setProblemTypeId('');
    const target = methods.find((item) => item.id === id);
    if (!preserveGraph && target?.chapterId !== chapter) setChapter(target?.chapterId ?? '');
    setSelected(id); setQuery(''); setPanel((current) => current === 'directory' ? current : 'none'); setRouteNotice('');
  }
  function selectType(id: string) {
    const target = problemTypes.find((type) => type.id === id);
    if (!target) return;
    setProblemTypeId(id); setChapter(target.chapterId); setSelected('');
    setPanel((current) => current === 'directory' ? current : 'none'); setQuery(''); setRouteNotice('');
  }
  function clearType() { setProblemTypeId(''); }
  return <main className={method || problemType || panel === 'papers' ? 'atlas-app has-detail' : 'atlas-app'}>
    <AtlasGraph key={library.id} library={library} methods={methods} selected={selected} chapter={chapter}
      problemTypes={problemTypes} problemType={problemTypeId} onProblemType={selectType}
      onSelect={(id) => select(id, true)} onChapter={(id) => { clearType(); setChapter(id); setSelected(''); }} />
    <header className="floating-header">
      <a className="brand" href="#" onClick={(event) => { event.preventDefault(); setChapter(''); setSelected('');
        clearType(); setPanel('none'); setQuery(''); setRouteNotice(''); }}>
        <span className="brand-mark">方</span><span>方寸<small>METHOD ATLAS</small></span></a>
      <div className="library-select"><select aria-label="选择方法体系" value={library.id}
        onChange={(event) => { clearType(); setLibraryId(event.target.value); setSelected(''); setChapter(''); setQuery(''); setPanel('none'); setRouteNotice(''); }}>
        {data.libraries.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select><ChevronDown size={13} /></div>
    </header>
    <div className="search-area">
      <form className="search-box" onSubmit={(event) => { event.preventDefault();
        if (typeResults[0]) selectType(typeResults[0].id); else if (results[0]) select(results[0].id); }}>
        <Search size={17} /><input aria-label="搜索方法" placeholder="寻找题型或方法…" value={query}
          onChange={(event) => setQuery(event.target.value)} />
        {query ? <button type="button" aria-label="清空搜索" onClick={() => setQuery('')}><X size={15} /></button> : <kbd>↵</kbd>}
      </form>
      {routeNotice && !query.trim() && <div className="search-results glass-panel" role="status">
        <p>{routeNotice}</p><button onClick={() => setRouteNotice('')}>知道了</button></div>}
      {query.trim() && <div className="search-results glass-panel" aria-label="搜索结果">
        <p role="status">{results.length || typeResults.length ? `找到 ${typeResults.filter((type) => type.kind !== 'trigger').length} 个题型 · ${typeResults.filter((type) => type.kind === 'trigger').length} 个触发条件 · ${results.length} 个方法` : '没有匹配结果，试试更短的关键词。'}</p>
        {typeResults.slice(0, 6).map((type) => <button key={`type-${type.id}`} onClick={() => selectType(type.id)}>
          <strong>{type.kind === 'trigger' ? '触发条件' : '题型'} · {type.title}</strong><small>{type.summary}</small></button>)}
        {results.slice(0, 15).map((result) => <button key={result.id} onClick={() => select(result.id)}>
          <strong>{result.title}</strong><small>{result.summary}</small></button>)}
        {(results.length > 15 || typeResults.length > 6) && <p>结果已截取，请细化关键词。</p>}
      </div>}
    </div>
    <nav className="utility-nav" aria-label="辅助导航">
      {library.chapters.some((item) => item.id === 'basic-thinking') && <button aria-label="打开做题思路图谱" title="做题思路图谱"
        onClick={() => { clearType(); setChapter('basic-thinking'); setSelected(''); setPanel('none'); setQuery(''); }}><Compass size={19} /></button>}
      <button aria-label="打开章节目录" title="章节目录" aria-expanded={panel === 'directory'}
        onClick={() => setPanel(panel === 'directory' ? 'none' : 'directory')}><ListTree size={19} /></button>
      <button aria-label="打开历年真题" title="历年真题" onClick={() => { clearType(); setPanel(panel === 'papers' ? 'none' : 'papers'); setSelected(''); }}><BookOpen size={18} /></button>
      {import.meta.env.DEV && <ForceTestSliders />}
    </nav>
    {chapter && <button className="back-overview" onClick={() => { clearType(); setChapter(''); setSelected(''); }}>← 全部章节</button>}
    {chapter === 'basic-thinking' && !method && !problemType && panel === 'none' && <ThinkingCoverage library={library} data={data} />}
    <Suspense fallback={<aside className="detail-panel glass-panel" role="status">正在加载内容…</aside>}>
      {problemType && <ProblemTypeDetail type={problemType} methods={methods} questions={questions} papers={papers}
        samples={data.thinkingSamples}
        onSelect={select} onClose={clearType} />}
      {method && <MethodDetail method={method} methods={methods} questions={questions} papers={papers}
        examScope={library.examScope} onSelect={select} onClose={() => setSelected('')} />}
      {panel === 'papers' && <PaperLibrary key={library.id} papers={papers} questions={questions} methods={methods}
        chapters={library.chapters} examScope={library.examScope} onClose={() => setPanel('none')} onSelect={select} />}
    </Suspense>
    {panel === 'directory' && <LibraryNavigation library={library} libraries={data.libraries}
      problemTypes={problemTypes} onProblemType={selectType}
      onLibrary={(id) => { clearType(); setLibraryId(id); setSelected(''); setChapter(''); setQuery(''); setRouteNotice(''); }} methods={methods} onClose={() => setPanel('none')}
      onSelect={select} onChapter={(id) => { clearType(); setChapter(id); setSelected(''); }} />}
    <div className="library-note">{methods.length} 个方法<span />{library.syllabus.reviewStatus === 'draft' ? '课纲映射草案' : library.syllabus.version}</div>
  </main>;
}
