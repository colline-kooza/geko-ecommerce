import { ProductForm } from "@/components/DashboardComponents/ProductForm";
import getData from "@/utils/getData";
import React from "react";

export default async function page() {
  const categories = await getData("category");
  // console.log(categories);

  return (
    <div>
      <ProductForm categories={categories} />
    </div>
  );
}
