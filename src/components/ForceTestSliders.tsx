import { useState } from 'react';
import { defaultPhysics, type PhysicsSettings } from '../domain/physics-settings';

export const testForces = { ...defaultPhysics };
const controls: { key: keyof PhysicsSettings; label: string; max: number; unit: string; log?: boolean }[] = [
  { key: 'frequency', label: '连接频率', max: 30, unit: 'Hz' },
  { key: 'dampingRatio', label: '连接阻尼比', max: 3, unit: '' },
  { key: 'repulsion', label: '排斥力', max: 1000, unit: '×', log: true },
  { key: 'airDrag', label: '空气阻力', max: 20, unit: '/s' },
  { key: 'iterations', label: '连接求解迭代', max: 20, unit: '次' },
];
export function ForceTestSliders() {
  const [values, setValues] = useState({ ...testForces });
  return <aside aria-label="临时力参数测试" style={{ position: 'absolute', top: 90, left: 16,
    zIndex: 30, width: 290, padding: 16, borderRadius: 14, background: '#fffffff5',
    maxHeight: 'calc(100% - 260px)', overflowY: 'auto',
    border: '1px solid #dfe6dc', boxShadow: '0 5px 22px #344b3610', color: '#294634' }}>
    <strong>软连接 · 本地测试</strong>
    <p style={{ fontSize: 12 }}>物理120Hz · 连线只拉不推 · 阻尼比1接近临界阻尼</p>
    {controls.map(({ key, label, max, unit, log }) => <label key={key} style={{ display: 'block', marginTop: 10 }}>
      {label} <output style={{ float: 'right' }}>{values[key].toFixed(key === 'iterations' ? 0 : 2)} {unit}</output>
      <input aria-label={label} type="range" min={key === 'iterations' ? 1 : 0} max={max}
        step={key === 'iterations' ? 1 : 'any'}
        value={log ? Math.log1p(values[key]) / Math.log1p(max) * max : values[key]}
        onChange={event => {
          const value = Number(event.target.value);
          testForces[key] = log ? Math.min(max, Math.expm1(value / max * Math.log1p(max))) : value;
          setValues({ ...testForces });
        }} style={{ display: 'block', width: '100%', accentColor: '#0f766e' }} />
    </label>)}
    <small>频率越大越硬；空气阻力抑制整体运动。0关闭对应作用。排斥力为对数刻度。</small>
    <button style={{ display: 'block', marginTop: 12 }} onClick={() => {
      Object.assign(testForces, defaultPhysics); setValues({ ...testForces });
    }}>恢复默认参数</button>
  </aside>;
}
