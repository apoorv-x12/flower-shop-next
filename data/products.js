const publicBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  process.env.NEXT_BASE_PATH ||
  (process.env.NODE_ENV === "production" ? "/flower-shop-next" : "");

export const products = [
  {
    id: "blush-garden-bouquet",
    name: "Blush Garden Bouquet",
    description:
      "Soft pink peonies, roses, and ranunculus arranged for birthdays and thank-you gifts.",
    price: "$48",
    image: `${publicBasePath}/pink-rose.jpg`,
    alt: "Pink bouquet wrapped in cream paper with layered flowers",
  },
  {
    id: "morning-meadow-vase",
    name: "Morning Meadow Vase",
    description:
      "A fresh mix of tulips, wildflowers, and eucalyptus for bright everyday delivery.",
    price: "$56",
    image: `${publicBasePath}/sunflower-group.jpg`,
    alt: "Glass vase with pastel flowers and green stems",
  },
  {
    id: "evening-romance-stem-box",
    name: "Evening Romance Stem Box",
    description:
      "Elegant roses and lisianthus styled in a keepsake box for anniversaries and events.",
    price: "$72",
    image: `${publicBasePath}/bouquet-pink-rose.jpg`,
    alt: "Pink floral arrangement displayed in a decorative gift box",
  },
  {
    id: "spring-table-centerpiece",
    name: "Spring Table Centerpiece",
    description:
      "Layered seasonal blooms in a low vase designed for dinners, showers, and hosting.",
    price: "$64",
    image: `${publicBasePath}/sunflower-group.jpg`,
    alt: "Low floral centerpiece with mixed pastel flowers and greenery",
  },
  {
    id: "sweetheart-rose-bundle",
    name: "Sweetheart Rose Bundle",
    description:
      "A hand-tied dozen rose bundle with soft foliage for anniversaries and romantic gifting.",
    price: "$52",
    image: `${publicBasePath}/rose.jpg`,
    alt: "Rose bundle with pink flowers tied in decorative wrap",
  },
  {
    id: "celebration-bloom-box",
    name: "Celebration Bloom Box",
    description:
      "A premium floral box with bold pink stems and textured accents for milestone moments.",
    price: "$78",
    image: `${publicBasePath}/bouqet-pink.jpg`,
    alt: "Decorative flower box with pink blossoms arranged tightly together",
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}