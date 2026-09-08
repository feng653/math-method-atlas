import type { AtlasData, ProblemType, Question } from './schema';

export function validateProblemTypes(data: AtlasData): string[] {
  const errors: string[] = [], seen = new Set<string>();
  for (const type of data.problemTypes) {
    const label = `${type.libraryId}/${type.id}`;
    if (seen.has(label)) errors.push(`${label}: duplicate problem type`);
    seen.add(label);
    const library = data.libraries.find((item) => item.id === type.libraryId);
    if (!library?.chapters.some((chapter) => chapter.id === type.chapterId)) errors.push(`${label}: unknown chapter`);
    const methodIds = new Set(type.methods.map((item) => item.methodId));
    if (methodIds.size !== type.methods.length) errors.push(`${label}: duplicate method choice`);
    for (const id of methodIds) if (!data.methods.some((item) => item.libraryId === type.libraryId && item.id === id)) {
      errors.push(`${label}: unknown method ${id}`);
    }
    const formulas = new Set<string>();
    for (const formula of type.formulas) {
      if (formulas.has(formula.id)) errors.push(`${label}: duplicate formula ${formula.id}`);
      formulas.add(formula.id);
      for (const id of formula.methodIds) if (!methodIds.has(id)) errors.push(`${label}: formula method absent from choices ${id}`);
    }
    for (const id of type.questionIds) if (!data.questions.some((item) => item.libraryId === type.libraryId && item.id === id)) {
      errors.push(`${label}: unknown question ${id}`);
    }
  }
  return errors;
}

/** Editorial task classification, never inferred from shared methods. */
export function getProblemQuestions(type: ProblemType, questions: Question[]) {
  const ids = new Set(type.questionIds);
  return questions.filter((question) => question.libraryId === type.libraryId && ids.has(question.id));
}
