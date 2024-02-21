import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: any, { params: { id } }: any) {
  // console.log(id);
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });

    // console.log("Product fetched back back successfully", product);
    return NextResponse.json(product, {
      status: 200,
    });
  } catch (error) {
    console.log("Failed to fetch product", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PATCH(request: any, { params: { id } }: any) {
  try {
    const {
      name,
      images,
      description,
      shortDescription,
      currentPrice,
      initialPrice,
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
        shortDescription,
        currentPrice: parseFloat(currentPrice),
        initialPrice: parseFloat(initialPrice),
        categoryId,
        isPublished,
        isFeatured,
        slug,
        quantity: parseInt(quantity),
      },
    });
    console.log("Product deleted successfully", updatedProduct);
    return NextResponse.json(updatedProduct, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to update a product",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: any, { params: { id } }: any) {
  try {
    const product = await db.product.delete({
      where: {
        id,
      },
    });

    console.log("Product deleted successfully", product);
    return NextResponse.json(product, {
      status: 200,
    });
  } catch (error) {
    console.log("Failed to delete a product", error);
    return NextResponse.json(error, { status: 500 });
  }
}
