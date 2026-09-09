import type { StructuredMethod } from '../domain/schema';

export function MethodLearning({ learning }: { learning: NonNullable<StructuredMethod['learning']> }) {
  return <section className="method-learning" aria-label="从直觉开始理解">
    <h2>先理解它在解决什么</h2><p>{learning.intuition}</p>
    <h2>先认识这些概念与符号</h2>
    <dl className="symbol-list">{learning.symbols.map(item => <div key={item.symbol}>
      <dt>{item.symbol}</dt><dd>{item.meaning}</dd>
    </div>)}</dl>
    <h2>这条公式怎么读</h2>
    {learning.explanation.map(text => <p key={text}>{text}</p>)}
  </section>;
}
