import type { AtlasData } from './schema';

export function resolveAtlasRoute(hash: string, data: Pick<AtlasData, 'libraries' | 'methods'>) {
  const params = new URLSearchParams(hash.replace(/^#/, ''));
  const requested = params.get('library');
  const fallback = data.libraries.find((item) => item.id === 'math-one') ?? data.libraries[0];
  const found = data.libraries.find((item) => item.id === requested);
  const library = found ?? fallback;
  if (!library) throw new Error('Atlas requires at least one library');
  const invalidLibrary = requested !== null && !found;
  const selected = invalidLibrary ? undefined : data.methods.find(
    (item) => item.id === params.get('method') && item.libraryId === library.id,
  );
  const requestedChapter = params.get('chapter');
  const chapter = invalidLibrary ? undefined : library.chapters.find((item) => item.id === requestedChapter);
  const notice = invalidLibrary ? '链接中的方法体系不存在，已返回默认体系。'
    : params.has('method') && !selected ? '链接中的方法不存在或不属于当前体系，已显示章节总览。'
      : requestedChapter && !chapter && !selected ? '链接中的章节不存在，已显示章节总览。' : '';
  return { libraryId: library.id, methodId: selected?.id ?? '',
    chapterId: selected?.chapterId ?? (params.has('method') && !selected ? '' : chapter?.id ?? ''), notice };
}

export function atlasRouteHash(libraryId: string, methodId = '', chapterId = '') {
  const params = new URLSearchParams({ library: libraryId });
  if (methodId) params.set('method', methodId);
  else if (chapterId) params.set('chapter', chapterId);
  return `#${params}`;
}
