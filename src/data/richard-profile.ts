import decathlonLogo from '../assets/decathlon.png';
import sgcibLogo from '../assets/sgcib.png';
import bnpLogo from '../assets/bnpparibas.png';
import exaneLogo from '../assets/exane.jpg';
import profilePhoto from '../assets/rg-profile.jpg';
import { ProfileData } from './profile';

export const profileDataFr: ProfileData = {
  name: "Richard Guilloux",
  title: "Ingénieur Fullstack Senior | Java/Kotlin Spring Boot · AI Augmented",
  subtitle: "Architecte du back, explorateur de l'IA.",
  email: "richard.guilloux@gmail.com",
  location: "Paris et périphérie",
  linkedin: "https://www.linkedin.com/in/richard-guilloux-4859a012/",
  photo: profilePhoto,

  summary:
    "Ingénieur logiciel senior, spécialisé en backend Java/Kotlin avec Spring Boot, et disposant d'une expérience concrète sur des environnements cloud-native GCP (Cloud Run, GKE).\n\n" +
    "Profil fullstack, avec une pratique opérationnelle du frontend (Angular, Vue/Nuxt, React) ainsi que des pipelines CI/CD.\n\n" +
    "Première expérience en architectures IA acquise chez Decathlon : conception et mise en production d'un agent conversationnel via Google ADK — architecture agentique réelle (pas un simple chatbot) : l'agent interroge et modifie une base de données en temps réel via function calling, avec RAG sur Vertex AI / Gemini.\n\n" +
    "Utilisateur quotidien d'outils d'IA pour le développement tels que GitHub Copilot et Claude Code, dans une logique d'optimisation de la productivité.\n\n" +
    "À la recherche d'un poste fullstack où l'intégration pragmatique de l'IA constitue un vrai atout.",

  experiences: [
    {
      title: "Développeur Fullstack Senior — IA & Cloud",
      company: "Decathlon France",
      period: "Juin 2023 – Présent",
      description:
        "Mission IA (en cours) : Développement du Manager's Companion, plateforme qui unifie les outils internes Decathlon dans une interface unique, complétée par un agent conversationnel orchestré via Google ADK — architecture agentique réelle (pas un simple chatbot) : l'agent interroge et modifie une base de données en temps réel via function calling, avec RAG sur Vertex AI / Gemini. Je participe principalement sur le backend : Kotlin / Spring Boot 4 + Spring Modulith (architecture BFF) sur GKE. Sécurisation OAuth2/JWT (Resource Server), observabilité OpenTelemetry + Prometheus, tests Kotest + Testcontainers. Frontend Nx monorepo : React 19, TanStack Router/Query, génération client API via Orval (OpenAPI), Vitamin Design System.\n\nMission Diagnostics (2 ans) : Conception et développement full-cycle d'une application web interne de gestion de diagnostics (Nuxt 3 · Spring Boot 3 · Docker · Cloud Run GCP).",
      techStacks: [
        { label: "Back", items: ["Kotlin", "Java 25", "Spring Boot 4", "Spring Modulith", "PostgreSQL", "Flyway", "OAuth2/JWT", "OpenTelemetry", "Prometheus", "Kotest", "Testcontainers"] },
        { label: "Front", items: ["React 19", "Nx", "TanStack Router", "TanStack Query", "Orval", "Nuxt 3", "Vitamin Design System", "Tailwind CSS"] },
        { label: "IA", items: ["Google ADK", "Vertex AI", "Gemini", "RAG", "Function Calling", "Prompt Engineering"] },
        { label: "Infra", items: ["GKE", "Cloud Run", "GCP", "Docker", "GitHub Actions"] },
      ],
      logo: decathlonLogo,
      url: "https://www.decathlon.fr",
    },
    {
      title: "Ingénieur Fullstack Java / Angular",
      company: "BNP Paribas",
      period: "Octobre 2020 – Juin 2023",
      description:
        "Participation aux évolutions d'une plateforme de cash management pour entreprises (Connexis Cash), construite sur une architecture microservices, traitant des flux de paiement critiques (SEPA/SWIFT) avec des enjeux élevés de fiabilité, sécurité et volumétrie.",
      technologies: ["Java", "Angular", "TypeScript", "Spring Boot", "Oracle", "ActiveMQ", "Jenkins"],
      logo: bnpLogo,
    },
    {
      title: "Ingénieur Fullstack Java / Angular",
      company: "Exane",
      period: "Janvier 2017 – Octobre 2020",
      description:
        "Participation à la création d'un OMS MIFID II (YOSHI) pour la gestion des ordres et transactions Front-to-Back en environnement trading : développement de microservices REST Java/Spring, intégration de systèmes de trading et contribution à des workflows transactionnels.\n\nParticipation aux évolutions des plateformes GALAHAD et Excalibur, solution de trading multi-actifs couvrant le front, post-trade et middle-office : développement et maintenance d'applications Java (Core Java, Swing), contribution à une architecture modulaire OSGi, collaboration avec les équipes métier.",
      technologies: ["Java", "Angular", "TypeScript", "Spring Boot", "Elastic Search", "Oracle", "REST"],
      logo: exaneLogo,
    },
    {
      title: "Ingénieur Java / J2EE",
      company: "BNP Paribas CIB · SGCIB",
      period: "2005 – 2017",
      description:
        "12 ans de développement Java/J2EE dans les domaines de la finance de marché et de la banque d'investissement (SGCIB, BNP Paribas CIB). Projets successifs : outils de trading, gestion de prêts structurés, applications de middle-office.",
      technologies: ["Java", "J2EE", "Spring", "Hibernate", "Oracle", "Maven", "Jenkins"],
      logos: [bnpLogo, sgcibLogo],
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
      { description: "LLMs · Agents IA · RAG · Prompt Engineering · Google ADK · Vertex AI", level: "expérience projet" },
      { description: "Java 25 · Kotlin · Spring Boot 4 · Spring Modulith · Flyway · OAuth2/JWT", level: "senior" },
      { description: "TypeScript · React 19 · TanStack Router/Query · Vue.js / Nuxt · Angular · Nx", level: "opérationnel" },
      { description: "SQL · Oracle · PostgreSQL · Elastic Search", level: "confirmé" },
    ],
    aiTools: ["GitHub Copilot", "Claude Code", "ChatGPT", "Gemini"],
    tools: ["Docker", "Kubernetes", "GCP (Cloud Run · GKE)", "GitHub Actions", "OpenTelemetry", "Prometheus", "Git", "Jenkins", "Maven"],
    soft: ["Leadership technique", "Autonomie", "Communication", "Esprit analytique", "Adaptabilité"],
  },

  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Professionnel" },
  ],

  projects: [],
  interests: [
    "Veille IA & automatisation : agents IA, connecteurs MCP, n8n, workflows d'automatisation",
  ],
};

export const profileDataEn: ProfileData = {
  name: "Richard Guilloux",
  title: "Senior Fullstack Engineer | Java/Kotlin Spring Boot · AI Augmented",
  subtitle: "Backend architect, AI explorer.",
  email: "richard.guilloux@gmail.com",
  location: "Paris area, France",
  linkedin: "https://www.linkedin.com/in/richard-guilloux-4859a012/",
  photo: profilePhoto,

  summary:
    "Senior Software Engineer, specialized in Java/Kotlin backend with Spring Boot, with concrete experience in cloud-native GCP environments (Cloud Run, GKE).\n\n" +
    "Fullstack profile, with operational practice in frontend development (Angular, Vue/Nuxt, React) and CI/CD pipelines.\n\n" +
    "First experience in AI architectures gained at Decathlon: design and production deployment of a conversational agent via Google ADK — genuine agentic architecture (not just a chatbot): the agent queries and modifies a database in real time via function calling, with RAG on Vertex AI / Gemini.\n\n" +
    "Daily user of AI development tools such as GitHub Copilot and Claude Code, with a focus on productivity optimization.\n\n" +
    "Looking for a fullstack role where the pragmatic integration of AI is a genuine asset.",

  experiences: [
    {
      title: "Senior Fullstack Engineer — AI & Cloud",
      company: "Decathlon France",
      period: "June 2023 – Present",
      description:
        "AI Mission (ongoing): Development of Manager's Companion, a platform that unifies Decathlon's internal tools in a single interface, complemented by a conversational agent orchestrated via Google ADK — genuine agentic architecture (not just a chatbot): the agent queries and modifies a database in real time via function calling, with RAG on Vertex AI / Gemini. Primarily involved on the backend: Kotlin / Spring Boot 4 + Spring Modulith (BFF architecture) on GKE. OAuth2/JWT security (Resource Server), OpenTelemetry + Prometheus observability, Kotest + Testcontainers testing. Nx monorepo frontend: React 19, TanStack Router/Query, API client generation via Orval (OpenAPI), Vitamin Design System.\n\nDiagnostics Mission (2 years): Full-cycle design and development of an internal web application for diagnostics management (Nuxt 3 · Spring Boot 3 · Docker · Cloud Run GCP).",
      techStacks: [
        { label: "Back", items: ["Kotlin", "Java 25", "Spring Boot 4", "Spring Modulith", "PostgreSQL", "Flyway", "OAuth2/JWT", "OpenTelemetry", "Prometheus", "Kotest", "Testcontainers"] },
        { label: "Front", items: ["React 19", "Nx", "TanStack Router", "TanStack Query", "Orval", "Nuxt 3", "Vitamin Design System", "Tailwind CSS"] },
        { label: "AI", items: ["Google ADK", "Vertex AI", "Gemini", "RAG", "Function Calling", "Prompt Engineering"] },
        { label: "Infra", items: ["GKE", "Cloud Run", "GCP", "Docker", "GitHub Actions"] },
      ],
      logo: decathlonLogo,
      url: "https://www.decathlon.fr",
    },
    {
      title: "Fullstack Java / Angular Engineer",
      company: "BNP Paribas",
      period: "October 2020 – June 2023",
      description:
        "Participation in the evolution of an enterprise cash management platform (Connexis Cash), built on a microservices architecture, handling critical payment flows (SEPA/SWIFT) with high requirements in terms of reliability, security, and throughput.",
      technologies: ["Java", "Angular", "TypeScript", "Spring Boot", "Oracle", "ActiveMQ", "Jenkins"],
      logo: bnpLogo,
    },
    {
      title: "Fullstack Java / Angular Engineer",
      company: "Exane",
      period: "January 2017 – October 2020",
      description:
        "Participation in the creation of a MIFID II OMS (YOSHI) for Front-to-Back order and transaction management in a trading environment: development of REST microservices in Java/Spring, integration of trading systems and contribution to transactional workflows.\n\nParticipation in the evolution of the GALAHAD and Excalibur platforms, a multi-asset trading solution covering front, post-trade and middle-office: development and maintenance of Java applications (Core Java, Swing), contribution to a modular OSGi architecture, collaboration with business teams.",
      technologies: ["Java", "Angular", "TypeScript", "Spring Boot", "Elastic Search", "Oracle", "REST"],
      logo: exaneLogo,
    },
    {
      title: "Java / J2EE Software Engineer",
      company: "BNP Paribas CIB · SGCIB",
      period: "2005 – 2017",
      description:
        "12 years of Java/J2EE development in capital markets and investment banking (SGCIB, BNP Paribas CIB). Successive projects: trading tools, structured loan management, middle-office applications.",
      technologies: ["Java", "J2EE", "Spring", "Hibernate", "Oracle", "Maven", "Jenkins"],
      logos: [bnpLogo, sgcibLogo],
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
      { description: "LLMs · AI Agents · RAG · Prompt Engineering · Google ADK · Vertex AI", level: "project experience" },
      { description: "Java 25 · Kotlin · Spring Boot 4 · Spring Modulith · Flyway · OAuth2/JWT", level: "senior" },
      { description: "TypeScript · React 19 · TanStack Router/Query · Vue.js / Nuxt · Angular · Nx", level: "operational" },
      { description: "SQL · Oracle · PostgreSQL · Elastic Search", level: "proficient" },
    ],
    aiTools: ["GitHub Copilot", "Claude Code", "ChatGPT", "Gemini"],
    tools: ["Docker", "Kubernetes", "GCP (Cloud Run · GKE)", "GitHub Actions", "OpenTelemetry", "Prometheus", "Git", "Jenkins", "Maven"],
    soft: ["Technical Leadership", "Autonomy", "Communication", "Analytical Mindset", "Adaptability"],
  },

  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Professional" },
  ],

  projects: [],
  interests: [
    "AI & automation: AI agents, MCP connectors, n8n, automation workflows",
  ],
};
