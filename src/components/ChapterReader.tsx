import { useEffect, useRef, useState } from 'react';
import { articles, data } from '../data/load';
import { articleTitle, articleUrl } from '../domain/article';
import { searchArticles } from '../domain/search';
import { ArticleMarkdown } from './ArticleMarkdown';
import '../styles/articles.css';

const entries = [
  ['concepts.md', '概念'], ['problem-types/README.md', '题型'],
  ['methods/README.md', '工具箱'], ['questions/README.md', '真题'],
];
export function ChapterReader({ path, section = '' }: { path: string; section?: string }) {
  const root = path.split('/')[0] + '/';
  const current = { path, anchor: section };
  const [query, setQuery] = useState('');
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const target = current.anchor ? Array.from(container.current?.querySelectorAll('[id]') ?? [])
      .find(element => element.id === current.anchor) : undefined;
    if (target) target.scrollIntoView({ block: 'start' });
    else container.current?.closest('.detail-scroll')?.scrollTo(0, 0);
    setQuery('');
  }, [path, section]);
  function navigate(path: string, anchor = '') {
    if (!articles[path]) return;
    history.pushState(null, '', articleUrl(location.href, path, anchor, data));
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
  const results = searchArticles(articles, root, query);
  return <div className="chapter-reader" ref={container}>
    <nav className="article-nav" aria-label="本章文章">
      {entries.filter(([path]) => articles[root + path]).map(([path, title]) => <button key={path}
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
