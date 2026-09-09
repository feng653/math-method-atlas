import { describe, expect, it } from 'vitest';
import { articles, data } from '../data/load';

describe('beginner reading coverage', () => {
  it('provides concepts for every chapter and a guided example for every method', () => {
    for (const library of data.libraries) for (const chapter of library.chapters) {
      expect(chapter.concepts?.length, chapter.id).toBeGreaterThanOrEqual(5);
      const titles = chapter.concepts?.map(concept => concept.title) ?? [];
      expect(new Set(titles).size, chapter.id).toBe(titles.length);
      for (const concept of chapter.concepts ?? []) {
        const label = `${library.id}/${chapter.id}/${concept.title}`;
        expect(concept.explanation, label).toContain('数学定义：');
        expect(concept.explanation, label).toContain('常用性质：');
        expect(concept.explanation, label).toMatch(/易错点：|使用边界：/);
      }
    }
    for (const method of data.methods) {
      if (method.article !== undefined) {
        expect(articles[method.article], method.id).toMatch(/例|自编|真题/);
        expect(articles[method.article], method.id).toContain('$$');
        // Mathematical prerequisites are reviewed in prose; keywords cannot certify them.
        continue;
      }
      expect(method.learning?.intuition, method.id).toBeTruthy();
      expect(method.learning?.symbols.length, method.id).toBeGreaterThan(0);
      expect(Array.isArray(method.example.solution), method.id).toBe(true);
      expect(method.example.solution.length, method.id).toBeGreaterThanOrEqual(2);
    }
  });
  it('keeps a readable example available for every offered method in a type card', () => {
    for (const type of data.problemTypes) for (const choice of type.methods) {
      const method = data.methods.find(item => item.libraryId === type.libraryId && item.id === choice.methodId);
      if (method?.article !== undefined) {
        expect(articles[method.article], `${type.id}/${choice.methodId}`).toMatch(/例|自编|真题/);
        continue;
      }
      expect(method?.learning?.intuition, `${type.id}/${choice.methodId}`).toBeTruthy();
      expect(method?.example.prompt, `${type.id}/${choice.methodId}`).toBeTruthy();
    }
  });
});
