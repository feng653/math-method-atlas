import type { AtlasData } from './schema';
import { articleTitle } from './article';

/** Published manuscripts and graph entities must have one-to-one bindings. */
export function validateArticleBindings(data: AtlasData, documents: Record<string, string>,
  links: Record<string, string[]>) {
  const errors: string[] = [];
  const nodes = [...data.methods, ...data.problemTypes].filter(item => item.article !== undefined);
  const seen = new Set<string>();
  for (const node of nodes) {
    const path = node.article!;
    if (!documents[path]) errors.push(`${node.id}: missing manuscript ${path}`);
    else if (articleTitle(documents[path]) !== node.title) errors.push(`${node.id}: title differs from manuscript`);
    if (seen.has(path)) errors.push(`${node.id}: duplicate manuscript binding ${path}`);
    seen.add(path);
    const chapter = data.libraries.find(item => item.id === node.libraryId)?.chapters.find(item => item.id === node.chapterId);
    if (!chapter?.article || path.split('/')[0] !== chapter.article.split('/')[0]) {
      errors.push(`${node.id}: manuscript does not belong to published chapter`);
    }
  }
  for (const library of data.libraries) for (const chapter of library.chapters) {
    if (!chapter.article) continue;
    if (!documents[chapter.article]) errors.push(`${chapter.id}: missing concept manuscript`);
    const root = chapter.article.split('/')[0] + '/';
    for (const path of Object.keys(documents)) {
      const local = path.slice(root.length);
      if (path.startsWith(root) && (/^methods\/(?!README)[^/]+\.md$/.test(local)
        || /^problem-types\/[^/]+\/index\.md$/.test(local)) && !seen.has(path)) {
        errors.push(`${path}: missing graph node`);
      }
    }
  }
  for (const type of data.problemTypes) {
    if (!type.article) continue;
    const choices = new Set(type.methods.map(choice => choice.methodId));
    const linked = new Set((links[type.article] ?? []).flatMap(path => data.methods
      .filter(method => method.article === path).map(method => method.id)));
    if ([...linked].some(id => !choices.has(id)) || [...choices].some(id => !linked.has(id))) {
      errors.push(`${type.id}: graph choices differ from manuscript tools`);
    }
  }
  return errors;
}
