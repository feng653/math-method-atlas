import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import katex from 'katex';
import { articleSchema, type AtlasData } from '../src/domain/schema';
import { validateArticleBindings } from '../src/domain/article-bindings';
import { resolveArticleLink } from '../src/domain/article';

export async function validateArticles(root: string, data?: AtlasData): Promise<string[]> {
  const documents: Record<string, string> = {};
  async function read(directory: string, prefix = '') {
    for (const file of await readdir(directory, { withFileTypes: true })) {
      if (file.isDirectory()) await read(join(directory, file.name), `${prefix}${file.name}/`);
      else if (file.name.endsWith('.md')) documents[prefix + file.name] = await readFile(join(directory, file.name), 'utf8');
    }
  }
  await read(root);
  const errors: string[] = [];
  const links: Record<string, string[]> = {};
  const parsed = articleSchema.safeParse(documents);
  if (!parsed.success) errors.push(parsed.error.message);
  const parser = unified().use(remarkParse).use(remarkGfm).use(remarkMath);
  type Node = { type: string; value?: string; url?: string; children?: Node[] };
  for (const [path, body] of Object.entries(documents)) {
    if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(body)) {
      errors.push(`${path}: control character in manuscript; check escaped LaTeX`);
    }
    links[path] = [];
    function visit(node: Node) {
      if (node.type === 'math' || node.type === 'inlineMath') {
        try { katex.renderToString(node.value ?? '', { throwOnError: true, trust: false, strict: 'error', maxExpand: 1000 }); }
        catch (error) { errors.push(`${path}: ${String(error)}`); }
      }
      if (node.url) {
        const target = resolveArticleLink(path, node.url);
        if (target) links[path].push(target.path);
        if (target && !documents[target.path]) errors.push(`${path}: missing article ${target.path}`);
      }
      node.children?.forEach(visit);
    }
    visit(parser.parse(body));
  }
  return [...errors, ...(data ? validateArticleBindings(data, documents, links) : [])];
}
