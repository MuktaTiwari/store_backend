import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface OrderAttributes {
  id: number;
  user_id: number;
  total_amount: number;
  status: string;
  payment_status: string;
}

interface OrderCreation extends Optional<OrderAttributes, "id"> {}

export class Order extends Model<OrderAttributes, OrderCreation> implements OrderAttributes {
  public id!: number;
  public user_id!: number;
  public total_amount!: number;
  public status!: string;
  public payment_status!: string;
}

Order.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: DataTypes.INTEGER,
    total_amount: DataTypes.DECIMAL,
    status: { type: DataTypes.STRING, defaultValue: "pending" },
    payment_status: { type: DataTypes.STRING, defaultValue: "pending" },
  },
  { sequelize, tableName: "orders" }
);
