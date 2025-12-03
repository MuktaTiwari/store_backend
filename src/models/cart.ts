import mongoose, { Schema, Document } from "mongoose";

export interface ICart extends Document {
  user_id: mongoose.Schema.Types.ObjectId;
  product_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

const CartSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ICart>("Cart", CartSchema);
