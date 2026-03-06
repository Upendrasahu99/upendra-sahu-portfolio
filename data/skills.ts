import { type ComponentType } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiVscodium,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  officialUrl: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps & Tools" | "Languages";
};

export const skillsList: Skill[] = [
  // Languages
  { name: "JavaScript", icon: SiJavascript, officialUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "Languages" },
  { name: "TypeScript", icon: SiTypescript, officialUrl: "https://www.typescriptlang.org", category: "Languages" },
  { name: "Python", icon: SiPython, officialUrl: "https://www.python.org", category: "Languages" },
  { name: "Java", icon: SiOpenjdk, officialUrl: "https://dev.java", category: "Languages" },

  // Frontend
  { name: "React", icon: SiReact, officialUrl: "https://react.dev", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, officialUrl: "https://nextjs.org", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, officialUrl: "https://tailwindcss.com", category: "Frontend" },
  { name: "HTML", icon: SiHtml5, officialUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML", category: "Frontend" },
  { name: "CSS", icon: SiCss, officialUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, officialUrl: "https://nodejs.org", category: "Backend" },
  { name: "Express", icon: SiExpress, officialUrl: "https://expressjs.com", category: "Backend" },
  { name: "FastAPI", icon: SiFastapi, officialUrl: "https://fastapi.tiangolo.com", category: "Backend" },

  // Database
  { name: "MongoDB", icon: SiMongodb, officialUrl: "https://www.mongodb.com", category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, officialUrl: "https://www.postgresql.org", category: "Database" },
  { name: "Firebase", icon: SiFirebase, officialUrl: "https://firebase.google.com", category: "Database" },

  // DevOps & Tools
  { name: "Git", icon: SiGit, officialUrl: "https://git-scm.com", category: "DevOps & Tools" },
  { name: "Docker", icon: SiDocker, officialUrl: "https://www.docker.com", category: "DevOps & Tools" },
  { name: "VS Code", icon: SiVscodium, officialUrl: "https://code.visualstudio.com", category: "DevOps & Tools" },
];
