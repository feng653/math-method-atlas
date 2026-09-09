import { Layers } from 'lucide-react';

export function LevelHighlight({ value, levels, onChange }: {
  value: string; levels: string[][]; onChange: (value: string) => void;
}) {
  const choices = [['', '不高亮'], ...levels];
  const index = Math.max(0, choices.findIndex(([kind]) => kind === value));
  const next = choices[(index + 1) % choices.length];
  const current = choices[index][1];
  return <button aria-label={`层级高亮：${current}，点击切换为${next[1]}`}
    title={`当前：${current} · 点击切换为${next[1]}`} aria-pressed={!!value}
    onClick={() => onChange(next[0])}><Layers size={17} /></button>;
}
