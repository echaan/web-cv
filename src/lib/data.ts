// Data helper: imports and exposes JSON content
// Uses types from src/types/index.ts

import type {
  Profile,
  About,
  Education,
  Experience,
  Bootcamp,
  Project,
  Organization,
  Certification,
  SkillGroup,
} from '../types';

import profileData from '../data/profile.json';
import aboutData from '../data/about.json';
import educationData from '../data/education.json';
import experienceData from '../data/experience.json';
import bootcampsData from '../data/bootcamps.json';
import projectsData from '../data/projects.json';
import organizationsData from '../data/organizations.json';
import certificationsData from '../data/certifications.json';
import skillsData from '../data/skills.json';

// Single entities
export const profile: Profile = profileData;
export const about: About = aboutData;
export const education: Education = educationData;

// Arrays
export const experiences: Experience[] = experienceData;
export const bootcamps: Bootcamp[] = bootcampsData;
export const projects: Project[] = projectsData;
export const organizations: Organization[] = organizationsData;
export const certifications: Certification[] = certificationsData;
export const skills: SkillGroup[] = skillsData;

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
