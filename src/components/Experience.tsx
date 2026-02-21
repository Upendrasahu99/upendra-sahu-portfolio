import FadeIn from "@/components/FadeIn";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "TechVenture Pvt. Ltd.",
    period: "Jun 2024 – Present",
    description:
      "Built and maintained scalable web applications using React, Node.js, and PostgreSQL. Improved API response times by 40% through query optimization and caching strategies.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects · GitHub",
    period: "2023 – Present",
    description:
      "Contributed to several open source repositories, fixing bugs and adding features. Focused on improving documentation and test coverage for community projects.",
    tags: ["TypeScript", "Python", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance · Remote",
    period: "2022 – 2023",
    description:
      "Designed and developed responsive web interfaces for small businesses. Delivered 10+ projects ensuring pixel-perfect implementation from Figma designs.",
    tags: ["HTML/CSS", "JavaScript", "Figma"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <FadeIn>
        <h2 className="section-title">Experience</h2>
        <div className="space-y-4 mt-6">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-card">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-semibold text-base-content text-sm md:text-base">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-base-content/50 mt-0.5">{exp.company}</p>
                </div>
                <span className="exp-date">{exp.period}</span>
              </div>
              <p className="text-sm text-base-content/60 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
