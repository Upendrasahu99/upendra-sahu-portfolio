"use client";

import { RiMailSendLine } from "@remixicon/react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <hr className="my-4 border-neutral-200 dark:border-neutral-700" />

      <div className="flex flex-col items-center text-center py-8 gap-4">
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Let&apos;s build something together
        </h3>

        {/* Subtext */}
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Have a project in mind or just want to say hi? I&apos;m always open to
          discussing new ideas and opportunities.
        </p>

        {/* CTA Button */}
        <a
          href="mailto:upendrasahu99@gmail.com"
          className="group inline-flex items-center gap-2 mt-2 px-6 py-2.5
                     bg-neutral-900 dark:bg-neutral-100
                     text-white dark:text-neutral-900
                     text-sm font-medium rounded-full
                     hover:scale-105 hover:shadow-lg
                     active:scale-100
                     transition-all duration-200"
        >
          Get in Touch
          <RiMailSendLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
