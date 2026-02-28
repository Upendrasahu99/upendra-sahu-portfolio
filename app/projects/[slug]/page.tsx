"use client";

import { projectList } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  RiArrowLeftLine,
  RiGithubFill,
  RiExternalLinkLine,
} from "@remixicon/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectList.find((p) => p.slug === slug);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <p className="text-lg font-medium text-muted-foreground">
          Project not found.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <RiArrowLeftLine className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <RiArrowLeftLine className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Hero image */}
      <div className="relative overflow-hidden border border-neutral-200 dark:border-neutral-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover"
        />
      </div>

      {/* Links row: GitHub & Website */}
      <div className="flex items-center gap-3 mt-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200 hover:shadow-md basis-1/2"
        >
          <RiGithubFill className="w-4 h-4" />
          GitHub
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200 hover:shadow-md basis-1/2"
        >
          <RiExternalLinkLine className="w-4 h-4" />
          Website
        </a>
      </div>

      <hr className="my-5 border-neutral-200 dark:border-neutral-700" />

      {/* Project name + Status */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold tracking-tight">
          {project.title}
        </h1>
        <Badge
          className={`text-xs font-semibold ${project.isLive
              ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-100"
              : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 hover:bg-amber-100"
            }`}
        >
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${project.isLive
                ? "bg-green-500 animate-pulse"
                : "bg-amber-500"
              }`}
          />
          {project.isLive ? "Live" : "In Progress"}
        </Badge>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground mt-3 max-w-xl">
        {project.description}
      </p>

      <hr className="my-5 border-neutral-200 dark:border-neutral-700" />

      {/* Tech stack */}
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1.5 bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom spacer */}
      <div className="h-12" />
    </div>
  );
}
