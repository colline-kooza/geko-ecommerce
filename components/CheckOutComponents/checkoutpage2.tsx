"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '@/components/CheckOutComponents/Button'
export default function checkoutPageTwo() {
  // const [user, setUser] = useState<User | null>(null);
  const [showMenu,setShowMethod]=useState(false);
  const [showPaypalMenu,setshowPaypalMenu]=useState(false);
  
  function ToggleMethod(){
    setShowMethod(!showMenu);
    console.log("clicked");
  }
  function TogglePaypalMethod(){
    setshowPaypalMenu(!showPaypalMenu);
    console.log("clicked");
  }
  return (
    <div className="md:w-2/4 px-6 w-full  flex flex-col gap-5 mx-auto">
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
                  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold ">Name on The Card</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold ">Card number </label>
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
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vero.</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vero.</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vero.</h1>
                  </div>
        </div>
        <div className="googlePay">
        <div className="paypal justify-between flex gap-2 items-center">
        <div onClick={TogglePaypalMethod} className="flex  gap-2">
        
                    <div  className={showPaypalMenu?" status transition-all ease-in 2s   mb-4 h-8 w-8 border-[10px] rounded-full border-black bg-white":"status  mb-4 h-8 w-8 border-[2px] rounded-full border-black bg-white"}></div>
                    <p>Pay with Google Pay</p>
                    </div>
                    <div className="flex">
                    <Image src={'/images/gp-pay.webp'} alt='' width={40} height={20}/>
                    </div>
                  </div>
                  <div className={showPaypalMenu?"visible":"hidden"}>
                    <h1>You can complete your order using Google Pay on the "Review" step.</h1>
                    <Button title={'Review Your Orders'}/>
                  </div>
        </div>
      <div className="grid md:grid-cols-1 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="city" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="city" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">City/Town <span className='text-xs'>(optional)</span></label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_last_name" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">State /Province/Region <span className='text-xs'>(optional)</span></label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_phone" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold"> State /Province/Region <span className='text-xs'>(optional)</span></label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_company" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Phone number (123-456-7890) <span className='text-xs'>(optional)</span></label>
        </div>
      </div>
      <Button className={'w-[200px] rounded-full'} title={'Review Your Ordersss'}/>
        </div>
  )
}
