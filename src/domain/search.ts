import type { Method } from './schema';

function normalize(value: string): string {
  return value.normalize('NFKC').toLocaleLowerCase().trim();
}

export function searchMethods(methods: Method[], query: string): Method[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return methods;
  return methods.filter((method) => {
    const haystack = normalize([method.title, method.summary, ...method.conditions,
      ...method.steps, ...method.pitfalls, ...method.topicIds].join(' '));
    return terms.every((term) => haystack.includes(term));
  });
}
