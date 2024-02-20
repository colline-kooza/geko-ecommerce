"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '@/components/CheckOutComponents/Button'
import { CreditCard } from 'lucide-react';
import { FaLock,FaRegQuestionCircle } from 'react-icons/fa';

export default function CheckoutPageTwo() {
  // const [user, setUser] = useState<User | null>(null);
  const [showMenu,setShowMethod]=useState(false);
  const [showPaypalMenu,setshowPaypalMenu]=useState(false);
  const [showGooglePayMenu,setshowGooglePayMenu]=useState(false);
  
  function ToggleMethod(){
    setShowMethod(!showMenu);
    console.log("clicked");
  }
  function TogglePaypalMethod(){
    setshowPaypalMenu(!showPaypalMenu);
    console.log("clicked");
    
  }
  function ToggleGooglePayMethod(){
    setshowGooglePayMenu(!showGooglePayMenu);
    console.log("clicked");
  }
  return (
    <div className="md:w-[53%]  px-6 w-full  flex flex-col gap-5 mx-auto">
        <h1 className='text-4xl'>Choose a payment method</h1>
        <p>You will not be charged until you review this order on the next page.</p>
        <div className="credit-card-check-out ">
        <div onClick={ToggleMethod} className="credit-card-methods   justify-between flex gap-2 items-center">
                    <div  className="flex  gap-2">
                    <div   className={showMenu?" status  mb-4 h-8 w-8 border-[10px] rounded-full border-black bg-white":"status  mb-4 h-8 w-8 border-[2px] rounded-full border-black bg-white"} ></div>
                    <p className=''>Pay with Credit Card</p>
                    </div>
                    <div className="flex">
                    <Image src={'/images/Visa-Curved.webp'} alt='' width={40} height={20}/>
                    <Image src={'/images/mastCar.webp'} alt='' width={40} height={20}/>
                    <Image src={'/images/amex.webp'} alt='' width={40} height={20}/>
                    <Image src={'/images/Visa-Curved.webp'} alt='' width={40} height={20}/>
                    </div>
                  </div>
                  <div className={showMenu?"visible":"hidden"}>
                  <div className=" w-full mb-5 group">
    <div className='font-bold flex'>Name on card  <span className='text-2xl text-red-600'>*</span>  </div>
    <h3>Make sure to enter the full name that's on your card.</h3>
    <input type='email' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500' placeholder='HOW'/>
  </div>
  <div className=" w-full mb-5 group">
    <div className='font-bold flex'>Card Number  <span className='text-2xl text-red-600'>*</span>  </div>
    <h3>Make sure to enter the full name that's on your card.</h3>
   <div className="card-Input relative ">
    <CreditCard className='absolute text-4xl left-2 top-3 border-l-black'/>
   <input type='email' id='floating_email' name='name' className='dark:focus:border-blue-500   focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-10 border-black-300 dark:focus:border-blue-500 ' />
   
   <FaLock className='absolute text-2xl right-2 top-3'/>
   </div>
  </div>
  <div className="flex justify-between">
          <div className="">
            <h1>Expiration date </h1>
            <select name="" id="" className='w-[130px] rounded-l-md border-2 py-2 border-black'>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
            <select name="" id="" className=' w-[130px] bg-red-200 rounded-r-md border-2 py-2 border-black'>
              <option value="">2024</option>
              <option value="">2023</option>
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
            </select>
          </div>
          <div className="">
            <h1>Security code </h1>
            <div className="relative flex items-center">
            <FaLock className='absolute text-md ml-16  top-4'/>
            <input type='number' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer px- border-black-290 rounded-sm border-2 w-2/5 py-2.5  border-black-300 dark:focus:border-blue-500' />
  <FaRegQuestionCircle className='text-md'/>
            </div>

          </div>
        </div>
                  </div>
        </div>
        
        <div className="paypal-check-out">
        <div className="paypal justify-between flex gap-2 items-center">
        <div onClick={TogglePaypalMethod} className="flex  gap-2">
        
                    <div  className={showPaypalMenu?" status transition-all ease-in 2s   mb-4 h-8 w-8 border-[10px] rounded-full border-black bg-white":"status  mb-4 h-8 w-8 border-[2px] rounded-full border-black bg-white"}></div>
                    <p>Pay with PaypAL</p>
                    </div>
                    <div className="flex">
                    <Image src={'/images/Visa-Curved.webp'} alt='' width={40} height={20}/>
                    </div>
                  </div>
                  <div className={showPaypalMenu?"visible":"hidden"}>
                    <h1>Continuing will take you to your PayPal account. You'll be able to review and submit your order after you log in.</h1>
                    <Button title={'pay with Paypal'}/>
                  </div>
        </div>
        <div className="googlePay">
        <div className="paypal justify-between flex gap-2 items-center">
        <div onClick={ToggleGooglePayMethod} className="flex  gap-2">
        
                    <div  className={showGooglePayMenu?" status transition-all ease-in 2s   mb-4 h-8 w-8 border-[10px] rounded-full border-black bg-white":"status  mb-4 h-8 w-8 border-[2px] rounded-full border-black bg-white"}></div>
                    <p>Pay with Google Pay</p>
                    </div>
                    <div className="flex">
                    <Image src={'/images/gp-pay.webp'} alt='' width={40} height={20}/>
                    </div>
                  </div>
                  <div className={showGooglePayMenu?"visible":"hidden"}>
                    <h1>You can complete your order using Google Pay on the "Review" step.</h1>
                    <Button className={'w-[200px] rounded-full'} title={'Review Your Orders'}/>
                  </div>
        </div>
      <Button className={'w-[200px] rounded-full'} title={'Review Your Orders'}/>
        </div>
  )
}
