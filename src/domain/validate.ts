import { atlasSchema, type AtlasData } from './schema';

export function validateAtlas(input: unknown): string[] {
  const result = atlasSchema.safeParse(input);
  if (!result.success) return result.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`);
  const data: AtlasData = result.data;
  const errors: string[] = [];
  const key = (libraryId: string, id: string) => `${libraryId}/${id}`;
  const unique = (values: string[], label: string) => {
    const seen = new Set<string>();
    for (const value of values) {
      if (seen.has(value)) errors.push(`${label}: duplicate ${value}`);
      seen.add(value);
    }
  };
  unique(data.libraries.map((library) => library.id), 'library');
  for (const [label, records] of Object.entries({ method: data.methods, paper: data.papers, question: data.questions })) {
    unique(records.map((record) => key(record.libraryId, record.id)), label);
  }
  const libraries = new Map(data.libraries.map((library) => [library.id, library]));
  const methods = new Map(data.methods.map((method) => [key(method.libraryId, method.id), method]));
  const papers = new Map(data.papers.map((paper) => [key(paper.libraryId, paper.id), paper]));
  for (const library of data.libraries) {
    unique(library.chapters.map((chapter) => chapter.id), `${library.id} chapter`);
    unique(library.chapters.flatMap((chapter) => chapter.syllabusTopics.map((topic) => topic.id)), `${library.id} topic`);
  }
  for (const method of data.methods) {
    const label = key(method.libraryId, method.id);
    const library = libraries.get(method.libraryId);
    const chapter = library?.chapters.find((item) => item.id === method.chapterId);
    if (!library) errors.push(`${label}: unknown library`);
    if (!chapter) errors.push(`${label}: unknown chapter`);
    const topics = new Set(chapter?.syllabusTopics.map((topic) => topic.id));
    for (const topicId of method.topicIds) {
      if (!topics.has(topicId)) errors.push(`${label}: topic ${topicId} does not belong to chapter`);
    }
    for (const relatedId of method.relatedIds) {
      if (relatedId === method.id || !methods.has(key(method.libraryId, relatedId))) {
        errors.push(`${label}: invalid related method ${relatedId}`);
      }
    }
  }
  unique(data.papers.map((paper) => `${paper.libraryId}/${paper.year}/${paper.exam}`), 'paper year/exam');
  for (const paper of data.papers) {
    const label = key(paper.libraryId, paper.id);
    if (!libraries.has(paper.libraryId)) errors.push(`${label}: unknown library`);
    const questions = data.questions.filter((question) => question.libraryId === paper.libraryId && question.paperId === paper.id);
    unique(questions.map((question) => question.number.trim()), `${label} question number`);
    if (paper.status === 'complete' && questions.length !== paper.expectedQuestionCount) {
      errors.push(`${label}: complete paper question count mismatch`);
    }
    if (paper.expectedQuestionCount !== undefined && questions.length > paper.expectedQuestionCount) {
      errors.push(`${label}: question count exceeds expectedQuestionCount`);
    }
  }
  for (const question of data.questions) {
    const label = key(question.libraryId, question.id);
    if (!libraries.has(question.libraryId)) errors.push(`${label}: unknown library`);
    if (!papers.has(key(question.libraryId, question.paperId))) errors.push(`${label}: unknown paper`);
    unique(question.methodLinks.map((link) => link.methodId), `${label} method link`);
    for (const link of question.methodLinks) {
      if (!methods.has(key(question.libraryId, link.methodId))) errors.push(`${label}: unknown method ${link.methodId}`);
    }
  }
  return errors;
}
