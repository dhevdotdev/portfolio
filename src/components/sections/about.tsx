import { SectionHeader } from "@/components/ui/section-header";
import type { About as AboutType } from "@/lib/types";

export function About({ about }: { about: AboutType }) {
  return (
    <div>
      <SectionHeader command="cat README.md" id="about" />
      <div className="bg-mantle border border-surface0 rounded-md p-5">
        <div className="space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-subtext0 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
