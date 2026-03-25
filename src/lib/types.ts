export interface Identity {
  name: string;
  handle: string;
  domain: string;
  location: string;
  email: string;
  title: string;
  tagline: string;
}

export interface About {
  paragraphs: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  description: string;
}

export interface Experience {
  items: ExperienceItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  cgpa: string;
  start: string;
  end: string;
}

export interface Education {
  items: EducationItem[];
}

export interface AchievementItem {
  type: "publication" | "award";
  title: string;
  venue: string;
  url?: string;
}

export interface Achievements {
  items: AchievementItem[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Skills {
  groups: SkillGroup[];
}

export interface LinkItem {
  label: string;
  url: string;
  icon: string;
}

export interface Links {
  items: LinkItem[];
}