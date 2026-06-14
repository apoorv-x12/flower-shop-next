"use client";

import React, { useEffect, useState } from "react";

import { TinyRose, Sparkle, Swirl } from "@/components/CuteSVGs";

export default function FloatingBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Decorative items positioned randomly but fixed so they stay as you scroll */}
      <div style={{ position: "absolute", top: "10%", left: "5%", animation: "float 6s ease-in-out infinite" }}>
        <TinyRose size={40} opacity={0.3} />
      </div>
      <div style={{ position: "absolute", top: "25%", right: "8%", animation: "float 7s ease-in-out infinite 1s" }}>
        <Sparkle size={35} opacity={0.6} />
      </div>
      <div style={{ position: "absolute", top: "45%", left: "15%", animation: "float 8s ease-in-out infinite 2s" }}>
        <Swirl size={45} opacity={0.4} />
      </div>
      <div style={{ position: "absolute", bottom: "30%", right: "12%", animation: "float 6s ease-in-out infinite 0.5s" }}>
        <TinyRose size={30} opacity={0.25} />
      </div>
      <div style={{ position: "absolute", bottom: "15%", left: "8%", animation: "float 7.5s ease-in-out infinite 1.5s" }}>
        <Sparkle size={25} opacity={0.5} />
      </div>
      <div style={{ position: "absolute", top: "60%", right: "20%", animation: "float 6.5s ease-in-out infinite 2.5s" }}>
        <Swirl size={35} opacity={0.5} />
      </div>
      <div style={{ position: "absolute", top: "80%", left: "25%", animation: "float 8s ease-in-out infinite 0.8s" }}>
        <TinyRose size={35} opacity={0.35} />
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
