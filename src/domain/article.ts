export function resolveArticleLink(current: string, href: string) {
  const base = new URL(current, 'https://articles.local/');
  const url = new URL(href, base);
  if (url.origin !== base.origin) return undefined;
  return { path: decodeURIComponent(url.pathname.slice(1)), anchor: decodeURIComponent(url.hash.slice(1)) };
}

export function articleTitle(body: string) {
  return body.match(/^# (.+)$/m)?.[1] ?? '文章';
}

export function articleUrl(currentUrl: string, path: string, anchor = '') {
  const url = new URL(currentUrl);
  url.searchParams.set('article', path);
  if (anchor) url.searchParams.set('section', anchor);
  else url.searchParams.delete('section');
  return `${url.pathname}${url.search}${url.hash}`;
}
