"use client"
import { Tag } from 'lucide-react';
import React, { useState } from 'react'

export default function HidingInputs() {
    const [isHidden, setIsHidden] = useState(false);
    const [isAvailable, setisAvailable] = useState(false);

  const toggleCoupon = () => {
    setisAvailable(!isAvailable);
  };
  return (
    <div className="coupon">
    <h3 className='text-sm hover:bg-gray-300 p-3 hover:rounded-lg flex items-center' onClick={toggleCoupon}>
      <span className='text-xs'><Tag /></span>
      Apply shop coupon codes
    </h3>
    <form className="w-full">
      <label className="mb-2  text-[.7rem]  font-extrabold text-gray-900 sr-only dark:text-white">Search</label>
      <div className={`relative transition-all duration-300 ${isAvailable ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
        <input
          type="search"
          className="block mt-4 w-full px-8 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 rounded-2xl focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-opacity duration-300"
          placeholder="ENTER YOUR COUPON"
          required
        />
        <button
          type="submit"
          className="text-white absolute mt-4 end-0 bottom-0 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-2xl rounded-l-0 text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          APPLY
        </button>
      </div>
    </form>
  </div>
  )
}
