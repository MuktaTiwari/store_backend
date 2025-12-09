import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

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
    order_id: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    status: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
  },
  { sequelize, tableName: "payments" }
);
