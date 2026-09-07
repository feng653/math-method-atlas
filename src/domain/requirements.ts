import { z } from 'zod';
import type { AtlasData } from './schema';
import { validateRequirementItems } from './requirement-items';

const text = z.string().min(1);
export const requirementAuditSchema = z.object({
  schemaVersion: z.literal(1), libraryId: text, targetVersion: text, evidenceVersion: text,
  status: z.enum(['draft-not-runtime', 'historical-audit']), sourceUrl: z.url(), sourceKind: text, warning: text,
  groups: z.array(z.object({
    id: text, chapterId: text, sourceSection: text, sourcePage: z.number().int().positive(),
    requirementRange: z.string().regex(/^\d+-\d+$/), summary: text,
    candidateMethodIds: z.array(text), status: z.enum(['partial', 'candidate']), gapTopicIds: z.array(text),
  }).strict()),
  gaps: z.array(z.object({ topicId: text, chapterId: text, title: text,
    sourceRequirement: text, proposedMethodId: text }).strict()),
}).strict();
export type RequirementAudit = z.infer<typeof requirementAuditSchema>;

const questionGapSchema = z.object({
  schemaVersion: z.literal(1), libraryId: text,
  status: z.enum(['draft-not-runtime', 'question-gap-audit']), evidence: text, note: text,
  gaps: z.array(z.object({ year: z.number().int(), number: z.string().regex(/^[1-9]\d?$/),
    proposedMethodId: text, chapterId: text, title: text, reason: text, coveredByAudit24: z.boolean(),
  }).strict()),
}).strict();

function validateQuestionGaps(input: unknown, data: AtlasData): string[] {
  const parsed = questionGapSchema.safeParse(input);
  if (!parsed.success) return parsed.error.issues.map((issue) => `question gaps ${issue.path.join('.')}: ${issue.message}`);
  const audit = parsed.data;
  const library = data.libraries.find((item) => item.id === audit.libraryId);
  if (!library) return ['question gaps: unknown library'];
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const gap of audit.gaps) {
    if (ids.has(gap.proposedMethodId)) errors.push(`question gaps: duplicate ${gap.proposedMethodId}`);
    ids.add(gap.proposedMethodId);
    if (!library.chapters.some((chapter) => chapter.id === gap.chapterId)) errors.push(`question gaps: unknown chapter ${gap.chapterId}`);
    const paper = data.papers.find((item) => item.libraryId === library.id && item.year === gap.year);
    if (!paper || !data.questions.some((q) => q.libraryId === library.id && q.paperId === paper.id && q.number === gap.number)) {
      errors.push(`question gaps: unknown question ${gap.year}/${gap.number}`);
    }
  }
  return errors;
}

export function validateRequirements(input: unknown, data: AtlasData, documents: unknown[] = []): string[] {
  if (typeof input === 'object' && input !== null && 'type' in input && input.type === 'syllabus-items') {
    const audits = documents.map((document) => requirementAuditSchema.safeParse(document));
    const match = audits.find((result) => result.success && 'libraryId' in input && result.data.libraryId === input.libraryId
      && 'evidenceVersion' in input && result.data.evidenceVersion === input.evidenceVersion
      && 'targetVersion' in input && result.data.targetVersion === input.targetVersion);
    return validateRequirementItems(input, data, match?.success ? match.data : undefined);
  }
  if (typeof input === 'object' && input !== null && 'evidence' in input) return validateQuestionGaps(input, data);
  const parsed = requirementAuditSchema.safeParse(input);
  if (!parsed.success) return parsed.error.issues.map((issue) => `requirements ${issue.path.join('.')}: ${issue.message}`);
  const audit = parsed.data;
  const library = data.libraries.find((item) => item.id === audit.libraryId);
  if (!library) return ['requirements: unknown library'];
  const errors: string[] = [];
  const methods = new Set(data.methods.filter((method) => method.libraryId === library.id).map((method) => method.id));
  const groupIds = new Set<string>();
  const gapIds = new Set<string>();
  for (const group of audit.groups) {
    if (groupIds.has(group.id)) errors.push(`requirements: duplicate ${group.id}`);
    groupIds.add(group.id);
    const chapter = library.chapters.find((item) => item.id === group.chapterId);
    if (!chapter) errors.push(`requirements: unknown chapter ${group.chapterId}`);
    const [start, end] = group.requirementRange.split('-').map(Number);
    if (start < 1 || start > end) errors.push(`requirements: invalid range ${group.requirementRange}`);
    for (const id of group.candidateMethodIds) if (!methods.has(id)) errors.push(`requirements: unknown method ${id}`);
    for (const id of group.gapTopicIds) if (!chapter?.syllabusTopics.some((topic) => topic.id === id)) {
      errors.push(`requirements: unknown gap topic ${id}`);
    }
  }
  for (const gap of audit.gaps) {
    if (gapIds.has(gap.topicId)) errors.push(`requirements: duplicate gap ${gap.topicId}`);
    gapIds.add(gap.topicId);
    const chapter = library.chapters.find((item) => item.id === gap.chapterId);
    if (!chapter?.syllabusTopics.some((topic) => topic.id === gap.topicId)) errors.push(`requirements: unknown topic ${gap.topicId}`);
  }
  return errors;
}
