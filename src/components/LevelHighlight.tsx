import { useEffect, useId, useRef, useState } from 'react';
import { Layers } from 'lucide-react';

export function LevelHighlight({ value, levels, onChange }: {
  value: string; levels: string[][]; onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open]);
  return <div className="level-picker" ref={root} onKeyDown={event => {
    if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
  }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button ref={trigger} aria-label="层级连线高亮" title="层级连线高亮"
      aria-expanded={open} aria-controls={id} aria-pressed={!!value}
      onClick={() => setOpen(!open)}><Layers size={17} /></button>
    {open && <div id={id} className="level-options" role="group" aria-label="选择高亮层级">
      {[['', '不高亮'], ...levels].map(([kind, label]) => <button key={kind}
        aria-pressed={value === kind} onClick={() => {
          onChange(kind); setOpen(false); trigger.current?.focus();
        }}>{label}</button>)}
    </div>}
  </div>;
}
