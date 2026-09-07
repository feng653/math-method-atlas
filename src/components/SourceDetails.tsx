import { sourceAvailabilityLabel, sourceLevelLabel, sourceLocationLabel, type Source } from '../domain/source';

export function SourceDetails({ source }: { source: Source }) {
  const info = source.metadata;
  return <>
    {info?.availability === 'unavailable' && <p className="source-note" role="status">
      此来源在 {info.checkedOn} 检查时无法访问，链接保留供追溯。
    </p>}
    <details className="source-details"><summary>来源说明</summary>
      {info ? <>
        <p>{info.publisher} · {sourceLevelLabel[info.level]}</p>
        <p>{info.checkedOn} · {sourceAvailabilityLabel[info.availability]}
          {source.page ? ` · ${sourceLocationLabel(source)}` : ''}</p>
        <p>{info.evidence}</p>
        <p>原题在外部来源查看；本库保存原创摘要和方法分析。{info.rightsNote}</p>
      </> : <p>来源级别与可用性尚未登记，不能据链接存在判断已核验。</p>}
    </details>
  </>;
}
