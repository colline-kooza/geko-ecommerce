import { Handshake } from 'lucide'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Edit, HandshakeIcon, Tag, TagIcon, Tags } from 'lucide-react';
import {Input} from "@nextui-org/react";
import CartForm from '@/components/cart-page/CartForm';
import HidingInputs from '@/components/cart-page/HidingInput';
import CartItemsCard from '@/components/cart-page/CartItemsCard';
export default function page() {
  let type:string;
  let Handshake:string;
  return (
    <div className='w-screen px-1 md:px-8  py-1 mt-0 md:mt-3  max-h-screen'>
        <h2 className='text-3xl'>2 items in your cart</h2>
        <p className="prom mt-3 bg-blue-200 p-3 flex gap-3 text-xs items-center"> <span className='text-3xl'> <HandshakeIcon /></span> Buy confidently with Etsy's Purchase Protection program for buyers, get a full refund in the rare case your item doesn't arrive, arrives damaged, or isn't as described. See eligibility</p>
        
        <div className='w-screen'>
        <div className="cardWrap mt-7 p-3 flex-col md:flex-row  w-full gap-2 h-2/3  flex">
            <div className="leftCard  p-1 md:p-5 border-[1.5px] border-1 border-black-10">
               <CartItemsCard/>
            </div>
            <div className="payments w-full  md:w-2/5 h-[300px] py-1 px-2 md:px-16">
                <h1 className="">How you'll pay</h1>
                <div className="payment-methods ">
                  <div className="credit-card-methods flex gap-2 items-center">
                    <div className="status h-8 w-8 border-[6px] rounded-full border-black bg-white"></div>
                    <div className="flex">
                    <Image src={'/images/Visa-Curved.webp'} alt='' width={40} height={20}/>
                    <Image src={'/images/mastCar.webp'} alt='' width={40} height={20}/>
                    <Image src={'/images/amex.webp'} alt='' width={40} height={20}/>
                    <Image src={'/images/Visa-Curved.webp'} alt='' width={40} height={20}/>
                    </div>
                  </div>
                  <div className="credit-card-methods flex gap-2 items-center">
                  <div className="status h-8 w-8 border-[6px] rounded-full border-black bg-white"></div>
                    <div className="flex">
                    <Image src={'/images/payp.webp'} alt='' width={40} height={20}/>
                    </div>
                  </div>
                  <div className="credit-card-methods flex gap-2 items-center">
                    <div className="status h-8 w-8 border-[2px] rounded-full border-black bg-white"></div>
                    <div className="flex">
                      
                    <Image src={'/images/gp-pay.webp'} alt='' width={40} height={20}/>
                    </div>
                  </div>
                </div>
                <div className="payment-methods mt-2 flex gap-2 flex-col  ">
                  <div className="flex justify-between mt-2">
                    <p>Item(s) total</p>
                    <p>USD 48.95</p>
                  </div>
                  <div className="shipping flex justify-between border-b-[.8px] py-3 border-b-gray-500 ">
                    <p>Shipping <br /> <span className='text-[.8rem] underline'>(To Uganda)</span></p>
                    <p>USD 71.19 <br /> </p>
                  </div>
                  <div className="total font-bold border-t-black pt-2 flex justify-between">
                    <p>Total underline</p>
                    <p>USD 120.14</p>
                  </div>
                  <button className='px-10 bg-black rounded-full w-full py-2 text-white'>Proceed Checkout</button>
                </div>
                <div className="">
                  <HidingInputs/>
                  <p className='pl-5'>Local taxes included (where applicable)
* Additional duties and taxes may apply</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
