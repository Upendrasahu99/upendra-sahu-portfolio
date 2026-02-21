import FadeIn from "@/components/FadeIn";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Python", "Java", "REST APIs", "GraphQL"],
  },
  {
    label: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL", "AWS", "Vercel"],
  },
  {
    label: "Tools & Others",
    skills: ["Git", "GitHub", "Docker", "Linux", "Figma", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <FadeIn>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="mt-6 space-y-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs uppercase tracking-widest text-base-content/35 mb-3 font-medium">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
