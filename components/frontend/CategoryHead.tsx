import Link from 'next/link';
import React from 'react';

interface CategoryHeadProps {
  title: string;
  categories: any[]; 
}

export default function CategoryHead({ title, categories }: CategoryHeadProps) {
  return (
    <div className='lg:flex lg:flex-col w-full h-[50vh] bg-white hidden'>
      <div className='bg-[#024927] w-full h-[50%]'>
        <h1 className='lg:text-3xl font-light text-white flex items-center justify-center text-center py-4'>{title}</h1>
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 px-[5rem]'>
        {categories?.splice(0 ,6).map((cat, i) => (
          <Link key={i} href={`/c/${cat.id}`} className='flex flex-col hover:underline'>
            <div className="mx-auto w-32 h-32 -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img className="object-cover object-center h-32" src={cat.image} alt='Woman looking front' />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold text-sm line-clamp-1">{cat.title}</h2>
              <p className="font-semibold text-sm line-clamp-1">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
