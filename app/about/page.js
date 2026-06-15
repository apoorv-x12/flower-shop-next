import Reveal from "@/components/Reveal";
import { StorefrontSVG, TinyRose } from "@/components/CuteSVGs";
import Link from "next/link";

export const metadata = {
  title: "About Us | Blossom Hug",
  description: "Learn more about our handcrafted flowers and the story behind Blossom Hug.",
};

export default function AboutPage() {
  return (
    <Reveal as="section" style={{ background: "var(--cream)", padding: "64px 0" }}>
      <div className="container">
        
        {/* Header Title */}
        <Reveal style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
          <span className="pill" style={{ marginBottom: "14px" }}>
            Our Story
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, margin: "0 0 20px" }}>
            About Us
          </h1>
        </Reveal>

        {/* 2-Column Layout */}
        <div className="responsive-grid-2" style={{ alignItems: "center", gap: "40px" }}>
          
          {/* SVG Column */}
          <Reveal className="flex-1 w-full flex justify-center items-center" delay={100}>
            <div className="rounded-3xl border-2 border-[#fdf0f5] bg-[#fffafb] p-8 shadow-sm flex justify-center w-full max-w-[450px]">
              <StorefrontSVG size={320} />
            </div>
          </Reveal>

          {/* Text Column */}
          <Reveal delay={200}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "0 0 14px" }}>
              <TinyRose size={28} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, margin: 0 }}>
                Crafting joy, one bloom at a time.
              </h2>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "var(--mid-text)", lineHeight: 1.75, marginBottom: "20px" }}>
              Welcome to <strong>Blossom Hug</strong>, where we transform simple chenille wire and pipe cleaners into timeless floral masterpieces. 
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "var(--mid-text)", lineHeight: 1.75, marginBottom: "20px" }}>
              What started as a small passion project quickly bloomed into a dedicated craft studio. We believe that flowers should bring joy that lasts forever. That's why every single piece—from our delicate crimson roses to our vibrant sunflower pots—is 100% handcrafted by our artisans with meticulous attention to detail.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "var(--mid-text)", lineHeight: 1.75, marginBottom: "20px" }}>
              Whether you're looking for a unique anniversary gift, a custom arrangement, or just a charming piece of decor to brighten your space, we pour our hearts into making sure your order is truly one-of-a-kind.
            </p>

            <Link href="/products" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "var(--rose)", color: "#ffffff",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              padding: "11px 26px", borderRadius: "999px", textDecoration: "none", fontSize: "0.88rem",
              boxShadow: "0 4px 14px rgba(212,100,122,0.3)",
              marginTop: "16px"
            }}>
              Shop Our Craft 🌸
            </Link>
          </Reveal>

        </div>
      </div>
    </Reveal>
  );
}
