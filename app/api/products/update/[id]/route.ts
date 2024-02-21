import db from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function PUT(request:any, { params: { id } }:any) {
  try {
    const {
      name,
      images,
      description,
      // price,
      categoryId,
      isPublished,
      isFeatured,
      slug,
      quantity,
    } = await request.json();

    const updatedProduct = await db.product.update({
      where: {
        id,
      },
      data: {
        name,
        images,
        description,
        // price,
        categoryId,
        isPublished,
        isFeatured,
        slug,
        quantity,
      },
    });

    console.log("Product updated successfully", updatedProduct);
    return NextResponse.json(updatedProduct, {
      status: 204,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to update product",
      },
      {
        status: 500,
      }
    );
  }
}
