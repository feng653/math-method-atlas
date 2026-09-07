import { z } from 'zod';

const id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const text = z.string().trim().min(1);
const httpsUrl = z.url().refine((value) => value.startsWith('https://'), 'Source must use HTTPS');
const status = z.enum(['draft', 'reviewed']);
const source = z.object({ url: httpsUrl, page: z.number().int().positive().optional() }).strict();
const ids = z.array(id).refine((values) => new Set(values).size === values.length, 'Duplicate reference');
const formula = z.string().max(8000).refine(
  (value) => !/\\(?:html\w*|href|url|includegraphics|class|style|def|gdef|edef|xdef|let|futurelet|newcommand|renewcommand)\b/i.test(value),
  'Unsafe or unsupported LaTeX command',
);

export const librarySchema = z.object({
  schemaVersion: z.literal(1), id, title: text, description: text,
  syllabus: z.object({ version: text, sourceUrl: httpsUrl, reviewStatus: status }).strict(),
  chapters: z.array(z.object({
    id, title: text, subject: text,
    syllabusTopics: z.array(z.object({ id, title: text }).strict()).min(1),
  }).strict()).min(1),
}).strict();

export const methodSchema = z.object({
  id, libraryId: id, chapterId: id, title: text, summary: text,
  conditions: z.array(text).min(1), steps: z.array(text).min(1), formula,
  pitfalls: z.array(text).min(1),
  example: z.object({ prompt: text, solution: text }).strict(),
  relatedIds: ids, topicIds: ids.refine((values) => values.length > 0, 'Method needs a syllabus topic'),
  status,
}).strict();

export const paperSchema = z.object({
  id, libraryId: id, year: z.number().int().min(1987).max(2100), exam: text, title: text, source,
  status: z.enum(['indexed', 'partial', 'complete']),
  sourceNote: text.optional(),
  expectedQuestionCount: z.number().int().positive().optional(),
}).strict().refine((paper) => paper.status !== 'complete' || paper.expectedQuestionCount !== undefined,
  'Complete paper needs expectedQuestionCount');

export const questionSchema = z.object({
  id, libraryId: id, paperId: id, number: z.string().regex(/^[1-9]\d?$/, 'Use the main question number without leading zeros'), summary: text, source,
  sourceNote: text.optional(),
  methodLinks: z.array(z.object({
    methodId: id, verification: z.enum(['pending', 'verified']), note: z.string(),
  }).strict().refine((link) => link.verification !== 'verified' || link.note.trim().length > 0,
    'Verified method link needs evidence note')),
}).strict();

export const atlasSchema = z.object({
  libraries: z.array(librarySchema).min(1), methods: z.array(methodSchema),
  papers: z.array(paperSchema), questions: z.array(questionSchema),
}).strict();

export type Library = z.infer<typeof librarySchema>;
export type Method = z.infer<typeof methodSchema>;
export type Paper = z.infer<typeof paperSchema>;
export type Question = z.infer<typeof questionSchema>;
export type AtlasData = z.infer<typeof atlasSchema>;
