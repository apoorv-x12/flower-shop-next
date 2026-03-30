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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex justify-center">
          <div className="w-full max-w-md">
            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="🔍 Search flowers..."
              className="w-full rounded-full border-2 border-gray-200 bg-gray-50 px-6 py-3.5 text-base text-gray-900 outline-none transition duration-300 ease-out focus:border-[#c4617e] focus:bg-white focus:shadow-lg"
              aria-label="Search products"
            />
          </div>
        </Reveal>

        {filteredProducts.length === 0 ? (
          <Reveal className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-12 text-center">
            <p className="text-lg text-gray-600">No flowers matched your search.</p>
            <p className="mt-2 text-sm text-gray-500">Try searching with different keywords</p>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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