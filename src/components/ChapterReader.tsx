import { useEffect, useRef, useState } from 'react';
import { articles } from '../data/load';
import { articleTitle, articleUrl } from '../domain/article';
import { searchArticles } from '../domain/search';
import { ArticleMarkdown } from './ArticleMarkdown';
import '../styles/articles.css';

const root = 'multivariable/';
const entries = [
  ['concepts.md', '概念'], ['problem-types/README.md', '题型'],
  ['methods/README.md', '工具箱'], ['questions/README.md', '真题'],
];
function readLocation() {
  const query = new URLSearchParams(location.search);
  const path = query.get('article') ?? `${root}concepts.md`;
  return { path: path.startsWith(root) && articles[path] ? path : `${root}concepts.md`,
    anchor: query.get('section') ?? '' };
}
export function ChapterReader() {
  const [current, setCurrent] = useState(readLocation);
  const [query, setQuery] = useState('');
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const changed = () => { setCurrent(readLocation()); setQuery(''); };
    window.addEventListener('popstate', changed);
    return () => window.removeEventListener('popstate', changed);
  }, []);
  useEffect(() => {
    const target = current.anchor ? Array.from(container.current?.querySelectorAll('[id]') ?? [])
      .find(element => element.id === current.anchor) : undefined;
    if (target) target.scrollIntoView({ block: 'start' });
    else container.current?.closest('.detail-scroll')?.scrollTo(0, 0);
  }, [current]);
  function navigate(path: string, anchor = '') {
    if (!articles[path]) return;
    history.pushState(null, '', articleUrl(location.href, path, anchor));
    setCurrent({ path, anchor }); setQuery('');
  }
  const results = searchArticles(articles, root, query);
  return <div className="chapter-reader" ref={container}>
    <nav className="article-nav" aria-label="本章文章">
      {entries.map(([path, title]) => <button key={path}
        aria-current={current.path === root + path || current.path.startsWith(root + path.split('/')[0] + '/') ? 'page' : undefined}
        onClick={() => navigate(root + path)}>{title}</button>)}
    </nav>
    <label className="article-search">查找本章文章
      <input type="search" value={query} placeholder="例如：夹逼、可微、隐式"
        onChange={event => setQuery(event.target.value)} />
    </label>
    {query.trim() ? <div className="article-results" aria-live="polite">
      <p>{results.length} 篇匹配文章</p>
      {results.map(([path, body]) => <button key={path} onClick={() => navigate(path)}>{articleTitle(body)}</button>)}
    </div> : <ArticleMarkdown path={current.path} body={articles[current.path]} onNavigate={navigate} />}
  </div>;
}
