import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request:any, { params: { id } }:any) {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch category",
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(request:any, { params: { id } }:any){
  try {
  const Category =await db.category.delete({
    where :{
      id
    },
  })
  return NextResponse.json(Category)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to delete category',
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request:any, { params: { id } }:any){
  try {
    const { description,imageUrl,title}=await request.json()
    console.log( description,imageUrl,title)
  const newCategory =await db.category.update({
    where :{
      id
    },
      data:{
       image:imageUrl, description , title
      }
    
  })
  // console.log(newCategory)
  return NextResponse.json(newCategory)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to update category',
      },
      {
        status: 500,
      }
    );
  }
}
