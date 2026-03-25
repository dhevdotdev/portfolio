import { SectionHeader } from "@/components/ui/section-header";

export function FeaturedProjects() {
  return (
    <div>
      <SectionHeader command='find ~/projects -name "*.featured"' id="projects" />
      <p className="text-sm text-overlay0">find: no matches found. check back later.</p>
    </div>
  );
}
