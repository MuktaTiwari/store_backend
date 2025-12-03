import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { Order } from "./orders";

interface PaymentAttributes {
  id: number;
  order_id: number;
  payment_method: string;
  status: string;
  transaction_id: string;
  amount: number;
}

interface PaymentCreation extends Optional<PaymentAttributes, "id"> {}

export class Payment extends Model<PaymentAttributes, PaymentCreation> implements PaymentAttributes {
  public id!: number;
  public order_id!: number;
  public payment_method!: string;
  public status!: string;
  public transaction_id!: string;
  public amount!: number;
}

Payment.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order_id: { type: DataTypes.INTEGER, allowNull: false },
    payment_method: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    transaction_id: { type: DataTypes.STRING },
    amount: { type: DataTypes.DECIMAL },
  },
  { sequelize, tableName: "payments", timestamps: true }
);

Order.hasOne(Payment, { foreignKey: "order_id" });
Payment.belongsTo(Order, { foreignKey: "order_id" });
