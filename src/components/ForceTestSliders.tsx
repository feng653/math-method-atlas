import { useState } from 'react';
import { ChevronUp, SlidersHorizontal } from 'lucide-react';
import { defaultPhysics } from '../domain/physics-settings';

export const testForces = { ...defaultPhysics, frequency: 30, dampingRatio: 3,
  repulsion: 1000, airDrag: 20, iterations: 20 };

export function ForceTestSliders() {
  const [value, setValue] = useState(testForces.frequency);
  const [collapsed, setCollapsed] = useState(false);
  const percent = Math.round(value / 30 * 100);
  return <aside className={`connection-tension ${collapsed ? 'is-collapsed' : ''}`} aria-label="连接松紧">
    <div className="tension-heading">
      {!collapsed && <><strong>连接松紧</strong><output>{percent}%</output></>}
      <button className="tension-toggle" aria-label={collapsed ? '展开连接松紧' : '收起连接松紧'}
        title={collapsed ? '展开连接松紧' : '收起连接松紧'} aria-expanded={!collapsed}
        onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <SlidersHorizontal size={17} /> : <ChevronUp size={17} />}
      </button>
    </div>
    <div hidden={collapsed}>
    <p>向右收紧连接，向左让节点舒展开。</p>
    <input aria-label="连接松紧" aria-valuetext={`${percent}%收紧`} type="range"
      min={0} max={30} step={0.1} value={value}
      style={{ background: `linear-gradient(to right, #0f766e ${percent}%, #dce6dd ${percent}%)` }}
      onChange={event => { const next = Number(event.target.value); testForces.frequency = next; setValue(next); }} />
    <div className="tension-ends"><span>松开</span><span>收紧</span></div>
    </div>
  </aside>;
}
