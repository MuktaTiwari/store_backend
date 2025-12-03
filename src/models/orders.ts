import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { User } from "./User";

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
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    total_amount: { type: DataTypes.DECIMAL, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "pending" },
    payment_status: { type: DataTypes.STRING, defaultValue: "pending" },
  },
  { sequelize, tableName: "orders", timestamps: true }
);

User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });
