import { SectionHeader } from "@/components/ui/section-header";
import { TimelineItem } from "@/components/ui/timeline-item";
import type { Experience as ExperienceType } from "@/lib/types";

export function Experience({ experience }: { experience: ExperienceType }) {
  return (
    <div>
      <SectionHeader command="git log --oneline" id="experience" />
      <div className="space-y-0">
        {experience.items.map((item) => (
          <TimelineItem
            key={item.company}
            title={`${item.company} — ${item.location}`}
            subtitle={item.role}
            dateRange={`${item.start} – ${item.end}`}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
