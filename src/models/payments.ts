import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  order_id: mongoose.Schema.Types.ObjectId;
  payment_method: string;
  status: string;
  transaction_id: string;
  amount: number;
}

const PaymentSchema = new Schema(
  {
    order_id: { type: Schema.Types.ObjectId, ref: "Order" },
    payment_method: String,
    status: String,
    transaction_id: String,
    amount: Number,
  },
  { timestamps: true }
);

export default mongoose.model<IPayment>("Payment", PaymentSchema);
