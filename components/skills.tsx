"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { skillsList, type Skill } from "@/data/skills";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiExternalLinkLine, RiFolder3Line } from "@remixicon/react";

const categoryOrder = ["Languages", "Frontend", "Backend", "Database", "DevOps & Tools"] as const;

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  // Group skills by category
  const grouped = categoryOrder.reduce<Record<string, Skill[]>>((acc, cat) => {
    const items = skillsList.filter((s) => s.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <div
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <hr className="my-4 border-neutral-200 dark:border-neutral-700" />
      <h3 className="font-bold text-lg tracking-tight">Skills & Technologies</h3>
      <hr className="my-4 border-neutral-200 dark:border-neutral-700" />

      <div className="flex flex-col gap-5">
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillBadge = ({ skill }: { skill: Skill }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium
                     border border-neutral-200 dark:border-neutral-700 rounded-full
                     text-foreground/80 hover:text-foreground
                     hover:border-foreground hover:shadow-md
                     hover:scale-105 active:scale-95
                     transition-all duration-200 cursor-pointer
                     bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
        >
          <span className="text-base leading-none">{skill.icon}</span>
          <span>{skill.name}</span>
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="w-52 p-0 overflow-hidden"
        sideOffset={8}
      >
        {/* Header */}
        <div className="px-3 py-2.5 border-b border-neutral-100 dark:border-neutral-800">
          <p className="text-sm font-semibold flex items-center gap-1.5">
            <span className="text-base">{skill.icon}</span>
            {skill.name}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col">
          <a
            href={skill.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-muted-foreground
                       hover:text-foreground hover:bg-neutral-50 dark:hover:bg-neutral-800/60
                       transition-colors"
          >
            <RiExternalLinkLine className="w-4 h-4 shrink-0" />
            <span>Official Page</span>
          </a>

          <Link
            href={`/projects?tech=${encodeURIComponent(skill.name)}`}
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-muted-foreground
                       hover:text-foreground hover:bg-neutral-50 dark:hover:bg-neutral-800/60
                       transition-colors"
          >
            <RiFolder3Line className="w-4 h-4 shrink-0" />
            <span>Projects Using This</span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Skills;
