"use client";

import React, { useEffect, useState } from "react";
import { LogoFlower } from "@/components/Header";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Completely unmount after 2 seconds
    const unmountTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: "none",
      }}
    >
      <div style={{ animation: "pulse 1.5s ease-in-out infinite" }}>
        <LogoFlower />
      </div>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "2rem",
          color: "var(--rose-dark)",
          marginTop: "20px",
          animation: "fadeUp 1s ease-out forwards",
          opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        Blossom Hug
      </h1>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(0.95); }
          50% { transform: scale(1.05); }
          100% { transform: scale(0.95); }
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
