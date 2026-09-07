import type { getArchiveStats } from '../domain/archive-statistics';

export function ArchiveCoverage({ stats }: { stats: ReturnType<typeof getArchiveStats> }) {
  const range = stats.startYear === stats.endYear ? stats.startYear : `${stats.startYear}—${stats.endYear}`;
  return <div className="archive-coverage">
    {stats.paperCount ? <p className="fine-print">收录 {range} 年 · {stats.paperCount} 卷；
      {stats.verifiedQuestionCount}/{stats.indexedQuestionCount} 题有已核验关联。</p>
      : <p className="fine-print">尚未收录真题，不能据此判断考试频次。</p>}
    {stats.target && <p className="fine-print">目标 {stats.target.startYear}—{stats.target.endYear}：
      {stats.target.completePapers}/{stats.target.expectedPapers} 卷逐题索引齐全。
      {stats.target.incompleteYears.length > 0 && `待补年份：${stats.target.incompleteYears.join('、')}。`}</p>}
    {stats.paperCount > 0 && <p className="fine-print">频次仅限已核验关联，未收录年份不参与统计。</p>}
  </div>;
}
