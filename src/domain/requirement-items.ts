import { z } from 'zod';
import type { AtlasData } from './schema';
import type { RequirementAudit } from './requirements';

const text = z.string().min(1);
export const requirementItemsSchema = z.object({
  schemaVersion: z.literal(1), type: z.literal('syllabus-items'), libraryId: text,
  targetVersion: text, evidenceVersion: text, status: z.literal('historical-only'),
  sourceUrl: z.url(), items: z.array(z.object({
    id: text, groupId: text, subject: z.enum(['高等数学', '线性代数', '概率论与数理统计']),
    chapterNumber: z.number().int().positive(), number: z.number().int().positive(),
    page: z.number().int().positive(), label: text, candidateMethodIds: z.array(text),
  }).strict()).min(1),
}).strict();

export function validateRequirementItems(input: unknown, data: AtlasData, audit?: RequirementAudit): string[] {
  const parsed = requirementItemsSchema.safeParse(input);
  if (!parsed.success) return parsed.error.issues.map((issue) => `requirement items ${issue.path.join('.')}: ${issue.message}`);
  const items = parsed.data;
  const errors: string[] = [];
  if (!data.libraries.some((library) => library.id === items.libraryId)) errors.push('requirement items: unknown library');
  if (!audit || audit.libraryId !== items.libraryId || audit.evidenceVersion !== items.evidenceVersion
    || audit.targetVersion !== items.targetVersion || audit.sourceUrl !== items.sourceUrl) {
    return [...errors, 'requirement items: matching historical audit required'];
  }
  const methods = new Set(data.methods.filter((method) => method.libraryId === items.libraryId).map((method) => method.id));
  const ids = new Set<string>();
  const positions = new Set<string>();
  for (const item of items.items) {
    if (ids.has(item.id)) errors.push(`requirement items: duplicate id ${item.id}`);
    ids.add(item.id);
    const position = `${item.groupId}/${item.number}`;
    if (positions.has(position)) errors.push(`requirement items: duplicate position ${position}`);
    positions.add(position);
    const group = audit.groups.find((candidate) => candidate.id === item.groupId);
    if (!group) errors.push(`requirement items: unknown group ${item.groupId}`);
    else {
      const [first, last] = group.requirementRange.split('-').map(Number);
      if (item.number < first || item.number > last) errors.push(`requirement items: out-of-range ${position}`);
      if (item.page < group.sourcePage) errors.push(`requirement items: page precedes group ${position}`);
    }
    if (new Set(item.candidateMethodIds).size !== item.candidateMethodIds.length) errors.push(`requirement items: duplicate candidate ${item.id}`);
    for (const id of item.candidateMethodIds) if (!methods.has(id)) errors.push(`requirement items: unknown method ${id}`);
  }
  for (const group of audit.groups) {
    const [first, last] = group.requirementRange.split('-').map(Number);
    for (let number = first; number <= last; number++) {
      if (!positions.has(`${group.id}/${number}`)) errors.push(`requirement items: missing ${group.id}/${number}`);
    }
  }
  return errors;
}
