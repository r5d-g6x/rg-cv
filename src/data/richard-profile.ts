import decathlonLogo from '../assets/decathlon.png';
import sgcibLogo from '../assets/sgcib.png';
import { ProfileData } from './profile';

export const profileDataFr: ProfileData = {
  name: "Richard Guilloux",
  title: "Ingénieur Fullstack Senior | Java · Kotlin · React · IA",
  subtitle: "Cloud-native · LLM Agents · RAG · GCP",
  email: "richard.guilloux@gmail.com",
  location: "Paris et périphérie",
  linkedin: "https://www.linkedin.com/in/richardguilloux-4859a012",

  summary:
    "Ingénieur Fullstack senior avec près de 20 ans d'expérience, spécialisé dans l'écosystème Java/Kotlin (Spring Boot) et les architectures cloud-native sur GCP. " +
    "Acteur de la transformation IA chez Decathlon : conception d'un assistant IA basé sur des agents Gemini, RAG et prompt engineering via le Google ADK. " +
    "Utilisateur quotidien des outils IA de développement (GitHub Copilot, Claude Code, Cursor) pour accélérer la conception, la revue de code et la livraison. " +
    "Je cherche à mettre ces compétences au service d'une équipe ambitieuse où l'IA est un levier central de productivité.",

  experiences: [
    {
      title: "Développeur Fullstack Senior — IA & Cloud",
      company: "Decathlon France",
      period: "Juin 2023 – Présent",
      description:
        "Mission IA (en cours) : Conception et développement d'un assistant IA pour les collaborateurs de magasins (directeurs, responsables de rayons). Chatbot conversationnel basé sur des agents Gemini via le Google ADK, enrichi par un RAG alimenté de documents internes. PoC validé (Python / React), outil cible en développement avec un backend Kotlin / Spring Boot + Spring Modulith déployé sur GKE. Rôles : prompt engineering, architecture agent, développement backend.\n\nMission Diagnostics (2 ans) : Conception et développement full-cycle d'une application web interne de gestion de diagnostics (Nuxt 3 · Spring Boot 3 · Docker · Cloud Run GCP).",
      technologies: ["Kotlin", "Spring Boot", "Spring Modulith", "Python", "React", "Nuxt 3", "Gemini", "Google ADK", "RAG", "Prompt Engineering", "GKE", "Cloud Run", "GCP", "Docker"],
      logo: decathlonLogo,
      url: "https://www.decathlon.fr",
    },
    {
      title: "Ingénieur Fullstack Java / Angular",
      company: "BNP Paribas",
      period: "Octobre 2020 – Juin 2023",
      description:
        "Développement fullstack sur Connexis Cash, plateforme internationale de gestion de trésorerie. Conception de nouvelles fonctionnalités, maintenance évolutive et intégration de flux de données temps réel.",
      technologies: ["Java 8", "Angular 9", "TypeScript", "Spring Boot", "Elastic Search", "Oracle", "ActiveMQ", "Jenkins"],
    },
    {
      title: "Ingénieur Fullstack Java / Angular",
      company: "Exane",
      period: "Janvier 2017 – Octobre 2020",
      description:
        "Développement fullstack sur les projets YOSHI et GALAHAD/Excalibur, solutions financières pour la gestion de portefeuilles et l'analyse de marché.",
      technologies: ["Java 8", "Angular", "TypeScript", "Spring Boot", "Oracle", "REST"],
    },
    {
      title: "Ingénieur Java / J2EE",
      company: "BNP Paribas CIB · SGCIB",
      period: "2005 – 2017",
      description:
        "12 ans de développement Java/J2EE dans les domaines de la finance de marché et de la banque d'investissement (SGCIB, BNP Paribas CIB). Projets successifs : outils de trading, gestion de prêts structurés, applications de middle-office.",
      technologies: ["Java", "J2EE", "Spring", "Hibernate", "Oracle", "Maven", "Jenkins"],
      logo: sgcibLogo,
    },
  ],

  education: [
    {
      degree: "Diplôme d'Ingénieur — Grade de Master",
      school: "ESIEA — École Supérieure d'Informatique, Électronique et Automatique",
      period: "2002 – 2005",
      description: "Spécialisation Informatique.",
    },
  ],

  skills: {
    technical: [
      { description: "LLMs · Agents IA · RAG · Prompt Engineering · Google ADK", level: "expérience projet" },
      { description: "Java · Kotlin · Spring Boot · Spring Modulith", level: "senior" },
      { description: "TypeScript · React · Vue.js / Nuxt", level: "confirmé" },
      { description: "Python", level: "confirmé" },
      { description: "SQL / NoSQL · Elastic Search", level: "confirmé" },
    ],
    aiTools: ["GitHub Copilot", "Claude Code", "Cursor", "ChatGPT", "Gemini"],
    tools: ["Docker", "Kubernetes", "GCP (Cloud Run · GKE)", "CI/CD", "Git", "Jenkins", "Maven"],
    soft: ["Leadership technique", "Autonomie", "Communication", "Esprit analytique", "Adaptabilité"],
  },

  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Professionnel" },
  ],

  projects: [],
  interests: [],
};

export const profileDataEn: ProfileData = {
  name: "Richard Guilloux",
  title: "Senior Fullstack Engineer | Java · Kotlin · React · AI",
  subtitle: "Cloud-native · LLM Agents · RAG · GCP",
  email: "richard.guilloux@gmail.com",
  location: "Paris area, France",
  linkedin: "https://www.linkedin.com/in/richardguilloux-4859a012",

  summary:
    "Senior Fullstack Engineer with nearly 20 years of experience, specializing in the Java/Kotlin (Spring Boot) ecosystem and cloud-native architectures on GCP. " +
    "Active AI contributor at Decathlon: design and development of an AI assistant based on Gemini agents, RAG, and prompt engineering (Google ADK). " +
    "Daily user of AI development tools (GitHub Copilot, Claude Code, Cursor) to accelerate design, code review, and delivery. " +
    "Looking to bring these skills to an ambitious team where AI is a core productivity lever.",

  experiences: [
    {
      title: "Senior Fullstack Engineer — AI & Cloud",
      company: "Decathlon France",
      period: "June 2023 – Present",
      description:
        "AI Mission (ongoing): Design and development of an AI assistant for store teams (store managers, department heads). Conversational chatbot using Gemini agents via Google ADK, enhanced with RAG fed by internal documents for contextual answers. PoC validated (Python / React), target product in development with a Kotlin / Spring Boot + Spring Modulith backend deployed on GKE. Roles: prompt engineering, agent architecture, backend development.\n\nDiagnostics Mission (2 years): Full-cycle design and development of an internal web application for diagnostics management (Nuxt 3 · Spring Boot 3 · Docker · Cloud Run GCP).",
      technologies: ["Kotlin", "Spring Boot", "Spring Modulith", "Python", "React", "Nuxt 3", "Gemini", "Google ADK", "RAG", "Prompt Engineering", "GKE", "Cloud Run", "GCP", "Docker"],
      logo: decathlonLogo,
      url: "https://www.decathlon.fr",
    },
    {
      title: "Fullstack Java / Angular Engineer",
      company: "BNP Paribas",
      period: "October 2020 – June 2023",
      description:
        "Fullstack development on Connexis Cash, an international cash management platform. Feature development, maintenance, and real-time data flow integration.",
      technologies: ["Java 8", "Angular 9", "TypeScript", "Spring Boot", "Elastic Search", "Oracle", "ActiveMQ", "Jenkins"],
    },
    {
      title: "Fullstack Java / Angular Engineer",
      company: "Exane",
      period: "January 2017 – October 2020",
      description:
        "Fullstack development on YOSHI and GALAHAD/Excalibur projects, financial solutions for portfolio management and market analysis.",
      technologies: ["Java 8", "Angular", "TypeScript", "Spring Boot", "Oracle", "REST"],
    },
    {
      title: "Java / J2EE Software Engineer",
      company: "BNP Paribas CIB · SGCIB",
      period: "2005 – 2017",
      description:
        "12 years of Java/J2EE development in capital markets and investment banking (SGCIB, BNP Paribas CIB). Successive projects: trading tools, structured loan management, middle-office applications.",
      technologies: ["Java", "J2EE", "Spring", "Hibernate", "Oracle", "Maven", "Jenkins"],
      logo: sgcibLogo,
    },
  ],

  education: [
    {
      degree: "Engineering Degree — Master's Level",
      school: "ESIEA — École Supérieure d'Informatique, Électronique et Automatique",
      period: "2002 – 2005",
      description: "Computer Science specialization.",
    },
  ],

  skills: {
    technical: [
      { description: "LLMs · AI Agents · RAG · Prompt Engineering · Google ADK", level: "project experience" },
      { description: "Java · Kotlin · Spring Boot · Spring Modulith", level: "senior" },
      { description: "TypeScript · React · Vue.js / Nuxt", level: "proficient" },
      { description: "Python", level: "proficient" },
      { description: "SQL / NoSQL · Elastic Search", level: "proficient" },
    ],
    aiTools: ["GitHub Copilot", "Claude Code", "Cursor", "ChatGPT", "Gemini"],
    tools: ["Docker", "Kubernetes", "GCP (Cloud Run · GKE)", "CI/CD", "Git", "Jenkins", "Maven"],
    soft: ["Technical Leadership", "Autonomy", "Communication", "Analytical Mindset", "Adaptability"],
  },

  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Professional" },
  ],

  projects: [],
  interests: [],
};
