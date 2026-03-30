import { products } from "@/data/products";
import ProductsClient from "@/components/ProductsClient";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Products | Petal & Stem",
  description:
    "Browse floral arrangements for gifting, celebrations, and everyday moments.",
};

export default function ProductsPage() {
  return (
    <>
      <Reveal as="section" className="bg-gradient-to-br from-white via-gray-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#c4617e]">
              Our Collection
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Handcrafted Floral Arrangements
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              Discover our carefully curated collection of fresh, beautiful floral arrangements for every occasion. Each bouquet is expertly designed by our talented florists.
            </p>
          </div>
        </div>
      </Reveal>

      <ProductsClient products={products} />
    </>
  );
}