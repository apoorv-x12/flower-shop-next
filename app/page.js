import Image from "next/image";
import Link from "next/link";
import { BasketSVG, Sparkle, TinyLeaf, TinyRose } from "@/components/CuteSVGs";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";
import TrendyProductsClient from "@/components/TrendyProductsClient";


// ─── PRODUCT SVGs based on actual handcrafted items ──────────────────────────

/** Evil-eye blue pipe-cleaner flower keychain */
function EvilEyeFlowerSVG({ size = 120 }) {
  const cx = size / 2, cy = size / 2, r = size * 0.42;
  const petals = 16;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Petals */}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i * 360) / petals;
        const rad = (angle * Math.PI) / 180;
        const px = cx + Math.cos(rad) * r * 0.62;
        const py = cy + Math.sin(rad) * r * 0.62;
        const ex = cx + Math.cos(rad) * r;
        const ey = cy + Math.sin(rad) * r;
        const w = size * 0.08;
        return (
          <g key={i}>
            <ellipse
              cx={(px + ex) / 2} cy={(py + ey) / 2}
              rx={size * 0.075} ry={size * 0.18}
              fill="#1a3a9e" opacity={0.82}
              transform={`rotate(${angle + 90} ${(px + ex) / 2} ${(py + ey) / 2})`}
            />
            {/* Fuzzy texture lines on petal */}
            {[-1, 0, 1].map((d) => (
              <line key={d}
                x1={px + Math.cos(rad + Math.PI / 2) * d * (w * 0.3)}
                y1={py + Math.sin(rad + Math.PI / 2) * d * (w * 0.3)}
                x2={ex + Math.cos(rad + Math.PI / 2) * d * (w * 0.3)}
                y2={ey + Math.sin(rad + Math.PI / 2) * d * (w * 0.3)}
                stroke="#2952cc" strokeWidth="0.6" opacity="0.4"
              />
            ))}
          </g>
        );
      })}
      {/* Evil eye rings */}
      <circle cx={cx} cy={cy} r={size * 0.27} fill="white" stroke="#ccc" strokeWidth="0.5"/>
      <circle cx={cx} cy={cy} r={size * 0.2} fill="#a8d8ea"/>
      <circle cx={cx} cy={cy} r={size * 0.12} fill="#1a1a2e"/>
      {/* Eye shine */}
      <circle cx={cx - size * 0.04} cy={cy - size * 0.04} r={size * 0.035} fill="white" opacity="0.9"/>
      <circle cx={cx + size * 0.05} cy={cy + size * 0.04} r={size * 0.018} fill="white" opacity="0.6"/>
      {/* Keyring */}
      <circle cx={cx} cy={size * 0.06} r={size * 0.045} fill="none" stroke="#c0c0c0" strokeWidth="2"/>
      <line x1={cx} y1={size * 0.06} x2={cx} y2={size * 0.15} stroke="#c0c0c0" strokeWidth="1.5"/>
    </svg>
  );
}

/** Purple chenille lavender plant in dark red ribbed pot */
function PurplePlantSVG({ size = 130 }) {
  const potW = size * 0.52, potH = size * 0.28, potX = (size - potW) / 2;
  const potY = size * 0.70;
  // Stems fan outward from base, tips sit in upper 40% of SVG
  const stems = [
    { bx: size * 0.34, angle: -50 },
    { bx: size * 0.40, angle: -28 },
    { bx: size * 0.47, angle:  -8 },
    { bx: size * 0.54, angle:  12 },
    { bx: size * 0.60, angle:  32 },
    { bx: size * 0.66, angle:  52 },
  ];
  const stemLen = size * 0.50;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {stems.map((s, i) => {
        // angle is measured from vertical (upward)
        const rad = (s.angle * Math.PI) / 180;
        const tipX = s.bx + Math.sin(rad) * stemLen;
        const tipY = potY - Math.cos(rad) * stemLen;
        // Fuzzy lavender spikes: multiple thin ellipses stacked along spike axis
        const spikeH = size * 0.22;
        const spikeCount = 6;
        return (
          <g key={i}>
            {/* Stem */}
            <line x1={s.bx} y1={potY} x2={tipX} y2={tipY}
              stroke="#2d5a1b" strokeWidth={size * 0.028} strokeLinecap="round"/>
            {/* Purple spike segments from tip downward */}
            {Array.from({ length: spikeCount }).map((_, j) => {
              const t = j / spikeCount;
              const sx = tipX - Math.sin(rad) * spikeH * t;
              const sy = tipY + Math.cos(rad) * spikeH * t;
              return (
                <ellipse key={j}
                  cx={sx} cy={sy}
                  rx={size * 0.025 + t * size * 0.01}
                  ry={size * 0.05}
                  fill={j < 2 ? "#d49ae0" : "#b86fc7"}
                  opacity={0.9 - t * 0.15}
                  transform={`rotate(${s.angle} ${sx} ${sy})`}
                />
              );
            })}
            {/* Tip bud */}
            <ellipse cx={tipX} cy={tipY} rx={size * 0.022} ry={size * 0.035}
              fill="#e0b4f0"
              transform={`rotate(${s.angle} ${tipX} ${tipY})`}/>
          </g>
        );
      })}
      {/* Ribbed pot body */}
      <rect x={potX} y={potY} width={potW} height={potH} rx={size * 0.04} fill="#8b1a1a"/>
      {/* Ribs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i}
          x1={potX + (potW / 8) * i + 2} y1={potY + 4}
          x2={potX + (potW / 8) * i + 2} y2={potY + potH - 4}
          stroke="#6b0000" strokeWidth="1.2" opacity="0.5"
        />
      ))}
      {/* Pot rim */}
      <rect x={potX - 3} y={potY - 5} width={potW + 6} height={10} rx={3} fill="#6b0000"/>
      {/* Soil top */}
      <ellipse cx={size / 2} cy={potY + 2} rx={potW * 0.45} ry={size * 0.035} fill="#2d1a0a" opacity="0.6"/>
    </svg>
  );
}

/** Three colorful chenille flower pots in a row */
function ThreePotsSVG({ size = 180 }) {
  const flowers = [
    { potColor: "#c084d4", petalColor: "#3355cc", centerColor: "#f5c800", stemColor: "#3a7a1a", petals: 8, px: size * 0.16 },
    { potColor: "#5bc4c4", petalColor: "#ff2d9b", centerColor: "#f5c800", stemColor: "#3a7a1a", petals: 14, px: size * 0.5 },
    { potColor: "#8b1a1a", petalColor: "#c084d4", centerColor: "#7a2a7a", stemColor: "#3a7a1a", petals: 6, px: size * 0.84 },
  ];
  const potW = size * 0.24, potH = size * 0.22, potY = size * 0.73;
  const flowerCY = size * 0.35, stemTopY = flowerCY + size * 0.1, stemBotY = potY;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {flowers.map((f, fi) => {
        const petalR = size * 0.1;
        return (
          <g key={fi}>
            {/* Stem */}
            <line x1={f.px} y1={stemTopY} x2={f.px} y2={stemBotY}
              stroke={f.stemColor} strokeWidth="3" strokeLinecap="round"/>
            {/* Leaf */}
            <ellipse cx={f.px + size * 0.04} cy={stemBotY - size * 0.12}
              rx={size * 0.04} ry={size * 0.09}
              fill={f.stemColor} opacity="0.85"
              transform={`rotate(30 ${f.px + size * 0.04} ${stemBotY - size * 0.12})`}/>
            {/* Petals */}
            {Array.from({ length: f.petals }).map((_, i) => {
              const angle = (i * 360) / f.petals;
              const rad = (angle * Math.PI) / 180;
              return (
                <ellipse key={i}
                  cx={f.px + Math.cos(rad) * petalR * 0.68}
                  cy={flowerCY + Math.sin(rad) * petalR * 0.68}
                  rx={petalR * 0.38} ry={petalR * 0.8}
                  fill={f.petalColor}
                  transform={`rotate(${angle + 90} ${f.px + Math.cos(rad) * petalR * 0.68} ${flowerCY + Math.sin(rad) * petalR * 0.68})`}
                />
              );
            })}
            {/* Center */}
            <circle cx={f.px} cy={flowerCY} r={petalR * 0.38} fill={f.centerColor}/>
            {/* Pot */}
            <rect x={f.px - potW / 2} y={potY} width={potW} height={potH} rx={4} fill={f.potColor}/>
            {/* Ribs on pot */}
            {Array.from({ length: 6 }).map((_, ri) => (
              <line key={ri}
                x1={f.px - potW / 2 + (potW / 6) * ri + 2} y1={potY + 4}
                x2={f.px - potW / 2 + (potW / 6) * ri + 2} y2={potY + potH - 4}
                stroke="rgba(0,0,0,0.18)" strokeWidth="1"
              />
            ))}
            {/* Soil */}
            <ellipse cx={f.px} cy={potY + 3} rx={potW * 0.42} ry={size * 0.02} fill="#2d1a0a" opacity="0.5"/>
          </g>
        );
      })}
    </svg>
  );
}

/** Deep crimson chenille roses */
function CrimsonRosesSVG({ size = 120 }) {
  const roses = [
    { cx: size * 0.28, cy: size * 0.42, r: size * 0.22 },
    { cx: size * 0.68, cy: size * 0.35, r: size * 0.19 },
    { cx: size * 0.5,  cy: size * 0.7,  r: size * 0.17 },
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {roses.map((rose, ri) => (
        <g key={ri}>
          {/* Petals — concentric spiral-ish rings */}
          {[1, 0.78, 0.58, 0.4, 0.25].map((scale, i) => (
            Array.from({ length: 8 - i }).map((_, j) => {
              const angle = (j * 360) / (8 - i) + i * 22;
              const rad = (angle * Math.PI) / 180;
              const dist = rose.r * scale * 0.55;
              return (
                <ellipse key={`${i}-${j}`}
                  cx={rose.cx + Math.cos(rad) * dist}
                  cy={rose.cy + Math.sin(rad) * dist}
                  rx={rose.r * scale * 0.28} ry={rose.r * scale * 0.2}
                  fill={i === 0 ? "#7a0a14" : i === 1 ? "#9b0e1a" : i === 2 ? "#b81222" : i === 3 ? "#cc1a28" : "#d42232"}
                  transform={`rotate(${angle + 30} ${rose.cx + Math.cos(rad) * dist} ${rose.cy + Math.sin(rad) * dist})`}
                />
              );
            })
          ))}
          {/* Center */}
          <circle cx={rose.cx} cy={rose.cy} r={rose.r * 0.18} fill="#4a0008"/>
        </g>
      ))}
    </svg>
  );
}

/** Orange sunflower in beige ribbed pot with bow */
function OrangeSunflowerPotSVG({ size = 150 }) {
  const potW = size * 0.5, potH = size * 0.32, potY = size * 0.65, potX = (size - potW) / 2;
  const fcx = size / 2, fcy = size * 0.28, fr = size * 0.2;
  const petalCount = 18;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <line x1={fcx} y1={fcy + fr * 0.7} x2={fcx} y2={potY}
        stroke="#2d5a1b" strokeWidth="4" strokeLinecap="round"/>
      {/* Leaves */}
      <ellipse cx={fcx + size * 0.08} cy={fcy + fr + size * 0.06}
        rx={size * 0.06} ry={size * 0.12} fill="#3a7a1a"
        transform={`rotate(40 ${fcx + size * 0.08} ${fcy + fr + size * 0.06})`}/>
      <ellipse cx={fcx - size * 0.08} cy={fcy + fr + size * 0.13}
        rx={size * 0.06} ry={size * 0.11} fill="#3a7a1a"
        transform={`rotate(-40 ${fcx - size * 0.08} ${fcy + fr + size * 0.13})`}/>
      {/* Orange petals */}
      {Array.from({ length: petalCount }).map((_, i) => {
        const angle = (i * 360) / petalCount;
        const rad = (angle * Math.PI) / 180;
        return (
          <ellipse key={i}
            cx={fcx + Math.cos(rad) * fr * 0.75}
            cy={fcy + Math.sin(rad) * fr * 0.75}
            rx={fr * 0.28} ry={fr * 0.65}
            fill={i % 3 === 0 ? "#ff7a00" : "#ff9520"}
            transform={`rotate(${angle + 90} ${fcx + Math.cos(rad) * fr * 0.75} ${fcy + Math.sin(rad) * fr * 0.75})`}
          />
        );
      })}
      {/* Dark center */}
      <circle cx={fcx} cy={fcy} r={fr * 0.38} fill="#5c2d0a"/>
      <circle cx={fcx} cy={fcy} r={fr * 0.24} fill="#7a3a14"/>
      {/* Small center texture dots */}
      {Array.from({ length: 7 }).map((_, i) => {
        const a = (i * 360) / 7;
        return <circle key={i}
          cx={fcx + Math.cos(a * Math.PI / 180) * fr * 0.14}
          cy={fcy + Math.sin(a * Math.PI / 180) * fr * 0.14}
          r={1.5} fill="#4a2008" opacity="0.6"/>;
      })}
      {/* Beige pot */}
      <rect x={potX} y={potY} width={potW} height={potH} rx={6} fill="#e8d5b4"/>
      {/* Ribs */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i}
          x1={potX + (potW / 9) * i + 2} y1={potY + 5}
          x2={potX + (potW / 9) * i + 2} y2={potY + potH - 5}
          stroke="#c4aa84" strokeWidth="1.2" opacity="0.6"
        />
      ))}
      {/* Pot rim */}
      <rect x={potX - 3} y={potY - 5} width={potW + 6} height={10} rx={3} fill="#c4aa84"/>
      {/* Bow */}
      <path d={`M ${size / 2 - 10} ${potY + potH * 0.6} Q ${size / 2 - 5} ${potY + potH * 0.52} ${size / 2} ${potY + potH * 0.6}`}
        fill="#6b2a10" opacity="0.9"/>
      <path d={`M ${size / 2 + 10} ${potY + potH * 0.6} Q ${size / 2 + 5} ${potY + potH * 0.52} ${size / 2} ${potY + potH * 0.6}`}
        fill="#6b2a10" opacity="0.9"/>
      <circle cx={size / 2} cy={potY + potH * 0.6} r={2.5} fill="#4a1a08"/>
      {/* Soil */}
      <ellipse cx={size / 2} cy={potY + 3} rx={potW * 0.42} ry={5} fill="#2d1a0a" opacity="0.5"/>
    </svg>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials = [
  { name: "Anita Sharma", review: "Beautiful flowers and fast delivery. The bouquet was even prettier in person!", avatar: "A" },
  { name: "Riya Kapoor", review: "The arrangement looked exactly like the photos and arrived right on time. So fresh!", avatar: "R" },
  { name: "Meera Patel", review: "Elegant work and very helpful team for custom requests. Highly recommend!", avatar: "M" },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="#d4647a">
          <path d="M6.5 1l1.43 2.9L11 4.4l-2.25 2.19.53 3.09L6.5 8.25 3.72 9.68l.53-3.09L2 4.4l3.07-.5L6.5 1z"/>
        </svg>
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        {/* Subtle dot pattern */}
        <div className="dotted-bg" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />

        {/* Floating decorative SVGs — hidden on very small screens */}
        <div style={{ position: "absolute", top: "8%", left: "2%", opacity: 0.7 }} className="animate-float hidden sm:block">
          <EvilEyeFlowerSVG size={70} />
        </div>
        <div style={{ position: "absolute", top: "6%", right: "2%", opacity: 0.65 }} className="animate-float-b hidden sm:block">
          <OrangeSunflowerPotSVG size={80} />
        </div>
        <div style={{ position: "absolute", bottom: "4%", left: "1%", opacity: 0.5 }} className="animate-wiggle hidden md:block">
          <CrimsonRosesSVG size={70} />
        </div>

        {/* Hero text */}
        <div className="container" style={{ paddingTop: "48px", paddingBottom: "36px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <span className="pill" style={{ marginBottom: "18px" }}>🌸 Handcrafted Flower Delivery</span>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.18,
              color: "var(--dark-text)",
              margin: "0 0 16px",
            }}>
              Blooms That{" "}
              <span style={{
                background: "linear-gradient(135deg, var(--rose) 0%, var(--warm-brown) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Speak Volumes
              </span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "var(--mid-text)", lineHeight: 1.7, marginBottom: "28px" }}>
              Expertly arranged handcrafted flowers for every moment that matters.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/products" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "var(--rose)", color: "#ffffff",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.92rem",
                padding: "12px 28px", borderRadius: "999px", textDecoration: "none",
                boxShadow: "0 5px 18px rgba(212,100,122,0.38)",
              }}>
                Shop Flowers
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero visual: image grid + big SVG showcase */}
        <div className="container" style={{ paddingBottom: "48px", position: "relative", zIndex: 1 }}>
          <div className="hero-image-grid">
            {/* First photo */}
            <div className="group" style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "320px" }}>
              <Image
                src={`${publicBasePath}/hero-1.png`}
                alt="Backdrop"
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "cover", filter: "blur(24px)", transform: "scale(1.1)", opacity: 0.4 }}
                priority
              />
              <Image
                src={`${publicBasePath}/hero-1.png`}
                alt="Beautiful handcrafted floral arrangement"
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "contain", zIndex: 1 }}
                priority
              />
            </div>

            {/* Second photo */}
            <div className="group" style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "320px" }}>
              <Image
                src={`${publicBasePath}/hero-2.png`}
                alt="Backdrop"
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "cover", filter: "blur(24px)", transform: "scale(1.1)", opacity: 0.4 }}
                priority
              />
              <Image
                src={`${publicBasePath}/hero-2.png`}
                alt="Stunning handcrafted floral design"
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "contain", zIndex: 1 }}
                priority
              />
            </div>

            {/* Third photo */}
            <div className="group" style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "320px" }}>
              <Image
                src={`${publicBasePath}/hero-3.png`}
                alt="Backdrop"
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "cover", filter: "blur(24px)", transform: "scale(1.1)", opacity: 0.4 }}
                priority
              />
              <Image
                src={`${publicBasePath}/hero-3.png`}
                alt="Gorgeous floral arrangement"
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "contain", zIndex: 1 }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ padding: "16px 20px" }}>
            <div className="responsive-grid-3">
              {[
                { icon: "🚚", value: "Pan India", label: "Delivery" },
                { icon: "✂️", value: "Fresh", label: "Handcrafted" },
                { icon: "🎁", value: "Custom", label: "Orders" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center", padding: "10px 4px" }}>
                  <div style={{ fontSize: "1.3rem" }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--rose)", marginTop: "2px" }}>{s.value}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--mid-text)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ═════════════════════════════════════ */}
      <Reveal as="section" style={{ background: "var(--white)", padding: "clamp(48px, 6vw, 64px) 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "14px" }}>
              <Sparkle size={18} color="#d4647a" />
              <span className="pill">Curated Collection</span>
              <Sparkle size={18} color="#d4647a" />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, margin: "0 0 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <TinyLeaf size={30} />
              Trendy Products
              <TinyLeaf size={30} />
            </h2>
            {/* Filter tabs managed by Client Component */}
          </Reveal>

          <TrendyProductsClient products={products} />
        </div>
      </Reveal>

      {/* ══ HANDCRAFTED SHOWCASE (SVG banner) ═════════════════════ */}
      <Reveal as="section" style={{ background: "var(--cream-2)", padding: "clamp(48px, 6vw, 64px) 0" }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: "center", gap: "40px" }}>
            {/* SVG showcase — 2×2 grid */}
            <Reveal delay={100}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                justifyItems: "center",
              }}>
                {[
                  { Svg: EvilEyeFlowerSVG, label: "Evil Eye Keychain", cls: "animate-float" },
                  { Svg: OrangeSunflowerPotSVG, label: "Sunflower Pot", cls: "animate-float-b" },
                  { Svg: PurplePlantSVG, label: "Lavender Plant", cls: "animate-wiggle" },
                  { Svg: CrimsonRosesSVG, label: "Chenille Roses", cls: "animate-float" },
                ].map(({ Svg, label, cls }) => (
                  <div key={label} className={cls} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                    <Svg size={108} />
                    <span style={{ fontSize: "0.7rem", color: "var(--mid-text)", fontStyle: "italic" }}>{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={200}>
              <span className="pill" style={{ marginBottom: "14px" }}>Our Craft</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, margin: "0 0 14px" }}>
                Made by Hand, Made with Heart
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "var(--mid-text)", lineHeight: 1.75, marginBottom: "20px" }}>
                Every piece is handcrafted using chenille wire and pipe cleaners — from evil-eye keychains
                to sunflower pots and crimson roses. Each item is one of a kind and made to order.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { icon: "✋", label: "100% Handmade", desc: "Crafted individually by our artisans" },
                  { icon: "🌿", label: "Fresh Daily", desc: "Made fresh on the day of your order" },
                  { icon: "📦", label: "Gift-Ready", desc: "Beautifully packaged for every occasion" },
                ].map((f) => (
                  <div key={f.label} style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    background: "var(--white)", borderRadius: "10px", padding: "10px 14px",
                    border: "1px solid var(--border-light)",
                  }}>
                    <span style={{ fontSize: "1.2rem" }}>{f.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--dark-text)" }}>{f.label}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--mid-text)" }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* ══ ABOUT ═════════════════════════════════════════════════ */}
      <Reveal as="section" style={{ background: "var(--white)", padding: "64px 0" }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: "center", gap: "40px" }}>
            <Reveal delay={100} style={{ position: "relative" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", background: "#f9f1e8", padding: "20px" }}>
                <BasketSVG size={320} />
              </div>

            </Reveal>

            <Reveal delay={200}>
              <span className="pill" style={{ marginBottom: "14px" }}>Our Story</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, margin: "0 0 14px" }}>
                About Bloom Craft
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "var(--mid-text)", lineHeight: 1.75, marginBottom: "22px" }}>
                We're passionate about creating stunning handcrafted arrangements.
                From chenille-wire roses to evil-eye keychains — every bloom is made with care and delivered fresh to your door.
              </p>
              <Link href="/products" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "var(--rose)", color: "#ffffff",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                padding: "11px 26px", borderRadius: "999px", textDecoration: "none", fontSize: "0.88rem",
                boxShadow: "0 4px 14px rgba(212,100,122,0.3)",
              }}>
                Shop Now →
              </Link>
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════ */}
      <Reveal as="section" style={{ background: "var(--white)", padding: "clamp(48px, 6vw, 64px) 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="pill" style={{ marginBottom: "14px" }}>Customer Love</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, margin: 0 }}>
              Loved by Thousands 🌹
            </h2>
          </Reveal>

          <div className="responsive-grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <article className="card-hover" style={{
                  background: "var(--white)", border: "1px solid var(--border)",
                  borderRadius: "16px", padding: "22px",
                  boxShadow: "var(--shadow-sm)", position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: "10px", right: "14px",
                    fontFamily: "serif", fontSize: "3.5rem", color: "var(--blush)",
                    lineHeight: 1, opacity: 0.45, userSelect: "none",
                  }}>"</div>
                  <Stars />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "var(--mid-text)", lineHeight: 1.7, margin: "12px 0", fontStyle: "italic" }}>
                    "{t.review}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--rose), var(--dusty-rose))",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#ffffff", fontWeight: 700, fontSize: "0.88rem", flexShrink: 0,
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.84rem", color: "var(--dark-text)" }}>{t.name}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--mid-text)" }}>Verified Customer</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ══ CTA BANNER ════════════════════════════════════════════ */}
      <Reveal as="section" style={{ background: "var(--rose)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <TinyRose size={50} opacity={0.8} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 20px" }}>
            Ready to Send Some Joy?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "24px" }}>
            Order your perfect handcrafted arrangement today — starting at just ₹299.
          </p>
          <Link href="/products" style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "#ffffff", color: "var(--rose-dark)",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.92rem",
            padding: "12px 30px", borderRadius: "999px", textDecoration: "none",
          }}>
            Shop Now 🌸
          </Link>
        </div>
      </Reveal>
    </>
  );
}
