import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  images: string[]; 
}

interface PopularCategoriesProps {
  products: Product[];
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({ products }) => {
  // console.log(products)
  return (
    <div className='w-full bg-white py-8'>
      <div className='flex flex-col gap-8 justify-center max-w-7xl mx-auto py-10 px-8 text-zinc-950'>
        <div className=''>
          <h3 className='font-bold text-2xl'>
            Shop our popular Products
          </h3>
        </div>

        {/* Featured Categories */}
        <div className='grid grid-cols-2 col-span-2 gap-5 lg:grid-cols-5'>
          {products?.splice(0 ,5).map((prdt, index) => (
            <Link href={`/d/${prdt.id}`}
              key={index}
              className='flex flex-col border border-zinc-950 rounded-xl'
            >
              <div className='relative'>
                <Image
                  width={340}
                  height={270}
                  src={prdt. images[0]}
                  alt={`gecko-category-${index}`}
                  className='object-cover rounded-t-xl'
                />
              </div>
              <div className='p-6 text-center capitalize rounded-b-xl bg-white'>
                <span className='font-bold'>{prdt.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
