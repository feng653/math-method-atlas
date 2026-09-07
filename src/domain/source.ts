import { z } from 'zod';

const text = z.string().trim().min(1);
export const sourceSchema = z.object({
  url: z.url().refine((value) => value.startsWith('https://'), 'Source must use HTTPS'),
  page: z.number().int().positive().optional(),
  locatorKind: z.enum(['pdf-page', 'image-index']).optional(),
  metadata: z.object({
    publisher: text,
    level: z.enum(['official', 'university-hosted', 'third-party', 'unknown']),
    checkedOn: z.iso.date(),
    availability: z.enum(['available', 'unavailable', 'unverified']),
    evidence: text,
    bodyMode: z.literal('external-link'),
    rightsNote: text,
  }).strict().optional(),
}).strict().refine((source) => !source.locatorKind || source.page !== undefined,
  'Source locator kind needs page or image index');

export type Source = z.infer<typeof sourceSchema>;
export const sourceLevelLabel = {
  official: '官方发布', 'university-hosted': '高校托管',
  'third-party': '第三方整理', unknown: '发布方待核',
};
export const sourceAvailabilityLabel = {
  available: '检查时可访问', unavailable: '检查时无法访问', unverified: '可用性待核',
};

export function sameSourceResource(left: string, right: string): boolean {
  const first = new URL(left);
  const second = new URL(right);
  first.hash = '';
  second.hash = '';
  return first.href === second.href;
}

// Fragments locate a question within one document; queries may select another document.
export function resolveSource(source: Source, paperSource?: Source): Source {
  if (source.metadata || !paperSource || !sameSourceResource(source.url, paperSource.url)) return source;
  return { ...source, metadata: paperSource.metadata };
}

export function sourceHref(source: Source): string {
  if (!source.page || source.locatorKind === 'image-index') return source.url;
  const url = new URL(source.url);
  url.hash = `page=${source.page}`;
  return url.href;
}

export function sourceLocationLabel(source: Source): string {
  if (!source.page) return '';
  return source.locatorKind === 'image-index' ? `文章第 ${source.page} 张试卷图` : `第 ${source.page} 页`;
}
