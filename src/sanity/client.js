import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// These come from environment variables so each cloned site
// points at its own Sanity project. Set them in .env.local and in Vercel.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-07-01";

// Only build a real client when a project ID exists. Before you connect a
// client's Sanity project, this stays null and the pages fall back to the
// built-in demo content — so the site always builds and deploys cleanly,
// which is what lets you ship screenshots before wiring up any CMS.
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

// Helper: turn a Sanity image reference into a usable URL (no-op if unconfigured).
export function urlFor(source) {
  return builder ? builder.image(source) : "";
}

// Safe fetch wrapper: returns null instead of throwing when unconfigured.
export async function safeFetch(query, params = {}, options = {}) {
  if (!client) return null;
  try {
    return await client.fetch(query, params, options);
  } catch {
    return null;
  }
}
