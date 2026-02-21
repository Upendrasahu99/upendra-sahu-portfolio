"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#skills", label: "Skills" },
  ];

  const closeMenu = () => setMenuOpen(false);
  const isDark = theme === "dark";

  return (
    <>
      <nav
        style={{
          borderBottomColor: "var(--border)",
          backgroundColor: "var(--surface)",
          color: "var(--text)",
        }}
        className={`fixed top-0 z-50 w-full px-6 md:px-16 py-4 backdrop-blur border-b transition-all duration-300 ${scrolled ? "shadow-lg" : ""
          }`}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="#hero"
            className="text-lg font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            upendra<span style={{ color: "var(--primary)" }}>.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => {
              const id = link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm transition-colors"
                  style={{
                    color:
                      activeSection === id
                        ? "var(--text)"
                        : "var(--text-muted)",
                    fontWeight: activeSection === id ? 500 : 400,
                  }}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Theme toggle button — desktop */}
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            <button
              className="btn-ghost p-2 rounded-full transition-colors"
              style={{ color: "var(--text)" }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 backdrop-blur-md flex flex-col items-center justify-center gap-10"
          style={{ backgroundColor: "var(--surface)" }}
          onClick={(e) => e.target === e.currentTarget && closeMenu()}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full transition-colors"
            style={{ color: "var(--text)" }}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-light transition-colors hover:opacity-100"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

/* ── Animated Sun / Moon button ─────────── */
function ThemeToggle({
  isDark,
  toggle,
}: {
  isDark: boolean;
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--border)",
        background: "transparent",
        cursor: "pointer",
        color: "var(--text)",
        transition: "all 0.2s ease",
      }}
      className="hover:opacity-70"
    >
      {isDark ? (
        /* Sun icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        /* Moon icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
