"use client";

import { ProjectCard } from "@/components/project-card";
import { projectList } from "@/data/projects";
import { RiArrowLeftLine, RiCloseLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type Filter = "All" | "Live" | "In Progress";

export default function ProjectsPage() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const searchParams = useSearchParams();
  const router = useRouter();

  const techFilter = searchParams.get("tech");

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filteredProjects = projectList.filter((project) => {
    // Status filter
    const statusMatch =
      activeFilter === "All" ||
      (activeFilter === "Live" && project.isLive) ||
      (activeFilter === "In Progress" && !project.isLive);

    // Tech filter from query param
    const techMatch = techFilter
      ? project.tags.some(
        (tag) => tag.toLowerCase() === techFilter.toLowerCase()
      )
      : true;

    return statusMatch && techMatch;
  });

  const clearTechFilter = () => {
    router.push("/projects");
  };

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
        <h1 className="text-2xl font-bold tracking-tight">
          {techFilter ? `Projects Using ${techFilter}` : "All Projects"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {techFilter
            ? `Showing projects that use ${techFilter}.`
            : "A collection of things I\u0027ve built and worked on."}
        </p>
      </div>

      {/* Active tech filter pill */}
      {techFilter && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-muted-foreground">Filtered by:</span>
          <button
            onClick={clearTechFilter}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full
                       bg-foreground text-background cursor-pointer transition-opacity hover:opacity-80"
          >
            {techFilter}
            <RiCloseLine className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Status filter badges */}
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
            No projects match {techFilter ? `"${techFilter}"` : "this filter"}.
          </p>
          {techFilter && (
            <button
              onClick={clearTechFilter}
              className="mt-3 text-sm text-muted-foreground hover:text-foreground underline cursor-pointer transition-colors"
            >
              Clear tech filter
            </button>
          )}
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
