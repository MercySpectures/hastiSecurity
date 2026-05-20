/** Featured images for solutions mega-menu (public/menuFeatured). */
export const menuFeaturedImages: Record<string, string> = {
  "electronic-safety-security": "/menuFeatured/security.jfif",
  "cctv-security-camera": "/menuFeatured/cctv.jfif",
  "solar-energy": "/menuFeatured/solar.jfif",
  nextview: "/menuFeatured/display.jfif",
};

export function menuFeaturedSrc(slug: string) {
  return menuFeaturedImages[slug] ?? menuFeaturedImages["electronic-safety-security"];
}
