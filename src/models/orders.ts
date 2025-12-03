import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  user_id: mongoose.Schema.Types.ObjectId;
  total_amount: number;
  status: string;
  payment_status: string;
  items: mongoose.Schema.Types.ObjectId[];
}

const OrderSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    total_amount: Number,
    status: { type: String, default: "pending" },
    payment_status: { type: String, default: "pending" },

    // List of order item refs
    items: [
      { type: Schema.Types.ObjectId, ref: "OrderItem" }
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
