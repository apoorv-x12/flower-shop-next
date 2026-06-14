"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const CART_TTL = 1 * 24 * 60 * 60 * 1000; // 1 day in ms

  // Load from localStorage on mount — ignore if older than 1 day
  useEffect(() => {
    const saved = localStorage.getItem("bloom-cart");
    if (saved) {
      try {
        const { items, savedAt } = JSON.parse(saved);
        if (Array.isArray(items) && Date.now() - savedAt < CART_TTL) {
          setCartItems(items);
        } else {
          localStorage.removeItem("bloom-cart"); // expired or invalid, clean up
        }
      } catch (e) {
        console.error("Failed to parse cart");
        localStorage.removeItem("bloom-cart");
      }
    }
  }, []);

  // Save to localStorage with timestamp whenever cart changes
  useEffect(() => {
    localStorage.setItem(
      "bloom-cart",
      JSON.stringify({ items: cartItems, savedAt: Date.now() })
    );
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true); // Auto-open cart when adding
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Convert $48 to 48 so we can do math
  const getNumericPrice = (priceStr) => {
    if (typeof priceStr === "number") return priceStr;
    const cleaned = String(priceStr).replace(/[^0-9.]/g, "");
    return parseFloat(cleaned) || 0;
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + getNumericPrice(item.product.price) * item.quantity;
  }, 0);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
