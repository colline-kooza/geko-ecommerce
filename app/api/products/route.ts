import db from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      images,
      description,
      price,
      categoryId,
      isPublished,
      isFeatured,
      slug,
      quantity,
    } = await req.json();

    const existingProduct = await db.product.findUnique({
      where: {
        // Assuming `slug` is a unique property
        slug,
      },
    });

    if (existingProduct) {
      return NextResponse.json(
        { message: "Sorry, product already exists", Error },
        { status: 409 }
      );
    }

    const newProduct = await db.product.create({
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

    console.log("Product created successfully", newProduct);
    return NextResponse.json(newProduct, {
      status: 201,
    });
  } catch (error) {
    console.log("Failed to create a product", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await db.product.findMany({
      // include: {
      //   categories: true,
      // },
    });

    console.log("Products got back successfully", products);
    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    console.log("Failed to create a product", error);
    return NextResponse.json(error, { status: 500 });
  }
}
