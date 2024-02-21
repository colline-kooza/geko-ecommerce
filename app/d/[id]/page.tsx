import BreadCrumb from '@/components/detailed-page/BreadCrumb'
import DetailsComponent from '@/components/detailed-page/DetailsComponent'
import Swiper from '@/components/detailed-page/Swiper'
import React from 'react'
interface Product {
  id: string; 
  title: string;
  price: number; 
  description: string;
}

export default function page() {
  const product: Product = {
    id: "2", 
    title: "Shoes",
    price: 27.99,
    description: "this is the descriptions we have in this product"
  }
  
  return (
     <div className='lg:py-3 lg:px-8 md:px-3 px-1'>
     <BreadCrumb/>
     <div className='w-full min-h-screen py-5 lg:flex lg:flex-row md:flex-row flex-col lg:gap-4 gap-5'>
        <div className='lg:w-[60%] w-full min-h-[60vh]'>
        <Swiper/>
        </div>
        <div className='lg:w-[40%] w-full min-h-screen'>
        <DetailsComponent product={product}/>
        </div>
       
    </div>
    <div className='px-3'>
          <h2 className='font-bold text-lg border-b border-gray-800 w-[100%] lg:w-[20%]'>RELATED PRODUCTS</h2>
          <div>
            
          </div>
        </div>
    </div>
  )
}
