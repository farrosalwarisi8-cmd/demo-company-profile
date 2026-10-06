import { portfolioItems } from "./portfolio";
import type { GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = portfolioItems.flatMap((p) =>
  p.gallery.map((image, i) => ({
    id: `${p.slug}-${i}`,
    image,
    alt: `${p.title} — foto ${i + 1}`,
    title: p.title,
    location: p.location,
    category: p.category,
    projectSlug: p.slug,
  }))
);