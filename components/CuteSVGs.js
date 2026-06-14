export function StorefrontSVG({ size = 300 }) {
  return (
    <svg style={{ maxWidth: size, height: "auto", width: "100%" }} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#fdf0f5" rx="20" />
      {/* Awning */}
      <path d="M40 100 L60 60 L240 60 L260 100 Z" fill="#d4647a" />
      <path d="M40 100 Q50 115 60 100 Q70 115 80 100 Q90 115 100 100 Q110 115 120 100 Q130 115 140 100 Q150 115 160 100 Q170 115 180 100 Q190 115 200 100 Q210 115 220 100 Q230 115 240 100 Q250 115 260 100" fill="#e8a0ad" />
      
      {/* Building base */}
      <rect x="50" y="100" width="200" height="150" fill="#ffffff" />
      <rect x="50" y="240" width="200" height="10" fill="#e0e0e0" />

      {/* Door */}
      <rect x="130" y="150" width="40" height="90" fill="#f0c4cc" rx="4" />
      <circle cx="162" cy="195" r="4" fill="#b84d63" />
      
      {/* Windows */}
      <rect x="70" y="140" width="45" height="50" fill="#e8f4f8" rx="4" stroke="#d4647a" strokeWidth="3" />
      <line x1="70" y1="165" x2="115" y2="165" stroke="#d4647a" strokeWidth="3" />
      <line x1="92.5" y1="140" x2="92.5" y2="190" stroke="#d4647a" strokeWidth="3" />
      
      <rect x="185" y="140" width="45" height="50" fill="#e8f4f8" rx="4" stroke="#d4647a" strokeWidth="3" />
      <line x1="185" y1="165" x2="230" y2="165" stroke="#d4647a" strokeWidth="3" />
      <line x1="207.5" y1="140" x2="207.5" y2="190" stroke="#d4647a" strokeWidth="3" />

      {/* Flower boxes */}
      <rect x="65" y="195" width="55" height="15" fill="#8b5a2b" rx="2" />
      {/* Flowers in box 1 */}
      <circle cx="75" cy="190" r="6" fill="#e8a0ad" />
      <circle cx="85" cy="185" r="7" fill="#d4647a" />
      <circle cx="95" cy="192" r="6" fill="#f0c4cc" />
      <circle cx="105" cy="188" r="7" fill="#e8a0ad" />

      <rect x="180" y="195" width="55" height="15" fill="#8b5a2b" rx="2" />
      {/* Flowers in box 2 */}
      <circle cx="190" cy="188" r="7" fill="#e8a0ad" />
      <circle cx="200" cy="192" r="6" fill="#f0c4cc" />
      <circle cx="210" cy="185" r="7" fill="#d4647a" />
      <circle cx="220" cy="190" r="6" fill="#e8a0ad" />

      {/* Sign */}
      <rect x="110" y="70" width="80" height="20" fill="#ffffff" rx="4" />
      <text x="150" y="84" fontFamily="serif" fontSize="11" fontWeight="bold" fill="#b84d63" textAnchor="middle">BLOOM CRAFT</text>
    </svg>
  );
}

export function MailboxSVG({ size = 200 }) {
  return (
    <svg style={{ maxWidth: size, height: "auto", width: "100%" }} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill="#fdf0f5" />
      {/* Post */}
      <rect x="90" y="120" width="20" height="80" fill="#8b5a2b" />
      {/* Box */}
      <path d="M50 120 L150 120 L150 80 Q150 50 100 50 Q50 50 50 80 Z" fill="#d4647a" />
      <rect x="45" y="120" width="110" height="10" fill="#b84d63" rx="4" />
      {/* Letter */}
      <rect x="80" y="70" width="40" height="30" fill="#ffffff" rx="2" />
      <path d="M80 70 L100 85 L120 70" stroke="#d4647a" strokeWidth="2" fill="none" />
      {/* Flag */}
      <rect x="140" y="60" width="6" height="40" fill="#e0e0e0" />
      <rect x="146" y="60" width="20" height="15" fill="#f0c4cc" rx="2" />
      {/* Little flowers at base */}
      <circle cx="80" cy="190" r="8" fill="#e8a0ad" />
      <circle cx="90" cy="180" r="6" fill="#f0c4cc" />
      <circle cx="115" cy="185" r="9" fill="#d4647a" />
      <circle cx="125" cy="192" r="7" fill="#e8a0ad" />
    </svg>
  );
}

export function BasketSVG({ size = 300 }) {
  return (
    <svg style={{ maxWidth: size, height: "auto", width: "100%" }} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="#f9f1e8" rx="20" />
      {/* Handle */}
      <path d="M80 150 C80 50, 220 50, 220 150" stroke="#d4a373" strokeWidth="16" fill="none" strokeLinecap="round" />
      
      {/* Basket Base */}
      <path d="M70 150 L230 150 L210 250 L90 250 Z" fill="#e6ccb2" />
      <path d="M70 150 L230 150 L210 250 L90 250 Z" stroke="#cfa682" strokeWidth="4" fill="none" />
      {/* Weave lines */}
      <line x1="95" y1="150" x2="110" y2="250" stroke="#cfa682" strokeWidth="4" />
      <line x1="120" y1="150" x2="135" y2="250" stroke="#cfa682" strokeWidth="4" />
      <line x1="145" y1="150" x2="150" y2="250" stroke="#cfa682" strokeWidth="4" />
      <line x1="170" y1="150" x2="165" y2="250" stroke="#cfa682" strokeWidth="4" />
      <line x1="195" y1="150" x2="185" y2="250" stroke="#cfa682" strokeWidth="4" />
      <line x1="80" y1="180" x2="220" y2="180" stroke="#cfa682" strokeWidth="4" />
      <line x1="85" y1="210" x2="215" y2="210" stroke="#cfa682" strokeWidth="4" />

      {/* Flowers in basket */}
      {/* Big Rose 1 */}
      <circle cx="120" cy="130" r="30" fill="#d4647a" />
      <path d="M120 130 C130 110, 150 130, 120 150 C90 130, 110 110, 120 130" fill="#f0c4cc" opacity="0.6"/>
      
      {/* Big Rose 2 */}
      <circle cx="180" cy="120" r="35" fill="#e8a0ad" />
      <path d="M180 120 C195 100, 215 120, 180 145 C145 120, 165 100, 180 120" fill="#d4647a" opacity="0.5"/>
      
      {/* White flowers */}
      <circle cx="150" cy="100" r="15" fill="#ffffff" />
      <circle cx="150" cy="100" r="5" fill="#f5c800" />
      
      <circle cx="90" cy="140" r="12" fill="#ffffff" />
      <circle cx="90" cy="140" r="4" fill="#f5c800" />
      
      <circle cx="210" cy="135" r="18" fill="#ffffff" />
      <circle cx="210" cy="135" r="6" fill="#f5c800" />
      
      {/* Leaves */}
      <path d="M150 100 Q170 70 180 80 Q160 110 150 100" fill="#2d5a1b" />
      <path d="M120 130 Q90 100 80 110 Q110 140 120 130" fill="#3a7a1a" />
      <path d="M180 120 Q220 90 230 105 Q190 135 180 120" fill="#2d5a1b" />
    </svg>
  );
}

// A small, cute, 5-petal pink rose SVG
export function TinyRose({ size = 30, opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
      {/* Leaves */}
      <path d="M50 50 Q20 30 10 50 Q20 70 50 50" fill="#a4c639" />
      <path d="M50 50 Q80 30 90 50 Q80 70 50 50" fill="#a4c639" />
      {/* Petals */}
      <circle cx="50" cy="35" r="15" fill="#f4a5ae" />
      <circle cx="65" cy="45" r="15" fill="#f08da0" />
      <circle cx="60" cy="65" r="15" fill="#f4a5ae" />
      <circle cx="40" cy="65" r="15" fill="#f08da0" />
      <circle cx="35" cy="45" r="15" fill="#f4a5ae" />
      {/* Center */}
      <circle cx="50" cy="50" r="10" fill="#d4647a" />
    </svg>
  );
}

// A cute sparkle SVG
export function Sparkle({ size = 20, opacity = 1, color = "#fcd5ce" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
      <path
        d="M50 10 Q55 45 90 50 Q55 55 50 90 Q45 55 10 50 Q45 45 50 10 Z"
        fill={color}
      />
    </svg>
  );
}

// A cute little swirl SVG
export function Swirl({ size = 25, opacity = 1, color = "#f8edeb" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
      <path
        d="M20 50 C20 20 80 20 80 50 C80 70 40 70 40 50 C40 40 60 40 60 50"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// A tiny leaf SVG
export function TinyLeaf({ size = 25, opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
      {/* Petal base */}
      <path d="M50 20 Q70 10 80 30 Q90 50 70 70 Q50 90 30 70 Q10 50 20 30 Q30 10 50 20 Z" fill="#88b04b" />
      {/* Veins */}
      <path d="M50 20 L50 80 M50 50 L30 40 M50 50 L70 40 M50 65 L35 60 M50 65 L65 60" stroke="#6d8f3b" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Three colorful chenille flower pots in a row */
export function ThreePotsSVG({ size = 180 }) {
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
