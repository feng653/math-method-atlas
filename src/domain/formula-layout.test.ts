import { describe, expect, it } from 'vitest';
import katex from 'katex';
import { formulaRows } from './formula-layout';
import { data } from '../data/load';

describe('formula reading rows', () => {
  it('preserves grouped math and paired delimiters', () => {
    for (const input of [String.raw`\left(x\quad y\right)`,
      String.raw`\begin{cases}x&=1\quad y\\z&=2\end{cases}`,
      String.raw`\frac{x\quad y}{z}`]) expect(formulaRows(input)).toEqual([input]);
    expect(formulaRows(String.raw`x=1\qquad y=2`)).toEqual(['x=1', 'y=2']);
  });
  it('keeps every existing formula renderable after splitting', () => {
    const values = data.methods.flatMap(method => [method.formula, ...(method.example.formulas ?? []),
      ...(typeof method.example.solution === 'string' ? [] : method.example.solution.flatMap(step => step.formulas))]);
    values.push(...data.problemTypes.flatMap(type => type.formulas.map(item => item.latex)));
    values.push(...data.questions.flatMap(question => [...(question.statement?.formulas ?? []),
      ...(question.statement?.options ?? [])]));
    for (const value of values) for (const row of formulaRows(value)) {
      expect(() => katex.renderToString(row, { throwOnError: true, strict: 'error' }), row).not.toThrow();
    }
  });
});
