import React from "react";
import Link from "next/link";
import Image from "next/image";
import CategoryHead from "../frontend/CategoryHead";

const recentlyViewedData = [
  {
    id: 2,
    src: "/categories/category2.jpg",
    price: "USD 27.99",
  },
  {
    id: 2,
    src: "/categories/category2.jpg",
    price: "USD 27.99",
  },
  {
    id: 2,
    src: "/categories/category2.jpg",
    price: "USD 27.99",
  },
  {
    id: 2,
    src: "/categories/category2.jpg",
    price: "USD 27.99",
  },
  {
    id: 2,
    src: "/categories/category2.jpg",
    price: "USD 27.99",
  },
];

export default function CategoryDetailedPage() {
  return (
    <>
    <div className='bg-white'>
      <div className='flex flex-col gap-8 justify-center max-w-7xl mx-auto py-10 px-8 text-zinc-950'>
      <div className="text-center">
<h3 className='font-normal text-3xl'>Clothing</h3>
  <p className="text-sm">Clothing for adults and kids—we got you covered</p>
</div>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-5'>
          {recentlyViewedData.map((item) => (
            <Link
              key={item.id}
              href='/'
              className='flex items-center justify-center relative'
            >
              <Image
                src={item.src}
                alt='categories'
                width={200}
                height={270}
                className='rounded-lg px-1 object-cover w-full h-full'
              />
              <h2 className='flex absolute bg-slate-50 bottom-5 px-8 py-1 rounded-full text-sm font-bold'>
                {item.price}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>

  <CategoryHead title="Other Categories"/>
    </>
  );
}
