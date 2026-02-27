"use client";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projectList } from "@/data/projects";
import { useEffect, useState } from "react";
import Link from "next/link";

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
        {projectList.slice(0, 4).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="flex py-8">
        <Link href="/projects">
          <Button
            variant="outline"
            className="px-8 cursor-pointer text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;