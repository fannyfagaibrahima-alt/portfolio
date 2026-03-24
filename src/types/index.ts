export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 1-100
  icon?: string;
  created_at: string;
}

export type SkillCategory =
  | "offensive"
  | "defensive"
  | "networking"
  | "tools"
  | "programming"
  | "cloud"
  | "forensics"
  | "compliance";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image_url?: string;
  created_at: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  badge_url?: string;
  verify_link?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "ctf" | "bugbounty" | "education";
}
