export function TimelineItem({
  title,
  subtitle,
  dateRange,
  description,
}: {
  title: string;
  subtitle: string;
  dateRange: string;
  description: string;
}) {
  return (
    <div className="relative pl-6 border-l border-surface1 pb-8 last:pb-0">
      <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-peach" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-text font-medium text-lg">{title}</h3>
        <span className="text-sm text-overlay0 shrink-0">{dateRange}</span>
      </div>
      <p className="text-mauve mb-2">{subtitle}</p>
      {description && (
        <p className="text-subtext0 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
