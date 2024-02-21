import { ProductForm } from "@/components/DashboardComponents/ProductForm";
import getData from "@/utils/getData";
import React from "react";
interface PageProps {
  params: {
    id: string;
  };
}
export default async function page({ params: { id } }: PageProps) {
  const product = await getData(`products/${id}`);
  // console.log(product);
  const categories = await getData(`category`);

  return (
    <div>
      <ProductForm initialData={product} categories={categories} />
    </div>
  );
}
