import db from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request:any, { params: { id } }:any) {
 
  try {
    const products = await db.product.findUnique({
      where: {
        id,
      },
    });

    console.log("Products fetched back back successfully", products);
    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    console.log("Failed to fetch products", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(request:any, { params: { id } }:any) {

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
