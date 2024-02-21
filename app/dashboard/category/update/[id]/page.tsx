import { CategoryForm } from '@/components/DashboardComponents/CategoryForm'
import getData from '@/utils/getData'
import React from 'react'
interface PageProps {
  params: {
    id: string;
  };
}
export default async function page({params:{id}}:PageProps) {
  const category= await getData(`category/${id}`)
  return (
    <div>
        <CategoryForm initialData={category}/>
    </div>
  )
}
