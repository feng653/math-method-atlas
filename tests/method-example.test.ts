import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { MethodExample } from '../src/components/MethodExample';
import { methodSchema } from '../src/domain/schema';
import { data } from '../src/data/load';

it('links an exam example to the existing question source without claiming it is self-authored', () => {
  const question = data.questions[0];
  const html = renderToStaticMarkup(createElement(MethodExample, {
    example: { questionId: question.id, prompt: '题意摘要', solution: '原创推导。' }, questions: [question],
  }));
  expect(html).toContain('真题 · 原创讲解');
  expect(html).toContain(question.source.url.replaceAll('&', '&amp;'));
  expect(html).toContain(`第 ${question.number} 题`);
});

it('renders structured steps with math and preserves readable legacy text', () => {
  const method = data.methods.find((item) => item.id === 'basic-hidden-constraint')!;
  const html = renderToStaticMarkup(createElement(MethodExample, { example: method.example }));
  expect(html).toContain('example-steps');
  expect(html).toContain('katex-mathml');
  expect(html).toContain('把“全微分”转成约束');
  expect(html).not.toContain('自编例题');
  const legacy = renderToStaticMarkup(createElement(MethodExample,
    { example: { prompt: '题目', solution: '第一步。第二步。' } }));
  expect(legacy).toContain('<p>第一步。</p><p>第二步。</p>');
  expect(methodSchema.safeParse({ ...method, example: { prompt: '题目', solution: [
    { title: '步骤', text: '说明', formulas: ['\\href{https://example.com}{x}'] },
  ] } }).success).toBe(false);
});
