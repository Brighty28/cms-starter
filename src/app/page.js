import { safeFetch } from "../sanity/client";
import { siteQuery } from "../sanity/queries";
import Header from "../components/Header";
import { Hero, ContentSection, MenuSection, Contact, Footer } from "../components/Blocks";

// The home page assembles the shared blocks. Content comes from Sanity when
// connected; otherwise rich fallbacks render so the demo always looks complete
// (which matters — this is what you screenshot for the Fiverr gallery).
export default async function Home() {
  const data = await safeFetch(siteQuery, {}, { next: { revalidate: 60 } });

  const s = data?.settings || {};
  const sections = data?.sections || [];
  const menu = data?.menu || [];

  return (
    <>
      <Header businessName={s.businessName || "The Copper Table"} />

      <Hero
        businessName={s.businessName}
        tagline={s.tagline}
        image={s.heroImage}
      />

      {/* About — uses the first CMS section if present, else a styled fallback */}
      {sections[0] ? (
        <ContentSection
          id="about"
          eyebrow={sections[0].eyebrow}
          title={sections[0].title}
          body={sections[0].body}
          image={sections[0].image}
          layout={sections[0].layout}
        />
      ) : (
        <ContentSection
          id="about"
          eyebrow="Our Story"
          title="A neighbourhood favourite since 2009"
          layout="text-image"
          body={[
            {
              _type: "block",
              children: [
                {
                  _type: "span",
                  text:
                    "We pair seasonal British ingredients with a relaxed, warm atmosphere. Every dish is made in-house, every day, by a team that genuinely loves what they do.",
                },
              ],
            },
          ]}
        />
      )}

      <MenuSection items={menu} />

      <ContentSection
        id="experience"
        eyebrow="The Experience"
        title="More than a meal"
        layout="image-text"
        body={[
          {
            _type: "block",
            children: [
              {
                _type: "span",
                text:
                  "Private dining, seasonal tasting menus, and a carefully chosen wine list. Whatever the occasion, we'll make it memorable.",
              },
            ],
          },
        ]}
      />

      <Contact phone={s.phone} email={s.email} address={s.address} />
      <Footer businessName={s.businessName} />
    </>
  );
}
