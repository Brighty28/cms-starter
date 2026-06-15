// Site settings: the global, edit-once content + theme controls.
// Giving the client control of primaryColor/accentColor here is what lets
// you re-theme a cloned template without touching code.
export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Only one of these should ever exist.
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: "businessName", title: "Business Name", type: "string" },
    { name: "tagline", title: "Tagline / Short Description", type: "string" },
    { name: "logo", title: "Logo", type: "image" },
    {
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "phone", title: "Phone Number", type: "string" },
    { name: "email", title: "Email Address", type: "string" },
    { name: "address", title: "Address", type: "text", rows: 2 },
    {
      name: "primaryColor",
      title: "Primary Brand Colour (hex)",
      type: "string",
      description: "e.g. #1a1a2e — used for headings and key elements",
    },
    {
      name: "accentColor",
      title: "Accent Colour (hex)",
      type: "string",
      description: "e.g. #e8b04b — used for buttons and highlights",
    },
    {
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "twitter", title: "Twitter / X URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
      ],
    },
  ],
  preview: {
    select: { title: "businessName" },
    prepare: ({ title }) => ({ title: title || "Site Settings" }),
  },
};
