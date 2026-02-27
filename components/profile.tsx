"use client";

import { RiGithubFill, RiLinkedinFill, RiMailFill, RiTwitterXFill, RiYoutubeFill } from "@remixicon/react";
import { useEffect, useState } from "react";

const socials = [
  { icon: RiGithubFill, label: "GitHub", href: "#" },
  { icon: RiLinkedinFill, label: "LinkedIn", href: "#" },
  { icon: RiTwitterXFill, label: "Twitter", href: "#" },
  { icon: RiYoutubeFill, label: "YouTube", href: "#" },
  { icon: RiMailFill, label: "Email", href: "#" },
];

export const Profile = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        {/* Decorative ring */}
        <div className="absolute -inset-1.5 rounded-full border-2 border-dashed border-neutral-300 dark:border-neutral-600 animate-[spin_20s_linear_infinite]" />
        {/* Avatar circle */}
        <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-neutral-800 to-neutral-950 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center select-none shadow-lg">
          <span className="text-2xl font-bold tracking-wide text-white dark:text-neutral-900">
            US
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 text-center sm:text-left">
        {/* Name & role */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upendra Sahu</h1>
          <p className="text-sm font-medium text-muted-foreground mt-0.5 tracking-wide uppercase">
            Full Stack Developer
          </p>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
          Hi, I&apos;m Upendra — a software developer who turns ideas into
          working tech solutions. I focus on building minimal, functional apps
          that are easy for users to actually use. Always open to new
          opportunities to work, learn, and grow.
        </p>

        {/* Social icons */}
        <div className="flex gap-3 justify-center sm:justify-start mt-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center
                         text-muted-foreground hover:text-foreground hover:border-foreground
                         transition-all duration-200 hover:scale-110 hover:shadow-md"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
