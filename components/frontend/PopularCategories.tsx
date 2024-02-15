import React from "react";
import Image from "next/image";

const categories = [
  { name: "Anniversary Gifts", imageSrc: "/categories/category2.jpg" },
  { name: "Birthday Gifts", imageSrc: "/categories/category3.jpg" },
  { name: "Wedding Gifts", imageSrc: "/categories/category1.jpg" },
  { name: "Wedding Gifts", imageSrc: "/categories/category2.jpg" },
  { name: "Holiday Gifts", imageSrc: "/categories/category1.jpg" },
  // Add more category objects as needed
];

export default function PopularCategories() {
  return (
    <div className='w-full bg-white py-8'>
      <div className='flex flex-col gap-8 justify-center max-w-7xl mx-auto py-10 px-8 text-zinc-950'>
        <div className=''>
          <h3 className='font-bold text-2xl'>
            Shop our popular gift categories
          </h3>
        </div>

        {/* categories */}
        <div className='grid grid-cols-2 col-span-2 gap-5 lg:grid-cols-5'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='flex flex-col border border-zinc-950 rounded-xl'
            >
              <div className='relative'>
                <Image
                  width={340}
                  height={270}
                  src={category.imageSrc}
                  alt={`gecko-category-${index}`}
                  className='object-cover rounded-t-xl'
                />
              </div>
              <div className='p-6 text-center capitalize rounded-b-xl bg-white'>
                <span className='font-bold'>{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
