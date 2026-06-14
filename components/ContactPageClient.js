"use client";

import Reveal from "@/components/Reveal";
import ContactFormSection from "@/components/ContactFormSection";
import { MailboxSVG, Sparkle } from "@/components/CuteSVGs";

export default function ContactPageClient() {
  return (
    <>
      <Reveal as="section" style={{ background: "var(--cream)", padding: "64px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: "20px" }}>
              <MailboxSVG size={180} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "14px" }}>
              <Sparkle size={18} color="#d4647a" />
              <span className="pill">
                Get in Touch
              </span>
              <Sparkle size={18} color="#d4647a" />
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700, margin: "0 0 20px" }}>
              Contact Us
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "var(--mid-text)", lineHeight: 1.75 }}>
              We&apos;re here to help with orders, delivery questions, and custom floral requests. Reach out anytime!
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" style={{ background: "var(--cream)", padding: "64px 0" }}>
        <div className="container responsive-grid-2" style={{ gap: "40px" }}>
          {/* Contact Info */}
          <Reveal delay={100} style={{ background: "var(--white)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-light)" }}>
            <div style={{ marginBottom: "30px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, margin: "0 0 10px" }}>
                Contact Information
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--mid-text)", lineHeight: 1.75 }}>
                Stop by the shop or reach out for Pan India delivery and custom arrangements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c4617e]">📍 Address</p>
                <p className="text-gray-700">214 Bloom Street, Brooklyn, NY 11201</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c4617e]">📞 Phone</p>
                <p className="text-gray-700">(718) 555-0147</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c4617e]">📧 Email</p>
                <p className="text-gray-700">hello@bloomcraft.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c4617e]">⏰ Hours</p>
                <p className="text-gray-700">Monday to Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </Reveal>

          {/* Contact Form Section with useSearchParams */}
          <ContactFormSection />
        </div>
      </Reveal>
    </>
  );
}
