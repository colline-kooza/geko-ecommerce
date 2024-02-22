"use client"
import { CalendarCheck, Layers2, Truck } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { GrDeliver } from "react-icons/gr";
import { MdStars } from "react-icons/md";
import { useCart } from "../CartContext";


interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity:string
  currentPrice:string
  initialPrice:string
  shortDescription:string
}
export default function DetailsComponent({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const today = new Date();
  const month = today.getMonth() + 1; 
  const monthName = today.toLocaleString('en-US', { month: 'long' })

  return (
    <div className="lg:px-0  px-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-[#9a0027] text-md font-medium">Only {product.quantity} left and in the stock</h2>
       <div className="flex items-center gap-2">
       <h1 className="text-3xl font-bold text-[#0f743b]">USD {product.currentPrice}</h1>
       <p className="line-through text-gray-500 text-sm">USD {product.initialPrice}</p>

       </div>
       <h2 className="font-xs mb-5 font-semibold text-[#0f743b]">{product.name} have 10% off sale for a limited time</h2>
       <h2 className="font-semibold">{product.name}</h2>
        <p className="text-xs text-gray-600">{product.shortDescription}</p>
        <div className="flex items-center gap-2">
  <h1 className="font-bold text-sm text-gray-700 tracking-[0.3px]">Ratings :</h1>
  <div className="flex items-center">
  <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
    <svg className="flex-shrink-0 size-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  </button>
  <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
    <svg className="flex-shrink-0 size-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  </button>
  <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
    <svg className="flex-shrink-0 size-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  </button>
  <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
    <svg className="flex-shrink-0 size-5 text-slate-900 text-slate-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  </button>
  <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-200 dark:hover:text-yellow-500">
    <svg className="flex-shrink-0 size-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  </button>
</div>
        </div>
      </div>
      <div className="w-[100%] bg-white drop-shadow-sm rounded-md lg:p-[.6rem] md:p-[.6rem] p-[.2rem]  flex flex-col gap-4 h-[90%] mt-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-[500] tracking-[.2px]">
               SALES & RETURNS ACCEPTED
              </h2>
              <div className="w-[100%] h-[1px] bg-gray-200 "></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-sm tracking-[.4px] font-[500]">
                Choose your location
              </h2>
              <div className="flex flex-col gap-3">
              <select className="py-3 px-4 pe-9 block w-full new border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-100 border-slate-400 text-slate-900 dark:focus:ring-gray-600">
  <option selected>Open this select menu</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
           </select>
              <select className="py-3 px-4 pe-9 block w-full new border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-100 border-slate-400 text-slate-900 dark:focus:ring-gray-600">
  <option selected>Open this select menu</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
           </select>
              </div>
            </div>
         
      </div>
      <div className="mt-4 flex ">
      <button 
          className="bg-[#222222] lg:px-48 md:px-40 px-30 py-4 shadow-lg hover:shadow-2xl hover:transition-colors hover:bg-slate-800 font-medium text-white text-sm rounded-3xl hover:animate-pulse"
          onClick={() => addToCart(product)}
        >
       Add To Cart
        </button>
      </div>
      <hr className="mt-9"/>
      <div className="lg:p-8 p-2 flex flex-col gap-6">
        <div className="flex flex-col gap-2 ">
        <h2 className="font-bold text-lg text-gray-700">Item Details</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        </div>
        <div className="flex flex-col gap-2">
              <h2 className="font-bold text-lg text-gray-700  ">
                Special Offers In This {monthName}
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                </div>
                <div className="text-[13px] flex flex-col gap-3 text-[#91959a]">
                  <p className="flex gap-1 items-center">
                    <MdStars className="text-orange-400 text-[19px]" />
                    Get up to 40% off During this time while
                    using Geko
                  </p>
                  <p className="flex gap-1 items-center">
                    <MdStars className="text-orange-400 text-[19px]" />
                    Enjoy free delivery when purchases are high
                  </p>
                  <p className="flex gap-1 items-center">
                    <MdStars className="text-orange-400 text-[19px]" />
                    Have a go on every first purchase
                  </p>
                </div>
              </div>
          </div>
        <div className="flex flex-col gap-2">
              <h2 className="font-bold text-lg text-gray-700  ">
                Shipping and Return Policies
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                </div>
                <div className="text-[13px] flex flex-col gap-3 text-[#152c43]">
                  <p className="flex gap-1 items-center">
                  <CalendarCheck size={24}/>
                    Order today to get your Product Immediately
                  </p>
                  <p className="flex gap-1 items-center">
                  <Layers2 size={24}/>
                    Returns & exchanges not accepted
                  </p>
                  <p className="flex gap-1 items-center">
                  <Truck size={24}/>
                    Free shipping
                  </p>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
