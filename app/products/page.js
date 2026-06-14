import { products } from "@/data/products";
import ProductsClient from "@/components/ProductsClient";
import Reveal from "@/components/Reveal";
import { Swirl, Sparkle } from "@/components/CuteSVGs";
import EnhancedSVGShowcase from "@/components/EnhancedSVGShowcase";

export const metadata = {
  title: "Our Products | Bloom Craft",
  description:
    "Browse floral arrangements for gifting, celebrations, and everyday moments.",
};

export default function ProductsPage() {
  return (
    <>
      <Reveal as="section" style={{ background: "var(--cream)", padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            {/* Left Column: Text */}
            <div style={{ textAlign: "left", maxWidth: "600px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "8px", marginBottom: "14px" }}>
                <Sparkle size={18} color="#d4647a" />
                <span className="pill">
                  Our Collection
                </span>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, margin: "0 0 20px", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
                Handcrafted Floral Arrangements
                <Swirl size={35} color="#e8a0ad" />
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "var(--mid-text)", lineHeight: 1.75 }}>
                Discover our carefully curated collection of fresh, beautiful floral arrangements for every occasion. Each bouquet is expertly designed by our talented florists.
              </p>
            </div>

            {/* Right Column: Enhanced SVG Showcase */}
            <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
              <EnhancedSVGShowcase />
            </div>
          </div>
        </div>
      </Reveal>

      <ProductsClient products={products} />
    </>
  );
}