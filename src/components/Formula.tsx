import katex from 'katex';
import { useMemo, useRef } from 'react';
import { formulaRows } from '../domain/formula-layout';

export function Formula({ value }: { value: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const rows = useMemo(() => formulaRows(value).map(row => katex.renderToString(row, {
    displayMode: false, throwOnError: false, trust: false, maxExpand: 200, strict: 'warn',
  })), [value]);
  const content = <table className="formula-table"><tbody>{rows.map((html, i) => <tr key={i}>
    {rows.length > 1 && <th scope="row">{i + 1}</th>}
    <td><div className="formula-row" dangerouslySetInnerHTML={{ __html: html }} /></td>
  </tr>)}</tbody></table>;
  return <div className="formula">
    <button className="formula-expand" onClick={() => dialog.current?.showModal()} aria-label="放大查看公式">放大</button>
    {content}
    <dialog className="formula-dialog" ref={dialog} aria-label="公式完整视图">
      <button onClick={() => dialog.current?.close()}>关闭</button>{content}
    </dialog>
  </div>;
}
