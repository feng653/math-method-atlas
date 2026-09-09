import { useRef } from 'react';
export function DetailResize({ width, onChange }: { width: number; onChange: (width: number) => void }) {
  const start = useRef({ x: 0, width });
  const clamp = (next: number) => Math.max(320, Math.min(window.innerWidth - 48, next));
  return <div className="detail-resize" role="separator" aria-label="调整内容页宽度" tabIndex={0}
    aria-orientation="vertical" aria-valuemin={320} aria-valuemax={window.innerWidth - 48} aria-valuenow={width}
    onKeyDown={event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); onChange(clamp(width + (event.key === 'ArrowLeft' ? 32 : -32)));
      }
    }} onPointerDown={event => {
      start.current = { x: event.clientX, width }; event.currentTarget.setPointerCapture(event.pointerId);
    }} onPointerMove={event => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) onChange(clamp(start.current.width + start.current.x - event.clientX));
    }} onPointerUp={event => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    }}><span /></div>;
}
