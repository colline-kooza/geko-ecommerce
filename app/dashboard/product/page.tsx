import Delete from "@/components/DashboardComponents/DeleteBtn";
import Head from "@/components/DashboardComponents/Head";
import getData from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPencilSquare } from "react-icons/bs";

export default async function page() {
  const products = await getData("products");
  //   console.log(products)
  return (
    <div>
      <Head
        title={"Create a new product according to it's category"}
        link={"/dashboard/product/create"}
      />
      <div>
        <div className='py-4 bg-white sm:py-16 lg:py-4'>
          <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div className='max-w-md mx-auto text-center'>
              <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                The Products
              </h2>
              <p className='mt-4 text-base font-normal leading-7 text-gray-600'>
                These are the products you have created so-far
              </p>
            </div>

            <div className='grid grid-cols-2 gap-6 mt-3 lg:mt-5 lg:gap-4 lg:grid-cols-4'>
              {products?.map((product: any) => {
                return (
                  <div key={product.id} className='relative group'>
                    <div className='overflow-hidden '>
                      <Image
                        width={1080}
                        height={1080}
                        className='object-cover w-36 h-36 transition-all duration-300 group-hover:scale-125'
                        src={product.images[0]}
                        alt=''
                      />
                    </div>
                    <div className='flex items-start justify-between mt-4 space-x-4'>
                      <div>
                        <h3 className='text-xs font-bold text-gray-900 sm:text-sm md:text-base'>
                          <p className='line-clamp-1'>
                            {product.name}
                            <span
                              className='absolute inset-0'
                              aria-hidden='true'
                            ></span>
                          </p>
                          <p className='line-clamp-1 text-sm font-medium'>
                            {product.shortDescription}
                            <span
                              className='absolute inset-0'
                              aria-hidden='true'
                            ></span>
                          </p>
                        </h3>
                        <div className='flex items-center mt-2.5 space-x-px'>
                          <svg
                            className='w-3 h-3 text-yellow-400 sm:w-4 sm:h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                          <svg
                            className='w-3 h-3 text-yellow-400 sm:w-4 sm:h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                          <svg
                            className='w-3 h-3 text-yellow-400 sm:w-4 sm:h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                          <svg
                            className='w-3 h-3 text-gray-300 sm:w-4 sm:h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                          <svg
                            className='w-3 h-3 text-gray-300 sm:w-4 sm:h-4'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </div>
                      </div>

                      <div className='text-right flex gap-2 cursor-pointer absolute bottom-0 right-0'>
                        <Delete id={product.id} resourceName='products' />

                        <Link
                          href={`/dashboard/product/update/${product.id}`}
                          className='cursor-pointer text-xs font-bold sm:text-sm md:text-base text-green-600 '
                        >
                          <BsPencilSquare size={20}/>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
