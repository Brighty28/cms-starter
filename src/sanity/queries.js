import { groq } from "next-sanity";

// One query that pulls the whole site's editable content in a single request.
// Every template reads from this same shape, so the front-end components
// never change between a restaurant build and a clinic build — only the
// content and theme do. That's what makes the starter reusable.
export const siteQuery = groq`{
  "settings": *[_type == "siteSettings"][0]{
    businessName,
    tagline,
    logo,
    phone,
    email,
    address,
    "heroImage": heroImage.asset->url,
    primaryColor,
    accentColor,
    socials
  },
  "sections": *[_type == "section"] | order(order asc){
    _id,
    title,
    eyebrow,
    body,
    "image": image.asset->url,
    layout,
    order
  },
  "menu": *[_type == "menuItem"] | order(order asc){
    _id,
    name,
    description,
    price,
    category,
    order
  },
  "services": *[_type == "service"] | order(order asc){
    _id,
    name,
    description,
    "icon": icon
  }
}`;
