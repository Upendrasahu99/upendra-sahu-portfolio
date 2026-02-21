import type { Metadata } from "next";
import "./globals.css";

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
        {/* ── Aceternity UI Dot Background ── */}
        <div className="dot-bg min-h-screen w-full relative">
          {/* Radial gradient fade overlay */}
          <div className="dot-mask pointer-events-none fixed inset-0 z-0" />

          {/* Page content sits above the overlay */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
