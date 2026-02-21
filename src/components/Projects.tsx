import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    title: "CodeCollab",
    description:
      "Real-time collaborative code editor with syntax highlighting, live cursor tracking, and integrated chat for remote pair programming sessions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React", "Socket.IO", "Node.js", "Monaco"],
    href: "#",
  },
  {
    title: "ShopStream",
    description:
      "A modern e-commerce platform with AI-powered product recommendations, inventory management, and real-time order tracking.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    href: "#",
  },
  {
    title: "TaskFlow",
    description:
      "A Kanban-style project management tool with drag-and-drop, team collaboration features, deadline reminders, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tags: ["React", "Express", "MongoDB", "Redis"],
    href: "#",
  },
  {
    title: "DevMetrics",
    description:
      "Developer productivity dashboard aggregating GitHub activity, WakaTime coding stats, and CI/CD pipeline health metrics.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["Next.js", "TypeScript", "GitHub API", "Tailwind"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <FadeIn>
        <h2 className="section-title">Projects</h2>
        <div className="grid gap-5 mt-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
            >
              <div className="project-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="project-img"
                />
                <div className="project-overlay">
                  <span className="text-xs text-white font-medium tracking-wide">
                    View Project →
                  </span>
                </div>
              </div>
              <div className="px-5 pb-5 pt-4">
                <h3 className="font-semibold text-base-content group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-base-content/55 mt-1.5 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
