"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function ProductsClient({ products }) {
  const [searchText, setSearchText] = useState("");

  const filteredProducts = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) {
      return products;
    }

    return products.filter((product) =>
      product.name.toLowerCase().includes(query),
    );
  }, [products, searchText]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-6 flex justify-center">
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search products..."
            className="w-full max-w-md rounded-lg border border-gray-200 px-4 py-2 text-base text-gray-900 outline-none transition duration-300 ease-out focus:border-pink-400"
            aria-label="Search products"
          />
        </Reveal>

        {filteredProducts.length === 0 ? (
          <Reveal className="rounded-xl border border-gray-200 bg-white p-6 text-center text-base text-gray-600 shadow-sm">
            No products matched your search.
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 100}>
                <ProductCard
                  product={product}
                  href={`/products/${product.id}`}
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}