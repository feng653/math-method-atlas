import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { validateRequirements } from '../src/domain/requirements';
import { librarySchema, methodSchema } from '../src/domain/schema';

const json = (file: string) => JSON.parse(readFileSync(file, 'utf8'));
const base = 'content/libraries/math-one';
const data = { libraries: [librarySchema.parse(json(`${base}/library.json`))],
  methods: readdirSync(`${base}/methods`).map((name) => methodSchema.parse(json(`${base}/methods/${name}`))),
  papers: [], questions: [] };
const audit = json('content/requirements/math-one-2019-audit.json');
describe('external requirement audit', () => {
  it('validates an independently sourced historical audit without certifying its target version', () => {
    expect(validateRequirements(audit, data)).toEqual([]);
    expect(audit.evidenceVersion).not.toBe(audit.targetVersion);
    expect(data.libraries[0].syllabus.reviewStatus).toBe('draft');
  });
  it('rejects dangling method references and duplicate groups', () => {
    const changed = structuredClone(audit);
    changed.groups[0].candidateMethodIds.push('missing');
    changed.groups.push(changed.groups[0]);
    expect(validateRequirements(changed, data).join(' ')).toContain('unknown method missing');
    expect(validateRequirements(changed, data).join(' ')).toContain('duplicate');
  });
});
