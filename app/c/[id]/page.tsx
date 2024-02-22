import CategoryDetailedPage from '@/components/CategoryDetailedComponents/CategoryDetailedPage';
import getData from '@/utils/getData';
import React from 'react';

interface Product {
  id: string;
  categoryId: string;
}

interface Params {
  id: string;
}

export default async function Page({ params: { id } }: { params: Params }) {
  const [category] = await Promise.all([
    getData(`category/${id}`),
  ]);
 const categories = await getData("category")
  return (
    <div>
      <CategoryDetailedPage categories={categories} category={category} />
    </div>
  );
}
