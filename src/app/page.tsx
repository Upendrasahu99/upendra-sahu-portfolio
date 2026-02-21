"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px 0",
      }}
    >
      {/* Centered section — 50% width, 25% margin each side */}
      <section
        style={{
          width: "50%",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "32px",
          background: "var(--surface)",
          backdropFilter: "blur(12px)",
          color: "var(--text)",
        }}
      >
        {/* Profile Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>

          {/* Avatar */}
        
          {/* Name + Profession */}
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.2,
              }}
            >
              Upendra Sahu
            </h1>
            <p
              style={{
                margin: "6px 0 0",
                fontSize: "14px",
                color: "var(--text-muted)",
              }}
            >
              Full Stack Developer
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
