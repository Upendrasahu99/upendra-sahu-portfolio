"use client";

import { ProjectCard } from "@/components/project-card";
import { projectList } from "@/data/projects";
import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Filter = "All" | "Live" | "In Progress";

export default function ProjectsPage() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filteredProjects = projectList.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Live") return project.isLive;
    if (activeFilter === "In Progress") return !project.isLive;
    return true;
  });

  const filters: Filter[] = ["All", "Live", "In Progress"];

  return (
    <div
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      {/* Back link + Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <RiArrowLeftLine className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">All Projects</h1>
        <p className="text-sm text-muted-foreground mt-1">
          A collection of things I&apos;ve built and worked on.
        </p>
      </div>

      {/* Filter badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${activeFilter === filter
                ? "bg-foreground text-background border-foreground"
                : "border-neutral-200 dark:border-neutral-700 text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-sm text-muted-foreground">
            No projects match this filter.
          </p>
        </div>
      )}

      {/* Footer note */}
      <div className="text-center py-10">
        <p className="text-sm text-muted-foreground">
          More projects coming soon...
        </p>
      </div>
    </div>
  );
}
