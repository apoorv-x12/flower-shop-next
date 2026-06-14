"use client";

import React from "react";
import { ThreePotsSVG, TinyRose, Sparkle, Swirl, TinyLeaf } from "@/components/CuteSVGs";

export default function EnhancedSVGShowcase() {
  return (
    <div style={{
      position: "relative",
      background: "linear-gradient(135deg, #fae8ec 0%, #fdf0f5 100%)",
      borderRadius: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      gap: "12px",
      minHeight: "360px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(220,150,165,0.15)",
    }}>
      {/* Decorative magical collage items */}
      <div style={{ position: "absolute", top: "15%", left: "10%", animation: "float-a 6s ease-in-out infinite" }}>
        <TinyRose size={45} opacity={0.7} />
      </div>
      <div style={{ position: "absolute", bottom: "20%", right: "8%", animation: "float-b 7s ease-in-out infinite" }}>
        <TinyRose size={35} opacity={0.6} />
      </div>

      <div style={{ position: "absolute", top: "25%", right: "15%", animation: "float-c 5s ease-in-out infinite" }}>
        <Sparkle size={30} color="#d4647a" opacity={0.8} />
      </div>
      <div style={{ position: "absolute", bottom: "15%", left: "15%", animation: "float-a 4s ease-in-out infinite" }}>
        <Sparkle size={25} color="#e8a0ad" opacity={0.9} />
      </div>
      <div style={{ position: "absolute", top: "45%", right: "5%", animation: "float-b 6.5s ease-in-out infinite" }}>
        <Sparkle size={20} color="#fcd5ce" opacity={0.7} />
      </div>

      <div style={{ position: "absolute", top: "10%", right: "40%", animation: "float-c 5.5s ease-in-out infinite" }}>
        <Swirl size={40} color="#f0c4cc" opacity={0.6} />
      </div>
      <div style={{ position: "absolute", bottom: "10%", right: "30%", animation: "float-a 7.5s ease-in-out infinite" }}>
        <Swirl size={35} color="#e8a0ad" opacity={0.5} />
      </div>

      <div style={{ position: "absolute", top: "40%", left: "5%", animation: "float-b 6s ease-in-out infinite" }}>
        <TinyLeaf size={35} opacity={0.7} />
      </div>
      <div style={{ position: "absolute", top: "60%", right: "12%", animation: "float-a 5s ease-in-out infinite" }}>
        <TinyLeaf size={25} opacity={0.5} />
      </div>

      {/* Main Center SVG */}
      <div className="animate-float-b" style={{ position: "relative", zIndex: 10 }}>
        <ThreePotsSVG size={220} />
      </div>

      <p style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: "1rem", 
        color: "var(--rose-dark)", 
        fontStyle: "italic", 
        textAlign: "center",
        zIndex: 10,
        margin: 0
      }}>
        Crafted with love and magic 🌸
      </p>
    </div>
  );
}
