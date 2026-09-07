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
  it('requires every historical source position while keeping candidates unverified', () => {
    const group = audit.groups[0];
    const parent = { ...audit, groups: [group], gaps: [] };
    const [first, last] = group.requirementRange.split('-').map(Number);
    const document = { schemaVersion: 1, type: 'syllabus-items', libraryId: audit.libraryId,
      targetVersion: audit.targetVersion, evidenceVersion: audit.evidenceVersion,
      status: 'historical-only', sourceUrl: audit.sourceUrl,
      items: Array.from({ length: last - first + 1 }, (_, index) => ({
        id: `item-${index}`, groupId: group.id, subject: '高等数学', chapterNumber: 1,
        number: first + index, page: group.sourcePage, label: 'Historical requirement',
        candidateMethodIds: [...group.candidateMethodIds],
      })),
    };
    expect(validateRequirements(document, data, [parent])).toEqual([]);
    expect(validateRequirements({ ...document, status: 'reviewed' }, data, [parent]).length).toBeGreaterThan(0);
    expect(validateRequirements(document, data)).toContain('requirement items: matching historical audit required');
    const incomplete = structuredClone(document);
    incomplete.items.pop();
    expect(validateRequirements(incomplete, data, [parent]).join(' ')).toContain('missing');
    const duplicate = structuredClone(document);
    duplicate.items[1] = duplicate.items[0];
    expect(validateRequirements(duplicate, data, [parent]).join(' ')).toContain('duplicate position');
    const dangling = structuredClone(document);
    dangling.items[0].candidateMethodIds.push('not-a-method');
    expect(validateRequirements(dangling, data, [parent]).join(' ')).toContain('unknown method');
  });
});
