// Shared header. Reused on every template — only the businessName changes,
// pulled from the CMS. Sticky, responsive, no client-side JS needed.

export default function Header({ businessName = "Your Business", links = [] }) {
  const nav =
    links.length > 0
      ? links
      : [
          { label: "Home", href: "#home" },
          { label: "Menu", href: "#menu" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <a
          href="#home"
          style={{
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "0.5px",
            color: "var(--primary)",
          }}
        >
          {businessName}
        </a>
        <nav className="nav-links" style={{ display: "flex", gap: 28 }}>
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: 15, color: "var(--ink)", fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
