"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function DotBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        backgroundColor: isDark ? "#000000" : "#ffffff",
        backgroundImage: isDark
          ? "radial-gradient(rgba(255,255,255,0.3) .5px, transparent 1px)"
          : "radial-gradient(rgba(0,0,0,0.3) .5px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    />
  );
}
