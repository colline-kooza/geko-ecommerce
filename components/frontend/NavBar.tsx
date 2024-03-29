"use client";
import React from "react";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "../CartContext";
import { useUser } from "@clerk/nextjs";

const links = [
  { slug: "shop-deals", title: "shop deals" },
  { slug: "home-favorites", title: "home favorites" },
  { slug: "fashion-finds", title: "fashion finds" },
  { slug: "gift-guides", title: "gift guides" },
  { slug: "registry", title: "registry" },
];

const companyName = "Geko";

export default function NavBar() {
  const { cart } = useCart();
  const { user, isLoaded, isSignedIn } = useUser();
  // console.log(user )
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }
  return (
    <header className='border-b py-3'>
      {/* upper navbar */}
      <div className='w-full md:max-w-7xl px-8 md:mx-auto flex flex-col lg:flex-row item-start md:items-center md:justify-between'>
        {/* logo and the search */}
        <Link href='/'>
          <h2 className='text-2xl font-bold uppercase'>{companyName}</h2>
        </Link>

        <form action='/search' className='max-w-3xl w-full px-4'>
          <div className='relative'>
            <input
              type='text'
              className='w-full h-12 border py-3 px-6 rounded-full'
              placeholder='Search...'
            />
            <button type='submit'>
              <Search className='h-6 w-6 absolute top-2.5 right-3' />
            </button>
          </div>
        </form>

        {/* signIn, favorites and the cart */}
        <div className='hidden lg:flex items-center gap-5'>
      
         {
          user ?
  <div className="relative inline-block">
  <img className="inline-block size-[38px] rounded-full" src={user.imageUrl
} alt="Image Description"/>

  <span className="absolute bottom-0 end-0 block size-2.5 rounded-full ring-2 ring-white bg-red-400"></span>
</div>
          :   <Link href='/register' className='text-sm font-bold'>
          LogIn
          </Link> 
         }
         
          <Link href='/favorite'>
            <Heart className='mr-3' />
          </Link>
          <Link href='/cart' className='relative flex items-center'>
            <ShoppingCart />
            <div className='rounded-full bg-blue-500 text-white py-1 px-2 text-xs absolute z-[230] -right-4 -top-2 font-bold'>
            {cart.length}
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
