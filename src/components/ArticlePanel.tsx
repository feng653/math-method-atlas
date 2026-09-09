import { X } from 'lucide-react';
import { ChapterReader } from './ChapterReader';

export function ArticlePanel({ path, section, onClose }: {
  path: string; section?: string; onClose: () => void;
}) {
  return <aside className="detail-panel glass-panel" aria-label="章节文章">
    <header className="panel-header"><span className="eyebrow">学习文章</span>
      <button aria-label="关闭文章" onClick={onClose}><X size={19} /></button></header>
    <div className="detail-scroll"><ChapterReader path={path} section={section} /></div>
  </aside>;
}
