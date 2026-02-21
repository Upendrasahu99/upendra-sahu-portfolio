import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export const metadata: Metadata = {
  title: "Upendra Sahu",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* Fixed top-right day/night toggle */}
          <ThemeToggleButton />

          {/* Aceternity small grid background */}
          <div className="grid-bg min-h-screen w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
