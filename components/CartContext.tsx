// "use client";
// import { createContext, useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";

// export const CartContext = createContext();

// export function CartProvider({ children }:any) {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     // Load cart from local storage on component mount
//     const storedCart = JSON.parse(localStorage.getItem("cartItem"));
//     if (storedCart) {
//       setCart(storedCart);
//     }
//   }, []);

//   const addToCart = (product) => {
//     if (cart.some((item) => item.id === product.id)) {
//       toast.error("This product is already in the cart");
//     } else {
//       const updatedCart = [...cart, product];
//       setCart(updatedCart);
//       localStorage.setItem("cartItem", JSON.stringify(updatedCart));
//       toast("This product has been added to the cart", {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     }
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem("cartItem", JSON.stringify(updatedCart));
//     toast.success("This product has been removed from the cart");
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         addToCart,
//         cart,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   return context;
// }

import React from 'react'

export default function CartContext() {
  return (
    <div>CartContext</div>
  )
}
