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
      <Reveal as="section" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="font-heading text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
              Our Products
            </h1>
            <p className="text-base leading-8 text-gray-600">
              Browse our available flower arrangements for gifting, celebrations, and everyday moments.
            </p>
          </div>
        </div>
      </Reveal>

      <ProductsClient products={products} />
    </>
  );
}