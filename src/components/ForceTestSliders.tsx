import { useState } from 'react';

// Experimental branch: controls are visible only in the development server.
export const testForces = { attraction: 1, repulsion: 1 };
const toMultiplier = (position: number) => Math.expm1(position / 1000 * Math.log(1001));
const toPosition = (multiplier: number) => Math.log1p(multiplier) / Math.log(1001) * 1000;

export function ForceTestSliders() {
  const [values, setValues] = useState({ ...testForces });
  function change(key: keyof typeof values, value: number) {
    testForces[key] = value;
    setValues({ ...testForces });
  }
  return <aside aria-label="临时力参数测试" style={{ position: 'absolute', top: 90, left: 16,
    zIndex: 30, width: 290, padding: 16, borderRadius: 14, background: '#fffffff5',
    border: '1px solid #dfe6dc', boxShadow: '0 5px 22px #344b3610', color: '#294634' }}>
    <strong>力参数 · 本地测试</strong>
    {([['attraction', '吸引力'], ['repulsion', '排斥力']] as const).map(([key, label]) =>
      <label key={key} style={{ display: 'block', marginTop: 14 }}>
        {label} <output style={{ float: 'right', fontVariantNumeric: 'tabular-nums' }}>{values[key].toFixed(2)}×</output>
        <input aria-label={`${label}倍率`} aria-valuetext={`${values[key].toFixed(2)}倍`} type="range"
          min={0} max={1000} step="any" value={toPosition(values[key])}
          onChange={event => change(key, toMultiplier(Number(event.target.value)))}
          style={{ display: 'block', width: '100%', accentColor: '#0f766e', marginTop: 8 }} />
      </label>)}
    <small>0× — 对数刻度 log(1 + 倍率) — 1000×</small>
    <button style={{ display: 'block', marginTop: 12 }} onClick={() => {
      testForces.attraction = 1; testForces.repulsion = 1; setValues({ ...testForces });
    }}>恢复两项为 1×</button>
  </aside>;
}
