import katex from 'katex';
import { useMemo } from 'react';

export function Formula({ value }: { value: string }) {
  const html = useMemo(() => katex.renderToString(value, {
    displayMode: true, throwOnError: false, trust: false, maxExpand: 200, strict: 'warn',
  }), [value]);
  return <div className="formula" dangerouslySetInnerHTML={{ __html: html }} />;
}
