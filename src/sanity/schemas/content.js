// Niche-specific content types. You enable only the ones a given template
// needs in schema/index.js. The restaurant demo uses menuItem; a trades or
// clinic build would use 'service' instead. Same engine, different switches.

export const menuItem = {
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    { name: "name", title: "Dish Name", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 2 },
    { name: "price", title: "Price", type: "string", description: "e.g. £12.50" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Starters", "Mains", "Desserts", "Drinks", "Sides"],
      },
    },
    { name: "order", title: "Display Order", type: "number" },
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
  },
};

export const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "name", title: "Service Name", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 3 },
    {
      name: "icon",
      title: "Icon (emoji or short label)",
      type: "string",
      description: "e.g. 🔧 or 🦷 — a simple visual marker",
    },
    { name: "order", title: "Display Order", type: "number" },
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
};
