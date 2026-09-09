import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import katex from 'katex';
import { Formula } from './Formula';
import { articleUrl, resolveArticleLink } from '../domain/article';

type Props = { path: string; body: string; onNavigate: (path: string, anchor?: string) => void };
export function ArticleMarkdown({ path, body, onNavigate }: Props) {
  return <article className="article-prose"><Markdown remarkPlugins={[remarkGfm, remarkMath]}
    rehypePlugins={[rehypeSlug]} skipHtml components={{
      pre: ({ children }) => <div className="article-code">{children}</div>,
      code: ({ className, children }) => {
        const value = String(children).replace(/\n$/, '');
        if (className?.includes('math-display')) return <Formula value={value} />;
        if (className?.includes('math-inline')) return <span dangerouslySetInnerHTML={{ __html:
          katex.renderToString(value, { throwOnError: false, trust: false, maxExpand: 200 }) }} />;
        return <code className={className}>{children}</code>;
      },
      table: ({ children }) => <div className="article-table"><table>{children}</table></div>,
      a: ({ href = '', children }) => {
        const target = resolveArticleLink(path, href);
        if (!target) return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
        return <a href={articleUrl(location.href, target.path, target.anchor)} onClick={event => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault(); onNavigate(target.path, target.anchor);
        }}>{children}</a>;
      },
    }}>{body}</Markdown></article>;
}
