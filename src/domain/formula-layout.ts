/** Split only top-level spacing separators; preserve fractions, cases and matrices. */
export function formulaRows(value: string): string[] {
  const rows: string[] = [];
  let braces = 0, environments = 0, delimiters = 0, start = 0;
  for (let i = 0; i < value.length; i++) {
    if (value.startsWith('\\begin{', i)) environments++;
    if (value.startsWith('\\end{', i)) environments--;
    if (value.startsWith('\\left', i)) delimiters++;
    if (value.startsWith('\\right', i)) delimiters--;
    if (value[i] === '{' && value[i - 1] !== '\\') braces++;
    if (value[i] === '}' && value[i - 1] !== '\\') braces--;
    const token = value.slice(i).match(/^\\(?:qquad|quad)\b/);
    if (token && braces === 0 && environments === 0 && delimiters === 0) {
      const row = value.slice(start, i).trim();
      if (row) rows.push(row);
      i += token[0].length - 1; start = i + 1;
    }
  }
  const last = value.slice(start).trim();
  if (last) rows.push(last);
  return rows;
}
