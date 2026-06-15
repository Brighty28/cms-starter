import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

// This config powers the Studio — the dashboard your client logs into to
// edit their own content. Run `npm run studio` locally, or deploy it to
// a hosted URL with `npm run studio:deploy` and hand the client the link.
export default defineConfig({
  name: "default",
  title: "Website Content Manager",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
