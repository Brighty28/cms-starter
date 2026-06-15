import { safeFetch } from "../../sanity/client";
import { siteQuery } from "../../sanity/queries";
import Header from "../../components/Header";
import {
  Hero,
  ContentSection,
  ServicesSection,
  TrustBar,
  Reviews,
  QuoteBanner,
  Contact,
  Footer,
} from "../../components/Blocks";

export const metadata = {
  title: "Tradesperson Demo — CMS Website Starter",
  description:
    "A demo plumbing & heating website built on Next.js + Sanity. Fast, responsive and fully editable by the client.",
};

// Second live demo for the Fiverr gallery: a local-service / tradesperson site.
// Same shared components and CMS shape as the restaurant demo — only the
// content, the section mix, and the theme change. The theme is applied by
// scoping CSS variables to a wrapper, so this route looks like a completely
// different brand without affecting the restaurant demo.
const tradesTheme = {
  "--primary": "#102a43",
  "--accent": "#f59e0b",
  "--bg": "#f4f7fb",
  "--surface": "#ffffff",
  "--ink": "#243b53",
  "--muted": "#627d98",
  "--line": "rgba(16, 42, 67, 0.12)",
  "--display": '"Barlow Semi Condensed", system-ui, sans-serif',
  background: "var(--bg)",
  minHeight: "100vh",
};

export default async function TradesDemo() {
  const data = await safeFetch(siteQuery, {}, { next: { revalidate: 60 } });

  const s = data?.settings || {};
  const services = data?.services || [];
  const businessName = s.businessName || "Sterling Plumbing & Heating";
  const phone = s.phone || "0161 555 0142";

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div style={tradesTheme}>
      <Header businessName={businessName} links={nav} />

      <Hero
        businessName={businessName}
        tagline={s.tagline || "Gas Safe plumbing & heating · Greater Manchester"}
        ctaLabel="Get a Free Quote"
        ctaHref="#contact"
        background="linear-gradient(135deg, #0b2236 0%, #16395c 55%, #1f4e79 100%)"
        fallbackColor="#102a43"
      />

      <TrustBar />

      <ServicesSection
        items={services}
        eyebrow="What We Do"
        title="Plumbing & heating, done right"
      />

      <ContentSection
        id="about"
        eyebrow="Why Choose Us"
        title="20 years on the tools, not a call centre"
        layout="image-text"
        image="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1000&q=80"
        body={[
          {
            _type: "block",
            children: [
              {
                _type: "span",
                text:
                  "You deal with the same time-served engineer from quote to clean-up. We turn up when we say we will, protect your home while we work, and leave it spotless. Every job is backed by a 12-month workmanship guarantee and a price agreed up front — no surprises.",
              },
            ],
          },
        ]}
      />

      <Reviews />

      <QuoteBanner phone={phone} />

      <Contact
        phone={phone}
        email={s.email || "hello@sterlingheating.co.uk"}
        address={s.address || "Serving Manchester, Stockport, Trafford & surrounding areas"}
        eyebrow="Get In Touch"
        title="Get a free quote"
        callLabel={`Call ${phone}`}
      />

      <Footer businessName={businessName} />
    </div>
  );
}
