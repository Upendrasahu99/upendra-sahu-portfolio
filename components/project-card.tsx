import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RiExternalLinkLine } from "@remixicon/react";
import type { Project } from "@/data/projects";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group relative overflow-hidden pt-0 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-neutral-200 dark:border-neutral-700">
      {/* Image with hover zoom */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

        {/* Status badge on image */}
        <div className="absolute top-3 right-3 z-10">
          <Badge
            className={`text-xs font-semibold shadow-sm ${project.isLive
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
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-base">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-0 mt-auto border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex w-full">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <RiExternalLinkLine className="w-4 h-4" />
            View
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
