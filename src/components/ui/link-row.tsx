export function LinkRow({
  label,
  url,
}: {
  label: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-baseline gap-3 py-2 transition-colors hover:text-peach"
    >
      <span className="text-overlay0 group-hover:text-peach transition-colors">
        {"->"}
      </span>
      <span className="text-blue group-hover:text-peach transition-colors min-w-[100px]">
        {label}
      </span>
      <span className="text-overlay0 text-sm truncate hidden sm:inline">
        {url}
      </span>
    </a>
  );
}
