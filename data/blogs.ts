export type Blog = {
  title: string;
  date: string; // e.g. "28 Feb, 2026"
  tags: string[];
  url: string;
};

export const blogList: Blog[] = [
  {
    title: "Understanding React Server Components",
    date: "25 Feb, 2026",
    tags: ["React", "Next.js"],
    url: "#",
  },
  {
    title: "Building REST APIs with Node.js and Express",
    date: "10 Jan, 2026",
    tags: ["Node.js", "Backend"],
    url: "#",
  },
  {
    title: "A Beginner's Guide to TypeScript",
    date: "18 Dec, 2025",
    tags: ["TypeScript"],
    url: "#",
  },
];
