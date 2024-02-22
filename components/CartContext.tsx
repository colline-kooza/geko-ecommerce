"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: string;
  currentPrice: string;
  initialPrice: string;
  shortDescription: string;
  images?: string[];
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCartString = localStorage.getItem("cartItem");
    if (storedCartString) {
      const storedCart: Product[] = JSON.parse(storedCartString);
      setCart(storedCart);
    }
  }, []);

  const addToCart = (product: Product) => {
    if (cart.some((item) => item.id === product.id)) {
      toast.error("This product is already in the cart");
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      toast.success("This product has been added to the cart");
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    toast.success("This product has been removed from the cart");
  };

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
