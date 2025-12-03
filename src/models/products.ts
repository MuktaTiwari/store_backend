import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category_id: mongoose.Schema.Types.ObjectId;
}

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: Number,
    stock: Number,
    image_url: String,

    // Relation to Category
    category_id: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
