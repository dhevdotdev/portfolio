import { SectionHeader } from "@/components/ui/section-header";
import { LinkRow } from "@/components/ui/link-row";
import type { Links as LinksType } from "@/lib/types";

export function LinksSection({ links }: { links: LinksType }) {
  return (
    <div>
      <SectionHeader command="curl -sL dhev.dev/links" id="links" />
      <div className="bg-mantle border border-surface0 rounded-md p-4">
        <p className="text-overlay0 text-xs mb-3 font-mono">
          HTTP/2 200 OK
        </p>
        <div>
          {links.items.map((item) => (
            <LinkRow key={item.label} label={item.label} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
