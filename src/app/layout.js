import "../styles/globals.css";
import { safeFetch } from "../sanity/client";
import { siteQuery } from "../sanity/queries";

export const metadata = {
  title: "Restaurant Demo — CMS Website Starter",
  description:
    "A demo restaurant website built on Next.js + Sanity. Fully editable, fast, responsive.",
};

export default async function RootLayout({ children }) {
  // Pull the theme colours from the CMS and inject them as CSS variables.
  // Falls back to the defaults in globals.css if the project isn't connected
  // yet, so the demo always renders even before Sanity is wired up.
  const data = await safeFetch(siteQuery);
  const primary = data?.settings?.primaryColor || null;
  const accent = data?.settings?.accentColor || null;

  const themeStyle =
    primary || accent
      ? `:root{${primary ? `--primary:${primary};` : ""}${
          accent ? `--accent:${accent};` : ""
        }}`
      : "";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {themeStyle && <style dangerouslySetInnerHTML={{ __html: themeStyle }} />}
      </head>
      <body>{children}</body>
    </html>
  );
}
