import type { Library, Method } from './schema';

export function getCoverage(library: Library, methods: Method[]) {
  const topics = library.chapters.flatMap((chapter) => chapter.syllabusTopics);
  const scoped = methods.filter((method) => method.libraryId === library.id);
  const writtenIds = new Set(scoped.flatMap((method) => method.topicIds));
  const reviewedIds = new Set(scoped.filter((method) => method.status === 'reviewed').flatMap((method) => method.topicIds));
  return {
    total: topics.length,
    written: topics.filter((topic) => writtenIds.has(topic.id)).length,
    reviewed: topics.filter((topic) => reviewedIds.has(topic.id)).length,
    missing: topics.filter((topic) => !writtenIds.has(topic.id)).map(({ id, title }) => ({ id, title })),
  };
}
