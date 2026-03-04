export type Skill = {
  name: string;
  icon: string;
  officialUrl: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps & Tools" | "Languages";
};

export const skillsList: Skill[] = [
  // Languages
  { name: "JavaScript", icon: "🟨", officialUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "Languages" },
  { name: "TypeScript", icon: "🔷", officialUrl: "https://www.typescriptlang.org", category: "Languages" },
  { name: "Python", icon: "🐍", officialUrl: "https://www.python.org", category: "Languages" },
  { name: "Java", icon: "☕", officialUrl: "https://dev.java", category: "Languages" },

  // Frontend
  { name: "React", icon: "⚛️", officialUrl: "https://react.dev", category: "Frontend" },
  { name: "Next.js", icon: "▲", officialUrl: "https://nextjs.org", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", officialUrl: "https://tailwindcss.com", category: "Frontend" },
  { name: "HTML", icon: "🌐", officialUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML", category: "Frontend" },
  { name: "CSS", icon: "🎭", officialUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", officialUrl: "https://nodejs.org", category: "Backend" },
  { name: "Express", icon: "🚂", officialUrl: "https://expressjs.com", category: "Backend" },
  { name: "FastAPI", icon: "⚡", officialUrl: "https://fastapi.tiangolo.com", category: "Backend" },

  // Database
  { name: "MongoDB", icon: "🍃", officialUrl: "https://www.mongodb.com", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", officialUrl: "https://www.postgresql.org", category: "Database" },
  { name: "Firebase", icon: "🔥", officialUrl: "https://firebase.google.com", category: "Database" },

  // DevOps & Tools
  { name: "Git", icon: "📦", officialUrl: "https://git-scm.com", category: "DevOps & Tools" },
  { name: "Docker", icon: "🐳", officialUrl: "https://www.docker.com", category: "DevOps & Tools" },
  { name: "VS Code", icon: "💻", officialUrl: "https://code.visualstudio.com", category: "DevOps & Tools" },
];
