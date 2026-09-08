import type { AtlasData, Library } from '../domain/schema';
import { thinkingCoverage } from '../domain/thinking';

export function ThinkingCoverage({ library, data }: { library: Library; data: AtlasData }) {
  const coverage = thinkingCoverage(library, data.thinkingSamples, data.papers, data.problemTypes, data.questions);
  return <details className="thinking-coverage">
    <summary>思路图谱 · {coverage.sampleCount} 道代表题 · 抽样说明</summary>
    <p>每个常规章节至少选两题，已覆盖 {coverage.coveredChapters}/{coverage.chapters.length} 章；
      样本涉及 {coverage.years.length} 个年份。依据已审题目索引和方法核验记录提炼，单独复查来源的样本另有说明。</p>
    <p>先读触发条件，再选思路；点分类可展开局部。抽样不能证明技巧穷尽，也不用于计算考试频次。</p>
  </details>;
}
