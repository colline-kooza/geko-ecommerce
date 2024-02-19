import React from 'react'

export default function CheckoutPageOne() {
  return (
    <>
    <div className="md:w-[53%] px-6 w-full flex m-2 flex-col gap-5 mx-auto">
    <h1 className='text-4xl'>Enter your shipping address
</h1>
<div className="relative z-0 w-full mb-5 group">
<h1 className='font-bold flex'>Select Country <span className='text-2xl text-red-600'>*</span>  </h1>
    <select name="" id="" className="dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500">
        <option value="">Uganda</option>
        <option value="">Kenya</option>
        <option value="">Zimababwe</option>
        <option value="">Namibia</option>
        <option value="">Sri Lanka</option>
    </select>
      {/* <label htmlFor="floating_email" className="peer-focus:font-medium absolute mb-7 text-gray-500 dark:text-gray-400  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-2xl peer-focus:scale-75 peer-focus:-translate-y-6 font-bold ">Country </label> */}
  </div>
  <div className=" w-full mb-2 group">
    <h1 className='font-bold flex'>Full Name <span className='text-2xl text-red-600'>*</span>  </h1>
    <input type='' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500' placeholder='HOW'/>
    <div className="error text-red-500">Name Field Must not be empty</div>
      
  </div>
  <div className=" w-full mb-2 group">
    <h1 className='font-bold flex items-center'>Street address   <span className='text-2xl text-red-600'>*</span> </h1>
    <input type='email' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500' placeholder='HOW'/>
   <div className="error text-red-500">Please Enter Correct Address</div>
      
  </div>
  <div className=" w-full mb-2 group">
    <h1 className='font-bold flex items-center'>Address line 2 (optional)   <span className='text-2xl text-red-600'>*</span> </h1>
    <input type='email' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500' placeholder='HOW'/>
   <div className="error text-red-500">Please Enter different Address</div>
      
  </div>
  <div className=" w-full mb-2 group">
    <h1 className='font-bold flex items-center'>City / Town (optional) (optional)   <span className='text-2xl text-red-600'>*</span> </h1>
    <input type='email' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500' placeholder='HOW'/>
   <div className="error text-red-500">Enter City or Address Town</div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className=" w-full mb-2 group">
    <h1 className='font-bold flex items-center'>
State / Province / Region (optional)   <span className='text-2xl text-red-600'>*</span> </h1>
    <input type='email' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500' placeholder='HOW'/>
   <div className="error text-red-500">Enter City or Address Town</div>
  </div>
  <div className=" w-full mb-2 group">
    <h1 className='font-bold flex items-center'>
Postal code (optional)   <span className='text-2xl text-red-600'>*</span> </h1>
    <input type='email' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500' placeholder='HOW'/>
   
  </div>
  </div>
  <div className=" w-full mb-2 group">
    <h1 className='font-bold flex items-center'>Phone number (optional)  <span className='text-2xl text-red-600'>*</span> </h1>
    <input type='email' id='floating_email' name='name' className='dark:focus:border-blue-500 focus:outline-blue-400  focus:ring-0 focus:border-blue-600 peer border-black-290 rounded-sm border-2 w-full py-2.5 px-3 border-black-300 dark:focus:border-blue-500' placeholder='HOW'/>
   
  </div>
  <button type="submit" className="text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue to Payment</button>


    </div></>
  )
}
