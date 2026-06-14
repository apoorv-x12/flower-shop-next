"use client";

import React from "react";
import { useCart } from "./CartContext";

export default function AddToCartDetailButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        background: "var(--cream-2)", color: "var(--rose-dark)",
        border: "1px solid var(--rose-dark)",
        fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1rem",
        padding: "14px 32px", borderRadius: "999px",
        cursor: "pointer", transition: "all 0.3s ease",
      }}
      className="hover:bg-[var(--rose-dark)] hover:text-white"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
      Add to Cart
    </button>
  );
}
