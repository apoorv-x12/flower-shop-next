"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";

export default function TrendyProductsClient({ products }) {
  const tabs = ["Flower Pots", "Keychains", "Customized"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // For now, keep 3 items and repeat in all categories
  const filteredProducts = products.slice(0, 3);

  return (
    <>
      {/* Filter tabs */}
      <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "6px 16px",
                borderRadius: "999px",
                border: isActive ? "none" : "1px solid var(--border)",
                background: isActive ? "var(--rose)" : "transparent",
                color: isActive ? "#ffffff" : "var(--mid-text)",
                fontSize: "0.82rem",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.3s ease",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="responsive-grid-3">
        {filteredProducts.map((product, index) => (
          <Reveal key={product.id} delay={index * 80}>
            <ProductCard product={product} href={`/products/${product.id}`} />
          </Reveal>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 0", color: "var(--mid-text)", fontFamily: "'DM Sans', sans-serif" }}>
          No products found in this category.
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "36px" }}>
        <Link href="/products" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          border: "2px solid var(--rose)", color: "var(--rose)",
          fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
          padding: "10px 28px", borderRadius: "999px", textDecoration: "none", fontSize: "0.88rem",
          transition: "all 0.3s ease",
        }}>
          View All Products →
        </Link>
      </div>
    </>
  );
}
