import { Suspense } from "react";
import {
  getIdentity,
  getAbout,
  getExperience,
  getEducation,
  getAchievements,
  getSkills,
  getLinks,
} from "@/lib/data";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionWrapper } from "@/components/layout/section-wrapper";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Achievements } from "@/components/sections/achievements";
import { Skills } from "@/components/sections/skills";
import { LinksSection } from "@/components/sections/links-section";
import { Resume } from "@/components/sections/resume";
import { GithubActivity } from "@/components/sections/github-activity";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { FeaturedBlog } from "@/components/sections/featured-blog";

export default function Home() {
  const identity = getIdentity();
  const about = getAbout();
  const experience = getExperience();
  const education = getEducation();
  const achievements = getAchievements();
  const skills = getSkills();
  const links = getLinks();

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6">
        <Hero identity={identity} />

        <SectionWrapper id="about">
          <About about={about} />
        </SectionWrapper>

        <SectionWrapper id="experience">
          <Experience experience={experience} />
        </SectionWrapper>

        <SectionWrapper>
          <Education education={education} />
        </SectionWrapper>

        <SectionWrapper id="achievements">
          <Achievements achievements={achievements} />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills skills={skills} />
        </SectionWrapper>

        <SectionWrapper id="links">
          <LinksSection links={links} />
        </SectionWrapper>

        <SectionWrapper id="resume">
          <Resume />
        </SectionWrapper>

        <SectionWrapper>
          <Suspense fallback={<p className="text-sm text-overlay0">fetching repos...</p>}>
            <GithubActivity />
          </Suspense>
        </SectionWrapper>

        <SectionWrapper>
          <FeaturedProjects />
        </SectionWrapper>

        <SectionWrapper>
          <FeaturedBlog />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
