import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface OrderItemAttributes {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
}

interface OrderItemCreation extends Optional<OrderItemAttributes, "id"> {}

export class OrderItem extends Model<OrderItemAttributes, OrderItemCreation> implements OrderItemAttributes {
  public id!: number;
  public order_id!: number;
  public product_id!: number;
  public quantity!: number;
  public price!: number;
}

OrderItem.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
  },
  { sequelize, tableName: "order_items" }
);
