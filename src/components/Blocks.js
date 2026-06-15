import { PortableText } from "@portabletext/react";

// ---- HERO ---------------------------------------------------------------
export function Hero({ businessName, tagline, image, ctaLabel = "View Menu", ctaHref = "#menu" }) {
  const bg = image || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80";
  return (
    <section
      id="home"
      style={{
        minHeight: "84vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(20,14,10,0.5), rgba(20,14,10,0.62)), url("${bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center", padding: "0 24px", maxWidth: 760 }}>
        <p style={{ textTransform: "uppercase", letterSpacing: "4px", fontSize: 13, opacity: 0.9, marginBottom: 18 }}>
          {tagline || "Fine dining, reimagined"}
        </p>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 92px)", fontWeight: 600, lineHeight: 1.02, marginBottom: 30, letterSpacing: "-0.5px" }}>
          {businessName || "The Copper Table"}
        </h1>
        <a href={ctaHref} className="btn">{ctaLabel}</a>
      </div>
    </section>
  );
}

// ---- CONTENT SECTION ----------------------------------------------------
export function ContentSection({ eyebrow, title, body, image, layout = "text-image", id }) {
  const centered = layout === "centered";
  const imageFirst = layout === "image-text";
  const img = image || "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80";

  if (centered) {
    return (
      <section id={id} style={{ padding: "96px 0" }}>
        <div className="container" style={{ maxWidth: 720, textAlign: "center", margin: "0 auto" }}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <SectionTitle>{title}</SectionTitle>}
          {body && <div style={{ color: "var(--muted)", fontSize: 17 }}><PortableText value={body} /></div>}
        </div>
      </section>
    );
  }

  const textCol = (
    <div key="text">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <SectionTitle>{title}</SectionTitle>}
      {body && <div style={{ color: "var(--muted)", fontSize: 17 }}><PortableText value={body} /></div>}
    </div>
  );
  const imageCol = (
    <div
      key="image"
      style={{
        minHeight: 420,
        borderRadius: 8,
        backgroundImage: `url("${img}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );

  return (
    <section id={id} style={{ padding: "96px 0" }}>
      <div
        className="container two-col"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
      >
        {imageFirst ? [imageCol, textCol] : [textCol, imageCol]}
      </div>
    </section>
  );
}

// ---- MENU ---------------------------------------------------------------
export function MenuSection({ items = [] }) {
  const fallback = [
    { _id: "1", name: "Seared Scallops", description: "Pea purée, crispy pancetta, lemon oil", price: "£14", category: "Starters" },
    { _id: "2", name: "Heritage Tomato", description: "Burrata, basil, aged balsamic", price: "£11", category: "Starters" },
    { _id: "3", name: "Dry-Aged Ribeye", description: "Triple-cooked chips, peppercorn sauce", price: "£32", category: "Mains" },
    { _id: "4", name: "Wild Mushroom Risotto", description: "Parmesan, truffle, micro herbs", price: "£21", category: "Mains" },
    { _id: "5", name: "Dark Chocolate Fondant", description: "Salted caramel ice cream", price: "£9", category: "Desserts" },
    { _id: "6", name: "Lemon Posset", description: "Shortbread, raspberry coulis", price: "£8", category: "Desserts" },
  ];
  const data = items.length > 0 ? items : fallback;
  const categories = [...new Set(data.map((i) => i.category))];

  return (
    <section id="menu" style={{ padding: "96px 0", background: "var(--surface)" }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Eyebrow center>Our Menu</Eyebrow>
          <SectionTitle>Made fresh, every day</SectionTitle>
        </div>
        {categories.map((cat) => (
          <div key={cat} style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 13, letterSpacing: "2px", textTransform: "uppercase", color: "var(--accent)", marginBottom: 22, borderBottom: "1px solid var(--line)", paddingBottom: 12, fontFamily: "var(--body)", fontWeight: 600 }}>
              {cat}
            </h3>
            {data.filter((i) => i.category === cat).map((item) => (
              <div key={item._id} style={{ display: "flex", justifyContent: "space-between", gap: 24, marginBottom: 20 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 18, color: "var(--primary)", fontFamily: "var(--display)" }}>{item.name}</div>
                  <div style={{ color: "var(--muted)", fontSize: 15 }}>{item.description}</div>
                </div>
                <div style={{ fontWeight: 700, color: "var(--accent)", whiteSpace: "nowrap", fontSize: 17 }}>{item.price}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- CONTACT ------------------------------------------------------------
export function Contact({ phone, email, address }) {
  return (
    <section id="contact" style={{ padding: "96px 0" }}>
      <div className="container" style={{ maxWidth: 640, textAlign: "center", margin: "0 auto" }}>
        <Eyebrow center>Visit Us</Eyebrow>
        <SectionTitle>Book a table</SectionTitle>
        <p style={{ color: "var(--muted)", fontSize: 17, marginBottom: 32 }}>
          {address || "12 Market Street, Manchester M1 1AA"}
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={`tel:${phone || "01610000000"}`} className="btn">Call {phone || "0161 000 0000"}</a>
          <a href={`mailto:${email || "hello@example.com"}`} className="btn btn-outline">Email Us</a>
        </div>
      </div>
    </section>
  );
}

// ---- FOOTER -------------------------------------------------------------
export function Footer({ businessName }) {
  return (
    <footer style={{ background: "var(--primary)", color: "rgba(255,255,255,0.7)", padding: "44px 0", textAlign: "center", fontSize: 14 }}>
      <div className="container">
        <p>© {new Date().getFullYear()} {businessName || "The Copper Table"}. All rights reserved.</p>
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.6 }}>Built with Next.js + Sanity — fully editable by you.</p>
      </div>
    </footer>
  );
}

// ---- small shared bits --------------------------------------------------
function Eyebrow({ children, center }) {
  return (
    <p style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: 12, color: "var(--accent)", marginBottom: 14, fontWeight: 600, textAlign: center ? "center" : "left" }}>
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontSize: "clamp(30px, 4.5vw, 48px)", fontWeight: 600, color: "var(--primary)", marginBottom: 22, letterSpacing: "-0.5px", lineHeight: 1.08 }}>
      {children}
    </h2>
  );
}
