import { z } from 'zod';
import { sourceSchema as source } from './source';
import { thinkingCategorySchema, thinkingSampleSchema } from './thinking-schema';

const id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const text = z.string().trim().min(1);
const httpsUrl = z.url().refine((value) => value.startsWith('https://'), 'Source must use HTTPS');
const status = z.enum(['draft', 'reviewed']);
export const methodRoleSchema = z.enum(['primary', 'supporting', 'unclassified']);
const ids = z.array(id).refine((values) => new Set(values).size === values.length, 'Duplicate reference');
const formula = z.string().max(8000).refine(
  (value) => !/\\(?:html\w*|href|url|includegraphics|class|style|def|gdef|edef|xdef|let|futurelet|newcommand|renewcommand)\b/i.test(value),
  'Unsafe or unsupported LaTeX command',
);
export const examScopeSchema = z.object({
  exam: text, startYear: z.number().int().min(1987).max(2100),
  endYear: z.number().int().min(1987).max(2100),
}).strict().refine((scope) => scope.startYear <= scope.endYear, 'Exam scope years must be ordered');

export const librarySchema = z.object({
  schemaVersion: z.literal(1), id, title: text, description: text,
  syllabus: z.object({ version: text, sourceUrl: httpsUrl, reviewStatus: status }).strict(),
  examScope: examScopeSchema.optional(),
  chapters: z.array(z.object({
    id, title: text, subject: text, supplementary: z.boolean().optional(),
    syllabusTopics: z.array(z.object({ id, title: text }).strict()).min(1),
  }).strict()).min(1),
}).strict();

export const methodSchema = z.object({
  id, libraryId: id, chapterId: id, title: text, summary: text,
  conditions: z.array(text).min(1), steps: z.array(text).min(1), formula,
  pitfalls: z.array(text).min(1),
  example: z.object({ prompt: text, formulas: z.array(formula).optional(),
    solution: z.union([text, z.array(z.object({ title: text, text,
      formulas: z.array(formula) }).strict()).min(1)]) }).strict(),
  relatedIds: ids, topicIds: ids.refine((values) => values.length > 0, 'Method needs a syllabus topic'),
  status,
}).strict();

export const problemTypeSchema = z.object({
  id, libraryId: id, chapterId: id, title: text, summary: text,
  kind: z.enum(['problem', 'trigger']).optional(),
  category: thinkingCategorySchema.optional(),
  recognition: z.array(text).min(1), strategy: z.array(text).min(1),
  methods: z.array(z.object({ methodId: id, when: text }).strict()).min(1),
  formulas: z.array(z.object({ id, title: text, latex: formula.refine((value) => !!value.trim(), 'Formula cannot be empty'),
    conditions: z.array(text).min(1), derivation: text, methodIds: ids.min(1),
  }).strict()),
  questionIds: ids, boundaries: z.array(text).min(1), status,
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
  subquestions: z.array(z.object({
    id, label: text, summary: text, methodIds: ids, evidenceNote: text,
    source: source.optional(),
  }).strict()).min(1).optional(),
  subquestionAudit: z.object({
    expectedCount: z.number().int().nonnegative(), checkedOn: z.iso.date(), note: text,
  }).strict().optional(),
  methodLinks: z.array(z.object({
    methodId: id, verification: z.enum(['pending', 'verified']), note: z.string(),
    role: methodRoleSchema.optional(), roleNote: text.optional(),
  }).strict().refine((link) => link.verification !== 'verified' || link.note.trim().length > 0,
    'Verified method link needs evidence note').refine((link) => !link.role || link.role === 'unclassified' || !!link.roleNote,
    'Classified method role needs roleNote')),
}).strict().refine((question) => !question.subquestionAudit
  || question.subquestionAudit.expectedCount === (question.subquestions?.length ?? 0),
  'Audited subquestion count must match recorded parts');

export const atlasSchema = z.object({
  libraries: z.array(librarySchema).min(1), methods: z.array(methodSchema),
  papers: z.array(paperSchema), questions: z.array(questionSchema),
  problemTypes: z.array(problemTypeSchema).default([]),
  thinkingSamples: z.array(thinkingSampleSchema).default([]),
}).strict();

export type Library = z.infer<typeof librarySchema>;
export type Method = z.infer<typeof methodSchema>;
export type Paper = z.infer<typeof paperSchema>;
export type Question = z.infer<typeof questionSchema>;
export type ProblemType = z.infer<typeof problemTypeSchema>;
export type AtlasData = z.infer<typeof atlasSchema>;
