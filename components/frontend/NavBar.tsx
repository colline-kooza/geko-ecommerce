import React from "react";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";

const links = [
  { slug: "shop-deals", title: "shop deals" },
  { slug: "home-favorites", title: "home favorites" },
  { slug: "fashion-finds", title: "fashion finds" },
  { slug: "gift-guides", title: "gift guides" },
  { slug: "registry", title: "registry" },
];

const companyName = "Geko";

export default function NavBar() {
  return (
    <header className='border-b px-8 md:px-10 py-3'>
      {/* upper navbar */}
      <div className='w-full md:max-w-6xl md:mx-auto flex flex-col lg:flex-row item-start md:items-center md:justify-between'>
        {/* logo and the search */}
        <Link href='/'>
          <h2 className='text-2xl font-bold uppercase'>{companyName}</h2>
        </Link>

        <div className='bg-gray-100 border border-transparent focus-within:border-blue-500 flex rounded-full h-9 items-center px-4 w-full lg:w-2/4 mt-3 md:mx-auto max-lg:mt-6'>
          <Search className='mr-3 rotate-90' />
          <input
            type='email'
            placeholder='Search...'
            className='w-full outline-none placeholder:text-zinc-950 bg-transparent text-zinc-950 font-semibold text-sm'
          />
        </div>

        {/* signIn, favorites and the cart */}
        <div className='hidden lg:flex items-center gap-5'>
          <Link href='/register' className='text-sm font-bold'>
            sign in
          </Link>
          <Link href='/favorite'>
            <Heart className='mr-3' />
          </Link>
          <Link href='/cart' className='relative flex items-center'>
            <ShoppingCart />
            <div className='rounded-full bg-blue-500 text-white p-1 text-xs absolute z-[230] -right-4 -top-2 font-bold'>
              20
            </div>
          </Link>
        </div>
      </div>

      {/* downer navbar */}
      <div className='py-4 mt-3 flex justify-center m-auto items-center'>
        <ul
          id='collapseMenu'
          className='lg:flex max-lg:hidden justify-center item-center lg:space-x-10 lg:absolute'
        >
          {links.map((link, index) => (
            <li key={index} className='max-lg:border-b max-lg:py-2'>
              <Link
                href={link.slug}
                className='hover:text-[#007bff] capitalize text-zinc-950 font-bold text-[15px] block'
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
