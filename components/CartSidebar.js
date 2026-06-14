"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function CartSidebar() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    // Format cart items for WhatsApp message
    let message = "Hello! I'd like to place an order:%0A%0A";
    
    cartItems.forEach((item) => {
      // Clean price just in case it has a $
      const priceClean = String(item.product.price).replace("$", "₹");
      message += `- ${item.quantity}x ${item.product.name} (${priceClean})%0A`;
    });
    
    message += `%0A*Total: ₹${cartTotal}*`;

    // Replace with the actual WhatsApp number
    const phoneNumber = "1234567890"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open in new tab
    window.open(whatsappUrl, "_blank");
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)",
          zIndex: 9998
        }}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar Panel */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "100%", maxWidth: "400px",
        background: "var(--white)",
        boxShadow: "var(--shadow-lg)",
        zIndex: 9999,
        display: "flex", flexDirection: "column",
        animation: "slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
        
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px", borderBottom: "1px solid var(--border-light)",
          background: "var(--cream-2)"
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", margin: 0, color: "var(--dark-text)" }}>
            Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{
              background: "none", border: "none", fontSize: "1.8rem", 
              cursor: "pointer", color: "var(--mid-text)", lineHeight: 1
            }}
          >
            &times;
          </button>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: "center", color: "var(--mid-text)", marginTop: "40px" }}>
              <p>Your cart is currently empty. 🌸</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.product.id} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                {/* Product Image */}
                <div style={{ width: "70px", height: "70px", position: "relative", borderRadius: "10px", overflow: "hidden", background: "var(--cream-3)" }}>
                  <Image src={item.product.image} alt={item.product.name} fill style={{ objectFit: "cover" }} />
                </div>
                
                {/* Info */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 4px", fontSize: "0.95rem", color: "var(--dark-text)", fontWeight: 600 }}>{item.product.name}</h4>
                  <p style={{ margin: 0, color: "var(--rose)", fontWeight: 600, fontSize: "0.9rem" }}>
                    {String(item.product.price).replace("$", "₹")}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border)", borderRadius: "6px", overflow: "hidden" }}>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      style={{ padding: "4px 8px", background: "var(--cream-2)", border: "none", cursor: "pointer", color: "var(--dark-text)" }}
                    >-</button>
                    <span style={{ padding: "0 8px", fontSize: "0.85rem", fontWeight: 600 }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      style={{ padding: "4px 8px", background: "var(--cream-2)", border: "none", cursor: "pointer", color: "var(--dark-text)" }}
                    >+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    style={{ background: "none", border: "none", color: "var(--light-text)", fontSize: "0.75rem", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer (Total & Checkout) */}
        {cartItems.length > 0 && (
          <div style={{ padding: "24px", borderTop: "1px solid var(--border-light)", background: "var(--cream-2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", fontSize: "1.2rem", fontWeight: 700, color: "var(--dark-text)" }}>
              <span>Total:</span>
              <span>₹{cartTotal}</span>
            </div>
            <button 
              onClick={handleCheckout}
              style={{
                width: "100%", padding: "14px",
                background: "#25D366", color: "white", 
                border: "none", borderRadius: "10px",
                fontSize: "1rem", fontWeight: 700,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)"
              }}
            >
              Order via WhatsApp
            </button>
          </div>
        )}
        
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </>
  );
}
