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
          ? "radial-gradient(rgba(255,255,255,0.8) .5px, transparent .5px)"
          : "radial-gradient(rgba(0,0,0,0.8) .5px, transparent .5px)",
        backgroundSize: "10px 10px",
      }}
    />
  );
}
