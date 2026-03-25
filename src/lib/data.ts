import fs from "fs";
import path from "path";
import type {
  Identity,
  About,
  Experience,
  Education,
  Achievements,
  Skills,
  Links,
} from "./types";

function load<T>(filename: string): T {
  const filePath = path.join(process.cwd(), "data", filename);
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

export const getIdentity = () => load<Identity>("identity.json");
export const getAbout = () => load<About>("about.json");
export const getExperience = () => load<Experience>("experience.json");
export const getEducation = () => load<Education>("education.json");
export const getAchievements = () => load<Achievements>("achievements.json");
export const getSkills = () => load<Skills>("skills.json");
export const getLinks = () => load<Links>("links.json");
