export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  url?: string;
  urls?: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  school: string;
  period?: string;
  description?: string;
  logo?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface TechnicalSkill {
  description: string;
  level: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  location: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  photo?: string;
  skills: {
    technical: TechnicalSkill[];
    aiTools?: string[];
    tools: string[];
    soft: string[];
  };
  languages: {
    name: string;
    level: string;
  }[];
  projects: Project[];
  interests: string[];
}

