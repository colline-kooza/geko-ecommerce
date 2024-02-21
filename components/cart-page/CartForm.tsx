'use client'
import { Plus } from 'lucide-react';
import { Tag } from 'lucide-react';
import React, { useState } from 'react'

export default function CartForm() {
    let type:string;
    // let Tag:string;
    let Handshake:string;
    let cols=Number;
    let rows=Number;
    const [isHidden, setIsHidden] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

  const toggleCoupon = () => {
    setIsVisible(!isVisible);
  };

    const toggleVisibility = () => {
      setIsHidden(!isHidden);
    };
    
  
  return (
    <div className="lower-card form md:p-4 p-2 flex-col md:flex-row  flex justify-between w-full">
              <div className="form-left">
              {/* <div className="coupon">
      <h3 className='ext-sm hover:bg-gray-300 p-3 hover:rounded-lg flex items-center' onClick={toggleCoupon}>
        <span className='text-xs'><Tag /></span>
        Apply shop coupon codes
      </h3>
      <form className="w-full">
        <label className="mb-2 text-[.7rem] font-extrabold text-gray-900 sr-only dark:text-white">Search</label>
        <div className={`relative ${isVisible ? '' : 'hidden'}`}>
          <input
            type="search"
            className="block w-full px-8 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 rounded-2xl focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ENTER YOUR COUPON"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-0 bottom-0 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-2xl rounded-l-0 text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            APPLY
          </button>
        </div>
      </form>
    </div> */}
    <div className="coupon">
      <h3 className='text-sm hover:bg-gray-300 p-3 hover:rounded-lg flex items-center' onClick={toggleCoupon}>
        <span className='text-xs'><Tag /></span>
        Apply shop coupon codes
      </h3>
      <form className="w-full">
        <label className="mb-2  text-[.7rem]  font-extrabold text-gray-900 sr-only dark:text-white">Search</label>
        <div className={`relative transition-all duration-300 ${isVisible ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
          <input
            type="search"
            className="block w-full px-8 py-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 rounded-2xl focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-opacity duration-300"
            placeholder="ENTER YOUR COUPON"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-0 bottom-0 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-2xl rounded-l-0 text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            APPLY
          </button>
        </div>
      </form>
    </div>
                <div className="note">
      <h3 className='text-sm hover:bg-gray-300 p-3 hover:rounded-lg flex items-center' onClick={toggleVisibility}>
        <span className='text-xs'><Plus /></span>
        Add Note of love
      </h3>
      <form className="w-full">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className={`relative ${isHidden ? 'hidden' : ''}`}>
          {/* <input
            
          /> */}
          <textarea type="search"
            className="block w-full px-8 py-2 h-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 rounded-2xl focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none transition-opacity duration-300"
            placeholder="ENTER YOUR COUPON"
              cols="10" rows="10"></textarea>
         
        </div>
      </form>
    </div>
    <div className="mt-3 ">
    <div className="flex items-center ">
    <input id="default-checkbox" type="checkbox" value="" className="w-8 h-7 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Make Order as A gift</label>
</div>

  <p className='text-xs px-3'>View gifting options at checkout.</p>

    </div>
              </div>
              <div className="form-right ">
              <form className="max-w-sm mx-auto">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Select Currency</option>
              <option value="USD">USD 71.9(Feb 23-28, USPS PRIORITY MAIL EXPRESS INTERNEATIONAL</option>
              <option value="USD">USD 71.9(Feb 23-28, USPS PRIORITY MAIL EXPRESS INTERNEATIONAL</option>
              <option value="USD">USD 71.9(Feb 23-28, USPS PRIORITY MAIL EXPRESS INTERNEATIONAL</option>
              <option value="USD">USD 71.9(Feb 23-28, USPS PRIORITY MAIL EXPRESS INTERNEATIONAL</option>
              
  </select>
  
  <p>Estimated delivery: Feb 23-28 from United States</p>
              </form>
              </div>
            </div>
  )
}
