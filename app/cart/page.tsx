"use client"
import { useCart } from '@/components/CartContext';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

interface Product {
    id: string;
    name: string;
    currentPrice: string;
    images?: string[]; 
    shortDescription: string;
    description: string;
    quantity: string;
  }

export default function Page() {
  const { cart, removeFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += parseFloat(item.currentPrice);
    });
    setTotalPrice(totalPrice);
  }, [cart]);
  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="w-full sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
          </div>
          {cart.map((prdt, i) => {
            return (
              <div key={i} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                  <img src={prdt.images[0]} className="h-full object-center object-cover md:block hidden" />
                  <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">{prdt.name}</p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">{prdt.name}</p>
                    <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                    </select>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2 line-clamp-1">{prdt.shortDescription}</p>
                  <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">Item Qty: {prdt.quantity}</p>
                  <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white line-clamp-1">{prdt.description}</p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex items-center">
                      <Link href="/" className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Home</Link>
                      <button onClick={() => removeFromCart(prdt.id)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</button>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">{prdt.currentPrice}</p>
                  </div>
                </div>
              </div>
            )
          })}
          <Link href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
            <span className="font-semibold text-sm">{totalPrice}$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${totalPrice}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
