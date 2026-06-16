import { safeFetch } from "../../sanity/client";
import { siteQuery } from "../../sanity/queries";
import Header from "../../components/Header";
import {
  Hero,
  ContentSection,
  ServicesSection,
  TeamSection,
  TrustBar,
  Reviews,
  QuoteBanner,
  Contact,
  Footer,
} from "../../components/Blocks";

export const metadata = {
  title: "Clinic Demo — CMS Website Starter",
  description:
    "A demo dental & wellness clinic website built on Next.js + Sanity. Calm, professional, responsive and fully editable by the client.",
};

// Third live demo for the Fiverr gallery: a clinic / practitioner site.
// Same shared engine as the restaurant and trades demos — only content, the
// section mix (services + team + reviews + booking), and the theme change.
const clinicTheme = {
  "--primary": "#14463f",
  "--accent": "#2bb3a3",
  "--bg": "#f2f8f6",
  "--surface": "#ffffff",
  "--ink": "#2c3e3a",
  "--muted": "#6b827c",
  "--line": "rgba(20, 70, 63, 0.12)",
  "--display": '"Poppins", system-ui, sans-serif',
  background: "var(--bg)",
  minHeight: "100vh",
};

// Demo content (used when no Sanity project is connected).
const clinicServices = [
  { _id: "1", icon: "🦷", name: "Check-ups & Hygiene", description: "Routine examinations and professional cleaning to keep your smile healthy for life." },
  { _id: "2", icon: "✨", name: "Cosmetic Dentistry", description: "Veneers, bonding and smile makeovers tailored to look natural and feel like you." },
  { _id: "3", icon: "🦷", name: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth, placed in-house." },
  { _id: "4", icon: "😁", name: "Invisible Aligners", description: "Discreet teeth-straightening that fits around your life — no metal braces." },
  { _id: "5", icon: "🚑", name: "Emergency Care", description: "Same-day appointments for pain, breakages and urgent dental problems." },
  { _id: "6", icon: "💎", name: "Teeth Whitening", description: "Safe, dentist-led whitening for a brighter, more confident smile." },
];

const clinicReviews = [
  { _id: "1", quote: "I've always been nervous at the dentist and the whole team put me completely at ease. Painless and genuinely kind.", author: "Helen W., new patient" },
  { _id: "2", quote: "Booked an emergency appointment online and was seen the same morning. Professional, calm and reassuring throughout.", author: "Marcus T., Riverside" },
  { _id: "3", quote: "My aligners were explained clearly with no pressure. Three months in and my smile already looks fantastic.", author: "Priya S., Didsbury" },
];

export default async function ClinicDemo() {
  const data = await safeFetch(siteQuery, {}, { next: { revalidate: 60 } });

  const s = data?.settings || {};
  const cmsServices = data?.services || [];
  const businessName = s.businessName || "Riverside Dental & Wellness";
  const phone = s.phone || "0161 555 0188";

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div style={clinicTheme}>
      <Header businessName={businessName} links={nav} />

      <Hero
        businessName={businessName}
        tagline={s.tagline || "Gentle, modern dental care · Greater Manchester"}
        ctaLabel="Book an Appointment"
        ctaHref="#contact"
        background="linear-gradient(135deg, #0d3b39 0%, #155e54 60%, #1f8074 100%)"
        fallbackColor="#14463f"
      />

      <TrustBar
        items={["CQC Registered", "Same-Day Emergencies", "0% Finance Available", "Nervous Patients Welcome"]}
      />

      <ServicesSection
        items={cmsServices.length > 0 ? cmsServices : clinicServices}
        eyebrow="Our Treatments"
        title="Complete care, all in one place"
      />

      <ContentSection
        id="about"
        eyebrow="Why Riverside"
        title="Dentistry that actually feels calm"
        layout="text-image"
        image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1000&q=80"
        body={[
          {
            _type: "block",
            children: [
              {
                _type: "span",
                text:
                  "From the moment you arrive, everything is designed to put you at ease — unhurried appointments, clear explanations, and a team that genuinely listens. Modern technology, gentle hands, and honest advice with no pressure. Whether it's a routine check-up or a full smile makeover, you're in safe, caring hands.",
              },
            ],
          },
        ]}
      />

      <TeamSection eyebrow="Meet the Team" title="The people who'll care for your smile" />

      <Reviews
        items={clinicReviews}
        eyebrow="Patient Reviews"
        title="Loved by patients across Manchester"
      />

      <QuoteBanner
        phone={phone}
        headline="Ready to book your visit?"
        sub="New patients always welcome — same-day emergency appointments available."
      />

      <Contact
        phone={phone}
        email={s.email || "hello@riversidedental.co.uk"}
        address={s.address || "8 Riverside Walk, Manchester M3 4EN"}
        eyebrow="Get In Touch"
        title="Book an appointment"
        callLabel={`Call ${phone}`}
      />

      <Footer businessName={businessName} />
    </div>
  );
}
