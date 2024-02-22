"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

interface Category {
  id :string
  title: string;
  href: string;
  image: string;
}

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategories = () => {
    setShowAllCategories((prevState) => !prevState);
  };

  const visibleCategories = showAllCategories
  ? categories
  : categories.slice(0, 12);

  return (
    <section className='bg-white'>
      <div className='flex flex-col items-center gap-8 justify-center max-w-7xl mx-auto py-10 px-8 text-zinc-950'>
        {/* section-title */}
        <h3 className='font-normal text-3xl capitalize'>Shop by Category</h3>

        <div className='grid gap-6 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
          {visibleCategories.map((category, index) => (
            <Link href={`/c/${category.id}`} key={index} passHref>
              <Link href={`/c/${category.id}`} className='flex flex-col bg-white rounded-xl'>
                <span className='h-64 relative rounded-xl'>
                  <Image
                    width={340}
                    height={270}
                    src={category.image}
                    alt={`geko-${category.title}`}
                    className='object-cover h-full w-full rounded-xl'
                    loading='lazy'
                  />
                </span>
                <span className='p-4 text-center font-semibold'>
                  <span className='wt-screen-reader-only'>{category.title}</span>
                </span>
              </Link>
            </Link>
          ))}
        </div>
        <button
          type='button'
          className='border border-blue-600 transition-all text-black text-sm rounded-full px-5 py-2 ml-4'
          onClick={toggleCategories}
        >
          {showAllCategories ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
