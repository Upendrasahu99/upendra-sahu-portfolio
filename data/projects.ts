export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  isLive: boolean;
  tags: string[];
};

export const projectList: Project[] = [
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
