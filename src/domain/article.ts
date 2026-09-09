import type { AtlasData } from './schema';
import { atlasRouteHash, resolveAtlasRoute } from './route';

export function resolveArticleLink(current: string, href: string) {
  const base = new URL(current, 'https://articles.local/');
  const url = new URL(href, base);
  if (url.origin !== base.origin) return undefined;
  return { path: decodeURIComponent(url.pathname.slice(1)), anchor: decodeURIComponent(url.hash.slice(1)) };
}

export function articleTitle(body: string) {
  return body.match(/^# (.+)$/m)?.[1] ?? '文章';
}

export function resolvePageRoute(url: string, data: AtlasData, articles: Record<string, string>) {
  const current = new URL(url);
  let route = resolveAtlasRoute(current.hash, data);
  const path = current.searchParams.get('article') ?? '';
  const method = data.methods.find(item => item.id === route.methodId && item.libraryId === route.libraryId);
  const type = data.problemTypes.find(item => item.id === route.problemTypeId && item.libraryId === route.libraryId);
  const chapter = data.libraries.find(item => item.id === route.libraryId)?.chapters.find(item => item.id === route.chapterId);
  const library = data.libraries.find(item => item.id === route.libraryId);
  const inLibrary = library?.chapters.some(item => item.article?.split('/')[0] === path.split('/')[0]);
  const compatible = method ? method.article === path : type ? type.article === path
    : (!route.chapterId && inLibrary) || chapter?.article?.split('/')[0] === path.split('/')[0];
  if (articles[path] && compatible) {
    route = resolveAtlasRoute(new URL(articleUrl(url, path, '', data), url).hash, data);
    return { ...route, articlePath: path, section: current.searchParams.get('section') ?? '' };
  }
  return { ...route, articlePath: '', section: '' };
}

export function selectionUrl(currentUrl: string, hash: string, path = '', section = '') {
  const url = new URL(currentUrl);
  url.hash = hash;
  url.searchParams.delete('article'); url.searchParams.delete('section');
  if (path) url.searchParams.set('article', path);
  if (path && section) url.searchParams.set('section', section);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function articleUrl(currentUrl: string, path: string, anchor = '', data?: AtlasData) {
  const url = new URL(currentUrl);
  url.searchParams.set('article', path);
  if (anchor) url.searchParams.set('section', anchor);
  else url.searchParams.delete('section');
  if (data) {
    const method = data.methods.find(item => item.article === path);
    const type = data.problemTypes.find(item => item.article === path);
    const library = data.libraries.find(item => item.chapters.some(chapter =>
      chapter.article?.split('/')[0] === path.split('/')[0]));
    const chapter = library?.chapters.find(item => item.article?.split('/')[0] === path.split('/')[0]);
    if (library && chapter) url.hash = atlasRouteHash(library.id, method?.id, chapter.id, type?.id);
  }
  return `${url.pathname}${url.search}${url.hash}`;
}
