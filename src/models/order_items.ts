import mongoose, { Schema, Document } from "mongoose";

export interface IOrderItem extends Document {
  order_id: mongoose.Schema.Types.ObjectId;
  product_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
  price: number;
}

const OrderItemSchema = new Schema(
  {
    order_id: { type: Schema.Types.ObjectId, ref: "Order" },
    product_id: { type: Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    price: Number,
  },
  { timestamps: true }
);

export default mongoose.model<IOrderItem>("OrderItem", OrderItemSchema);
