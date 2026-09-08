import { z } from 'zod';

const id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const text = z.string().trim().min(1);
const ids = z.array(id).min(1).refine((items) => new Set(items).size === items.length, 'Duplicate thinking reference');
export const thinkingCategorySchema = z.enum(['read', 'transform', 'branch', 'verify']);
export const thinkingSampleSchema = z.object({
  id, libraryId: id, questionId: id, chapterIds: ids, triggerIds: ids, methodIds: ids,
  signal: text, reasoning: z.array(text).min(2), boundary: text, evidenceBasis: text,
  status: z.enum(['draft', 'reviewed']),
}).strict();
export type ThinkingSample = z.infer<typeof thinkingSampleSchema>;
export type ThinkingCategory = z.infer<typeof thinkingCategorySchema>;
export const thinkingCategories: { id: ThinkingCategory; title: string; color: string; prompt: string }[] = [
  { id: 'read', title: '读题与转译', color: '#28766b', prompt: '目标缺什么？条件意味着什么？' },
  { id: 'transform', title: '结构与变换', color: '#636d99', prompt: '换一种表示，能否更容易处理？' },
  { id: 'branch', title: '条件与分支', color: '#99673d', prompt: '哪种情形成立？哪里会失效？' },
  { id: 'verify', title: '验证与收尾', color: '#71784c', prompt: '能否反证、估计或回验？' },
];
