import Link from "next/link";

function FooterFlower() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="17" fill="#3d1a10"/>
      <ellipse cx="19" cy="7"  rx="4" ry="7" fill="#e8a0ad" opacity="0.6"/>
      <ellipse cx="19" cy="31" rx="4" ry="7" fill="#e8a0ad" opacity="0.6"/>
      <ellipse cx="7"  cy="19" rx="7" ry="4" fill="#e8a0ad" opacity="0.6"/>
      <ellipse cx="31" cy="19" rx="7" ry="4" fill="#e8a0ad" opacity="0.6"/>
      <ellipse cx="10" cy="10" rx="4" ry="7" fill="#f0c4cc" opacity="0.4" transform="rotate(45 10 10)"/>
      <ellipse cx="28" cy="10" rx="4" ry="7" fill="#f0c4cc" opacity="0.4" transform="rotate(-45 28 10)"/>
      <ellipse cx="10" cy="28" rx="4" ry="7" fill="#f0c4cc" opacity="0.4" transform="rotate(-45 10 28)"/>
      <ellipse cx="28" cy="28" rx="4" ry="7" fill="#f0c4cc" opacity="0.4" transform="rotate(45 28 28)"/>
      <circle cx="19" cy="19" r="7" fill="#d4647a" opacity="0.9"/>
      <circle cx="19" cy="19" r="4.5" fill="#fae8ec"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const siteBasePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    process.env.NEXT_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/flower-shop-next" : "");

  return (
    <footer style={{ background: "#1e1410", color: "#d4c8c0" }}>
      <div className="container" style={{ paddingTop: "52px", paddingBottom: "36px" }}>

        {/* Main grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div style={{
                width: "46px", height: "46px", background: "#2d1a14",
                borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <FooterFlower />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#f0e8e0" }}>
                  Bloom Craft
                </div>
                <div style={{ fontSize: "0.63rem", color: "#6b5248", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Handcrafted Flowers
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.84rem", color: "#7a6258", lineHeight: 1.7, maxWidth: "240px", marginBottom: "16px" }}>
              Handcrafted floral arrangements made with love — delivered fresh to your door.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { label: "Instagram", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
                { label: "Facebook", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} style={{
                  width: "34px", height: "34px", borderRadius: "50%",
                  border: "1px solid #3d2f2a", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#7a6258", textDecoration: "none", transition: "all 0.2s ease",
                }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "#f0e8e0", marginBottom: "14px", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Categories
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none", padding: 0, margin: 0 }}>
              {["Bouquets", "Roses", "Sunflowers", "Keychains", "Gift Boxes"].map((item) => (
                <li key={item}>
                  <Link href="/products" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.84rem", color: "#7a6258", textDecoration: "none" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "#f0e8e0", marginBottom: "14px", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Customer Service
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "About Us", href: "/contact" },
                { label: "Contact Us", href: "/contact" },
                { label: "FAQ", href: "#" },
                { label: "Delivery Info", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.84rem", color: "#7a6258", textDecoration: "none" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #2d2420" }}>
        <div className="container" style={{
          padding: "14px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "12px", flexWrap: "wrap",
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.76rem", color: "#4a3028", margin: 0 }}>
            &copy; {currentYear} Bloom Craft. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.76rem", color: "#4a3028", textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}