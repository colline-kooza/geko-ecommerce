import db from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, context: any) {
  const { params } = context;
  const id = params.id;
  // console.log(id);

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
