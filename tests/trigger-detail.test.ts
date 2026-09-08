import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import { ProblemTypeDetail } from '../src/components/ProblemTypeDetail';
import { data } from '../src/data/load';
import { validateProblemTypes } from '../src/domain/problem-types';

it('renders trigger guidance without exam classification and retains normal problem details', () => {
  const trigger = data.problemTypes.find((type) => type.id === 'basic-repeated-expression')!;
  const render = (type: typeof trigger) => renderToStaticMarkup(createElement(ProblemTypeDetail,
    { type, methods: data.methods, questions: data.questions, papers: data.papers,
      onSelect: () => {}, onClose: () => {} }));
  const html = render(trigger);
  expect(html).toContain('触发条件详情');
  expect(html).toContain('看到什么时想到');
  expect(html).not.toContain('本题型历年真题');
  expect(render(data.problemTypes.find((type) => !type.kind)!)).toContain('本题型历年真题');
  expect(validateProblemTypes({ ...data, problemTypes: [{ ...trigger, questionIds: [data.questions[0].id] }] }))
    .toContain(`${trigger.libraryId}/${trigger.id}: trigger conditions do not classify exam questions`);
});
