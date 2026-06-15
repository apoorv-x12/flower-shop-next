"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";

// Cute flower logo SVG
export function LogoFlower() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#fae8ec" stroke="#f0c4cc" strokeWidth="1.5"/>
      {/* Petals */}
      <ellipse cx="24" cy="10" rx="5" ry="9" fill="#e8a0ad"/>
      <ellipse cx="24" cy="38" rx="5" ry="9" fill="#e8a0ad"/>
      <ellipse cx="10" cy="24" rx="9" ry="5" fill="#e8a0ad"/>
      <ellipse cx="38" cy="24" rx="9" ry="5" fill="#e8a0ad"/>
      <ellipse cx="14" cy="14" rx="5" ry="9" fill="#f0c4cc" transform="rotate(45 14 14)"/>
      <ellipse cx="34" cy="14" rx="5" ry="9" fill="#f0c4cc" transform="rotate(-45 34 14)"/>
      <ellipse cx="14" cy="34" rx="5" ry="9" fill="#f0c4cc" transform="rotate(-45 14 34)"/>
      <ellipse cx="34" cy="34" rx="5" ry="9" fill="#f0c4cc" transform="rotate(45 34 34)"/>
      {/* Center */}
      <circle cx="24" cy="24" r="9" fill="#d4647a"/>
      <circle cx="24" cy="24" r="5.5" fill="#fae8ec"/>
      {/* Face */}
      <circle cx="21.5" cy="23" r="1.2" fill="#b84d63"/>
      <circle cx="26.5" cy="23" r="1.2" fill="#b84d63"/>
      <path d="M21.5 26.5 Q24 28.5 26.5 26.5" stroke="#b84d63" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
      <ellipse cx="19.5" cy="25.5" rx="1.8" ry="1.1" fill="#f0c4cc" opacity="0.7"/>
      <ellipse cx="28.5" cy="25.5" rx="1.8" ry="1.1" fill="#f0c4cc" opacity="0.7"/>
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>


      {/* Main header */}
      <header style={{
        background: "var(--white)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "var(--shadow-sm)",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px clamp(12px, 4vw, 20px)", gap: "clamp(6px, 2vw, 12px)" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 2vw, 10px)", textDecoration: "none", flexShrink: 1, minWidth: 0 }}>
            <div className="animate-float">
              <LogoFlower />
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1rem, 3vw, 1.3rem)", color: "var(--rose-dark)" }}>
                Blossom Hug
              </div>
              <div style={{ fontSize: "clamp(0.55rem, 2vw, 0.6rem)", color: "var(--mid-text)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Handcrafted Flowers
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ alignItems: "center", gap: "28px" }} className="hidden md:flex">
            {[["Home", "/"], ["Products", "/products"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={label} href={href} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--dark-text)",
                textDecoration: "none",
              }}
              className="hover:text-rose-600 transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA, Cart + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            
            {/* Cart Icon */}
            <button 
              onClick={() => setIsCartOpen(true)}
              style={{
                position: "relative",
                background: "var(--cream-2)",
                border: "1px solid var(--border-light)",
                borderRadius: "50%",
                width: "42px", height: "42px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              className="hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--rose-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {mounted && cartCount > 0 && (
                <span style={{
                  position: "absolute", top: "-4px", right: "-4px",
                  background: "var(--rose)", color: "white",
                  fontSize: "10px", fontWeight: "bold",
                  width: "18px", height: "18px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            <Link href="/products" style={{
              alignItems: "center",
              gap: "6px",
              background: "var(--rose)",
              color: "#ffffff",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              padding: "9px 20px",
              borderRadius: "999px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 3px 12px rgba(212,100,122,0.35)",
            }}
            className="hover:-translate-y-0.5 transition-transform hidden sm:inline-flex">
              Shop Now ✨
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "var(--dark-text)" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {open
                  ? <path d="M17 5L5 17M5 5l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div style={{ borderTop: "1px solid var(--border)", background: "var(--white)", padding: "16px 20px 20px" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[["Home", "/"], ["Products", "/products"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setOpen(false)}
                  style={{ color: "var(--dark-text)", fontWeight: 500, textDecoration: "none", fontSize: "1rem" }}>
                  {label}
                </Link>
              ))}
              <Link href="/products" onClick={() => setOpen(false)} style={{
                display: "block",
                textAlign: "center",
                background: "var(--rose)",
                color: "#ffffff",
                fontWeight: 600,
                padding: "11px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                marginTop: "6px",
                fontSize: "0.9rem",
              }}>
                Shop Now ✨
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}