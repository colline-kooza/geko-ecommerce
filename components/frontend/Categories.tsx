"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const categories = [
  {
    src: "https://i.etsystatic.com/7770785/r/il/c2ca12/4170703056/il_680x540.4170703056_6bd5.jpg",
    href: "/neckless",
    title: "Neckless",
  },
  {
    src: "https://i.etsystatic.com/14304132/c/645/512/77/358/il/f819eb/3087535516/il_680x540.3087535516_9vr4.jpg",
    href: "/home-&-leaving",
    title: "Home & Leaving",
  },
  {
    src: "https://i.etsystatic.com/10131647/c/2000/1589/0/316/il/2fec9d/2794383513/il_680x540.2794383513_bhd9.jpg",
    href: "/clothing",
    title: "Clothing",
  },
  {
    src: "https://i.etsystatic.com/24971419/r/il/1902d6/2507719880/il_680x540.2507719880_5x9l.jpg",
    href: "/art-&-collectibles",
    title: "Art & Collectibles",
  },
  {
    src: "https://i.etsystatic.com/27025196/c/2025/1611/0/0/il/d7ed4a/4993068433/il_680x540.4993068433_99hf.jpg",
    href: "/baby%s",
    title: "Baby's",
  },
  {
    src: "https://i.etsystatic.com/14409281/c/1588/1262/0/800/il/82cc22/3652976053/il_680x540.3652976053_tvid.jpg",
    href: "/wedding",
    title: "Wedding",
  },
  {
    src: "https://i.etsystatic.com/7558906/c/1500/1192/0/858/il/33bab7/4069070654/il_680x540.4069070654_qn0l.jpg",
    href: "/bags-&-purses",
    title: "Bags & Purses",
  },
  {
    src: "https://i.etsystatic.com/26182332/r/il/15ac96/3528769661/il_680x540.3528769661_fi5m.jpg",
    href: "/electronics-&-accessories",
    title: "Electronics & Accessories",
  },
  {
    src: "https://i.etsystatic.com/8622539/r/il/4acc14/2889603059/il_680x540.2889603059_drrd.jpg",
    href: "/craft-supplies-&-tools",
    title: "Craft Supplies & Tools",
  },
  {
    src: "https://i.etsystatic.com/14367613/r/il/31778d/4901714835/il_680x540.4901714835_87vm.jpg",
    href: "/accessories",
    title: "Accessories",
  },
  {
    src: "https://i.etsystatic.com/37231598/r/il/3559d6/4811063784/il_680x540.4811063784_h329.jpg",
    href: "/books-movies-&-music",
    title: "Books Movies & Music",
  },
  {
    src: "https://i.etsystatic.com/8595828/c/2608/2073/89/289/il/9b5143/2264200464/il_680x540.2264200464_4cva.jpg",
    href: "/gifts",
    title: "Gifts",
  },
  {
    src: "https://i.etsystatic.com/15246890/r/il/aaae9e/3289967114/il_680x540.3289967114_mgj7.jpg",
    href: "/birth-&-beauty",
    title: "Birth & Beauty",
  },
  {
    src: "https://i.etsystatic.com/28443357/c/2144/1704/0/952/il/e12a4b/5795682593/il_680x540.5795682593_miki.jpg",
    href: "/shoes",
    title: "shoes",
  },
  {
    src: "https://i.etsystatic.com/37231598/r/il/27c1c1/4519144240/il_680x540.4519144240_oc1g.jpg",
    href: "/paper-&-party-&-supplies",
    title: "Paper & Party Supplies",
  },
  {
    src: "https://i.etsystatic.com/37231598/r/il/27c1c1/4519144240/il_680x540.4519144240_oc1g.jpg",
    href: "/toys-&-games",
    title: "Toy's & Games",
  },
  {
    src: "https://i.etsystatic.com/10610960/c/2000/1589/0/863/il/b921ba/4250484923/il_680x540.4250484923_3f0r.jpg",
    href: "/pet-supplies",
    title: "Pet Supplies",
  },
  // Add more categories as needed
];

export default function Categories() {
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
            <Link
              href={category.href}
              key={index}
              className='flex flex-col bg-white rounded-xl'
            >
              <span className='h-64 relative rounded-xl'>
                <Image
                  width={340}
                  height={270}
                  src={category.src}
                  alt={`geko-${category.title}`}
                  className='object-cover h-full w-full rounded-xl'
                  loading='lazy'
                />
              </span>
              <span className='p-4 text-center font-semibold'>
                <span className='wt-screen-reader-only'>{category.title}</span>
              </span>
            </Link>
          ))}
        </div>
        {showAllCategories ? (
          <button
            type='button'
            className='border border-blue-600 transition-all text-black text-sm rounded-full px-5 py-2 ml-4'
            onClick={toggleCategories}
          >
            Show Less
          </button>
        ) : (
          <button
            type='button'
            className='border border-blue-600 transition-all text-black text-sm rounded-full px-5 py-2 ml-4'
            onClick={toggleCategories}
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
}
