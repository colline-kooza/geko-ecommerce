import React from 'react'
import CartForm from './CartForm'
import Link from 'next/link'
import Image from 'next/image'
import { Edit } from 'lucide-react'

export default function CartItemsCard() {
  return (
    <>
    <div className="upper flex flex-col md:flex-row  ">
                    <div className="left-upper flex-col md:flex-row w-full md:w-3/4 flex  ">
                        <div className="md:w-1/3 w-full ">
                        <Image src={'/images/cart.avif'} alt='' className='hover:bg-black w-full  bg-purple-300  rounded-lg' width={180} height={100}/>
                        </div>
                        <div className='md:w-3/4 p-3 w-full '>
                    <p className='text-[16px] text-red-700'>55 SOLD IN THE PAST 24 HOURS</p>
                    <Link href={''} >Personalized Mama Sweatshirt with Kid</Link>
                    <p>Color / Size: Ash / L</p>
                    <p>Add-on Sleeve Print?: Yes</p>
                    <p>Personalization: Not requested on this </p>
                    <div className="flex items-center gap-5">
                    <div className="text-black border-5 border-black">
                      <select name="values" className='border-2 mt-2 w-19  py-3 px-5 flex items-center shadow-md'  id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                      </select>
                      <p className='mt-3'>Save for later</p>
                    </div>
                    <div className=" flex mt-3 gap-7 flex-col ">
                      <p className='flex'><span> <Edit/> </span> Edit</p>
                      <p className=''>remove</p>
                    </div>
                    </div>
                        </div>
                    </div>
                    <div className="right-upper text-center md:text-end w-full px-4 md:w-1/4 ">
                    <p>contact shop</p>
                <h4 className='mt-3'>USD 29.37</h4>
                <p className='text-sm'> <span className='line-through'>USD 48.95</span>  (40% off)</p>
                <p className='text-green-300'>Sale ends in 14:29:32</p>
                    </div>
                </div>
                <div className="lower  border-t-[1.5px] ">
                    <CartForm/>
                </div>
    </>
  )
}
