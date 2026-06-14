"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function ProductCard({ product, href }) {
  const cardContent = (
    <>
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "10px", background: "var(--cream-2)" }}>
        {/* Blurred backdrop */}
        <Image
          src={product.image}
          alt="Backdrop"
          width={64}
          height={64}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(20px)", transform: "scale(1.2)", opacity: 0.4 }}
        />
        {/* Main image */}
        <Image
          src={product.image}
          alt={product.alt}
          width={640}
          height={384}
          className="group-hover:scale-105"
          style={{ position: "relative", width: "100%", height: "200px", objectFit: "contain", transition: "transform 0.45s ease", display: "block", zIndex: 1 }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(42,30,26,0.25), transparent)",
          opacity: 0, transition: "opacity 0.3s ease",
        }} className="group-hover:opacity-100"/>
      </div>

      {/* Info */}
      <div style={{ padding: "12px 2px 4px" }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--dark-text)",
          marginBottom: "5px",
          lineHeight: 1.3,
        }}>
          {product.name}
        </h3>
        <p style={{
          fontSize: "0.8rem",
          color: "var(--mid-text)",
          lineHeight: 1.5,
          marginBottom: "10px",
        }}>
          {product.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--rose)",
          }}>
            {/* Replace $ with ₹ */}
            {String(product.price).replace("$", "₹")}
          </span>

          <AddToCartButton product={product} />
        </div>
      </div>
    </>
  );

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    background: "var(--white)",
    border: "1px solid var(--border)",
    borderRadius: "14px",
    padding: "10px",
    boxShadow: "var(--shadow-sm)",
    textDecoration: "none",
    color: "inherit",
    height: "100%",
  };

  if (href) {
    return (
      <Link href={href} className="group card-hover" style={cardStyle}>
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="group card-hover" style={cardStyle}>
      {cardContent}
    </article>
  );
}

// Client component wrapper for the button inside the server component (if needed)
function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault(); // Stop Link navigation
    e.stopPropagation(); // Stop bubbling
    addToCart(product);
  };

  return (
    <button
      onClick={handleAdd}
      style={{
        background: "var(--cream-2)", border: "1px solid var(--border-light)",
        borderRadius: "50%", width: "32px", height: "32px",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", color: "var(--rose-dark)",
        transition: "all 0.2s"
      }}
      className="hover:bg-rose hover:text-white"
      title="Add to Cart"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
  );
}