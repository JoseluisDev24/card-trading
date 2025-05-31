import mongoose, { Schema, Document, Types } from "mongoose";

export interface IProduct extends Document {
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  condition: "mint" | "near mint" | "light play" | "played" | "damaged";
  status: "available" | "traded" | "unavailable";
  owner?: Types.ObjectId;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    condition: {
      type: String,
      enum: ["mint", "near mint", "light play", "played", "damaged"],
      default: "near mint",
    },
    status: {
      type: String,
      enum: ["available", "traded", "unavailable"],
      default: "available",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", // Este será el modelo del usuario (cuando lo crees)
    },
  },
  { timestamps: true, collection: "products" }
);

const ProductModel =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default ProductModel;
