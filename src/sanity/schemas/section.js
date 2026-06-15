// A flexible content section. Most pages on a small-business site are just
// a stack of these: an about block, a "why choose us" block, a gallery intro.
// One schema covers them all, which keeps the editing experience simple for
// the client and the component count low for you.
export const section = {
  name: "section",
  title: "Page Section",
  type: "document",
  fields: [
    { name: "eyebrow", title: "Eyebrow (small label above title)", type: "string" },
    { name: "title", title: "Section Title", type: "string" },
    {
      name: "body",
      title: "Body Text",
      type: "array",
      of: [{ type: "block" }], // rich text the client edits like a Word doc
    },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Text left, image right", value: "text-image" },
          { title: "Image left, text right", value: "image-text" },
          { title: "Centred text only", value: "centered" },
        ],
        layout: "radio",
      },
      initialValue: "text-image",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers show first",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
  },
};
