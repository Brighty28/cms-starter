import { siteSettings } from "./siteSettings";
import { section } from "./section";
import { menuItem, service } from "./content";

// Register every content type here. When you clone for a non-restaurant
// template, you can comment out menuItem and uncomment whatever that niche
// needs — the front-end already handles a missing type gracefully.
export const schemaTypes = [
  siteSettings,
  section,
  menuItem,
  service,
];
