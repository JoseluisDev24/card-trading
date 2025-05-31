import { NextResponse } from "next/server";
import dbConnect from "@/utils/db-connect";
import ProductModel from "@/models/product.model";

export async function GET() {
  console.log("🔄 Iniciando GET /api/products");

  try {
    await dbConnect();

    const products = await ProductModel.find().lean();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products", error: String(error) },
      { status: 500 }
    );
  }
}
