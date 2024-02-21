import { HandshakeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function page() {
  let Handshake: string;
  return (
    <div className='w-screen px-8 py-1 mt-3 max-h-screen'>
      <h2 className='text-3xl'>3=4 items in your cart</h2>
      <p className="prom rounded-md bg-blue-200 p-3 flex gap-3 text-xs items-center">
        <span className='text-3xl'><HandshakeIcon /></span> Buy confidently with Etsys Purchase Protection program for buyers, get a full refund in the rare case your item doesnt arrive, arrives damaged, or isnt as described. See eligibility
      </p>
      <div className="w-full flex mt-8">
        <div className="w-3/5 flex border-black justify-between border-1 p-3 h-[300px] rounded-md">
          <div className='bg-green-400'>
            <p>love suna</p>
            <div className="flex gap-4">
              <Image src={'/images/cart.avif'} alt='' className='hover:bg-black h-full bg-purple-300 rounded-lg' width={180} height={100} />
              <div className="">
                <p className=''>55 SOLD IN THE PAST 24 HOURS</p>
                <Link href={''}>Personalized Mama Sweatshirt with Kid</Link>
                <p>Color / Size: Ash / L</p>
                <p>Add-on Sleeve Print?: Yes</p>
                <p>Personalization: Not requested on this </p>
                <div className="flex">
                  <div className="text-black border-5 border-black">
                    <select name="values" className='border-2 mt-2 w-19 py-3 px-5 flex items-center shadow-md' id="">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                    <p>Save for later</p>
                  </div>
                  <div className="">
                    <p>Edit</p>
                    <p>remove</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-teal-500 px-4 text-end w-1/4'>
            <p>contact shop</p>
            <h4 className='mt-3'>USD 29.37</h4>
            <p className='text-sm'> <span className='line-through'>USD 48.95</span> (40% off)</p>
            <p className='text-green-300'>Sale ends in 14:29:32</p>
          </div>
        </div>
        <div className="w-2/5 bg-purple-300 p-3">
          <p>How Your will Pay</p>
        </div>
      </div>
    </div>
  )
}
