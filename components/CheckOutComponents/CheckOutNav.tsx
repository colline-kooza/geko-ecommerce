import { Check } from 'lucide-react'
import React from 'react'

export default function CheckOutNav() {
  return (
    <div className="flex justify-between border-b-2 shadow-md p-4 px-10 shadow-b-md ">
        <div className="lgo">logo</div>
        <div className="steps flex items-center"> 
        <div className="h-10 w-10 rounded-full border-2 justify-center flex items-center bg-black "><Check className='text-white'/></div>
        <div className="line h-[3px] w-[7rem]  bg-gray-300 "></div>
        <div className="h-5 w-5 rounded-full border-2 justify-center flex items-center  bg-gray-300 "><Check className='text-white'/></div>
        <div className="line h-[3px] w-[7rem]  bg-gray-300 "></div>
        <div className="h-5 w-5 rounded-full border-2 justify-center flex items-center  bg-gray-300 "><Check className='text-white'/></div>
        </div>
      </div>
  )
}
