"use client";

import { blogList } from "@/data/blogs";
import { RiArrowRightUpLine } from "@remixicon/react";
import { useEffect, useState } from "react";

const Blog = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <hr className="my-4 border-neutral-200 dark:border-neutral-700" />
      <h3 className="font-bold text-lg tracking-tight">Blog</h3>
      <hr className="my-4 border-neutral-200 dark:border-neutral-700" />

      <div className="flex flex-col">
        {blogList.map((blog, index) => (
          <a
            key={index}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 py-3 border-b border-neutral-100 dark:border-neutral-800 last:border-b-0 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 -mx-2 px-2 transition-colors"
          >
            {/* Title + arrow — full width, wraps naturally */}
            <span className="text-sm font-medium group-hover:text-foreground transition-colors flex items-start gap-1">
              <span className="leading-snug">{blog.title}</span>
              <RiArrowRightUpLine className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-muted-foreground" />
            </span>

            {/* Date + Tags — second line */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground">
                {blog.date}
              </span>
              <span className="text-neutral-300 dark:text-neutral-600 text-xs">•</span>
              <div className="flex gap-1.5 flex-wrap">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
