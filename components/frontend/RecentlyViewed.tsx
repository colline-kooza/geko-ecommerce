import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  images: string[]; 
  currentPrice: number; 
}

interface RecentlyViewedProps {
  products: Product[];
  title: string | null;
}

export default function RecentlyViewed({ products, title }: RecentlyViewedProps) {
  return (
    <div className='bg-white'>
      <div className='flex flex-col gap-4 justify-center max-w-7xl mx-auto py-10 px-8 text-zinc-950'>
        {title && <h3 className='font-bold'>{title}</h3>}
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-5'>
          {products?.slice(0, 5).map((item) => (
            <Link
              key={item.id}
              href={`/d/${item.id}`}
              className='flex items-center justify-center relative'
            >
              <Image
                src={item.images[0]}
                alt='categories'
                width={200}
                height={270}
                className='rounded-lg px-1 object-cover w-full h-full'
              />
              <h2 className='flex absolute bg-slate-50 bottom-5 px-8 py-1 rounded-full text-sm font-bold'>
                {item.currentPrice}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

