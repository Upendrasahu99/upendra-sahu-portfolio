"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";
import { useEffect, useState } from "react";

const projectList = [
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, veniam.",
    image: "https://avatar.vercel.sh/shadcn1",
    link: "#",
    github: "#",
    isLive: false,
    tags: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "Project Name",
    description: "Project Description",
    image: "https://avatar.vercel.sh/shadcn2",
    link: "#",
    github: "#",
    isLive: false,
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Project Name",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "https://avatar.vercel.sh/shadcn3",
    link: "#",
    github: "#",
    isLive: true,
    tags: ["React", "Firebase"],
  },
  {
    title: "Project Name",
    description: "Project Description",
    image: "https://avatar.vercel.sh/shadcn4",
    link: "#",
    github: "#",
    isLive: true,
    tags: ["Python", "FastAPI"],
  },
];

const Project = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <hr className="my-4 border-neutral-200 dark:border-neutral-700" />
      <h3 className="font-bold text-lg tracking-tight">Projects</h3>
      <hr className="my-4 border-neutral-200 dark:border-neutral-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden pt-0 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-neutral-200 dark:border-neutral-700"
          >
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
                    className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${project.isLive ? "bg-green-500 animate-pulse" : "bg-amber-500"
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

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardHeader>

            <CardFooter className="p-0 mt-auto border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex w-full">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer border-r border-neutral-100 dark:border-neutral-800"
                >
                  <RiGithubFill className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <RiExternalLinkLine className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex py-8">
        <Button
          variant="outline"
          className="px-8 cursor-pointer text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default Project;