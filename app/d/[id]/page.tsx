  import BreadCrumb from '@/components/detailed-page/BreadCrumb'
  import DetailsComponent from '@/components/detailed-page/DetailsComponent'
  import Swiper from '@/components/detailed-page/Swiper'
  import RecentlyViewed from '@/components/frontend/RecentlyViewed';
  import getData from '@/utils/getData';
  import React from 'react'

  interface Product {
    id: string; 
    title: string;
    price: number; 
    description: string;
    categoryId: string;
    images: string[];
  }

  interface PageProps {
    params: {
      id: string;
    };
  }

  export default async function page({ params: { id } }: PageProps) {
    const product = await getData(`products/${id}`);
    const productImages= product.images
    // console.log(product)
    const categoryId = product.categoryId; 
    const allProducts = await getData("products");
    const currentPage = product.name;
    const relatedProducts = allProducts.filter((prdt: Product) => {
      return prdt.categoryId === categoryId && prdt.id !== id; 
    });
    // console.log(relatedProducts);
    return (
      <div className='lg:py-3 lg:px-8 md:px-3 px-1'>
        <BreadCrumb currentPage={currentPage} />
        <div className='w-full min-h-screen py-5 lg:flex lg:flex-row md:flex-row flex-col lg:gap-4 gap-5'>
          <div className='lg:w-[50%] w-full min-h-[60vh]'>
            <Swiper  images={productImages}/>
          </div>
          <div className='lg:w-[50%] w-full min-h-screen'>
            <DetailsComponent product={product}/>
          </div>
        </div>
        <div className=''>
          <h2 className='font-bold text-lg border-b border-gray-800 w-[100%] lg:w-[20%]'>RELATED PRODUCTS</h2>
          <div className='mt-6'>
            <RecentlyViewed title="" products={relatedProducts}/>
          </div>
        </div>
      </div>
    );
  }
