import FadeIn from "@/components/FadeIn";

const blogs = [
  {
    title: "Building Scalable REST APIs with Node.js and Express",
    summary:
      "A deep dive into best practices for structuring your Express app, handling errors gracefully, validating inputs, and writing clean, maintainable API code.",
    date: "Jan 12, 2025",
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "Understanding React's Reconciliation Algorithm",
    summary:
      "How React's diffing algorithm works under the hood, why the virtual DOM matters, and practical tips to optimize re-renders in your applications.",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    href: "#",
  },
  {
    title: "Docker for Developers: From Zero to Production",
    summary:
      "A practical guide to containerizing your Node.js and React apps with Docker, writing clean Dockerfiles, and setting up docker-compose for local development.",
    date: "Sep 5, 2024",
    readTime: "10 min read",
    href: "#",
  },
  {
    title: "JWT Authentication with TypeScript and Node.js",
    summary:
      "Implementing secure JWT-based auth from scratch — access tokens, refresh tokens, httpOnly cookies, token rotation, and protecting routes properly.",
    date: "Jul 19, 2024",
    readTime: "7 min read",
    href: "#",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-base-content/30 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function Blogs() {
  return (
    <section id="blogs">
      <FadeIn>
        <h2 className="section-title">Blogs</h2>
        <div className="space-y-3 mt-6">
          {blogs.map((b, i) => (
            <a key={i} href={b.href} target="_blank" rel="noopener noreferrer" className="blog-card group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-base-content group-hover:text-primary transition-colors text-sm md:text-base leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-sm text-base-content/50 mt-1.5 leading-relaxed line-clamp-2">
                    {b.summary}
                  </p>
                  <span className="text-xs text-base-content/30 mt-2 inline-block">
                    {b.date} · {b.readTime}
                  </span>
                </div>
                <ArrowIcon />
              </div>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
