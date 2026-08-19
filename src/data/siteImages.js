// Centralized image configuration.
//
// Replace any of these values with local paths (e.g. "/images/hero.jpg" placed
// in /public/images/) or with your own hosted URLs. Every component reads
// images from this file only — nothing is hardcoded in JSX — so swapping the
// whole visual identity of the site is a matter of editing this one file.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const siteImages = {
  // Hero collage — floating product composition
  heroTshirt: unsplash("photo-1521572163474-6864f9cf17ab", 900),
  heroTote: unsplash("photo-1591561954557-26941169b49e", 900),
  heroCap: unsplash("photo-1521369909029-2afed882baee", 900),
  heroBottle: unsplash("photo-1602143407151-7111542de6e8", 900),
  heroBadge: unsplash("photo-1622560480605-d83c853bc5c3", 900),

  // Trust / event imagery
  event: unsplash("photo-1540575467063-178a50c2df87", 1600),
  gifting: unsplash("photo-1549465220-1a8b9238cd48", 1600),
  apparel: unsplash("photo-1489987707025-afc232f7ea0f", 1600),
  packaging: unsplash("photo-1607344645866-009c320b63e0", 1600),

  // Merchandise showcase grid
  productTshirt: unsplash("photo-1503341504253-dff4815485f1", 900),
  productHoodie: unsplash("photo-1556821840-3a63f95609a7", 900),
  productCap: unsplash("photo-1588850561407-ed78c282e89b", 900),
  productTote: unsplash("photo-1591561954557-26941169b49e", 900),
  productLanyard: unsplash("photo-1622560480605-d83c853bc5c3", 900),
  productNotebook: unsplash("photo-1531346878377-a5be20888e57", 900),
  productBottle: unsplash("photo-1602143407151-7111542de6e8", 900),
  productMug: unsplash("photo-1514228742587-6b1558fcca3d", 900),
  productSticker: unsplash("photo-1618004652321-13a63e576b80", 900),
  productGiftBox: unsplash("photo-1549465220-1a8b9238cd48", 900),

  // Case studies
  projectOne: unsplash("photo-1540575467063-178a50c2df87", 1400),
  projectTwo: unsplash("photo-1556761175-5973dc0f32e7", 1400),
  projectThree: unsplash("photo-1511578314322-379afb476865", 1400),
};
