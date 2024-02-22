import React from "react";
import Link from "next/link";
import Image from "next/image";
import CategoryHead from "../frontend/CategoryHead";
import getData from "@/utils/getData";

interface Product {
  currentPrice: string;
  id: string;
  images: string;
  price: string;
  categoryId:string
}

export default async function CategoryDetailedPage({
  category, categories
}:any)  {
  const allPrdtx= await getData("products")
  const catId = category.id;
  
  const filteredProducts = allPrdtx.filter((prdt: Product) => prdt.categoryId === catId);
  return (
    <>
      <div className="bg-white">
        <div className="flex flex-col gap-8 justify-center max-w-7xl mx-auto py-10 px-8 text-zinc-950">
          <div className="text-center">
            <h3 className="font-normal text-3xl">{category.title}</h3>
            <p className="text-sm">{category.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
            {filteredProducts.map((item: Product) => (
              <Link
                key={item.id}
                href={`/d/${item.id}`}
                className="flex items-center justify-center relative"
              >
                <Image
                  src={item.images[0]}
                  alt="categories"
                  width={200}
                  height={270}
                  className="rounded-lg px-1 object-cover w-full h-full"
                />
                <h2 className="flex absolute bg-slate-50 bottom-5 px-8 py-1 rounded-full text-sm font-bold">
                  {item.currentPrice}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CategoryHead title="Other Categories" categories={categories} />
    </>
  )
            }