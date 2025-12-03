import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { Order } from "./orders";
import { Product } from "./products";


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
    order_id: { type: DataTypes.INTEGER, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
  },
  { sequelize, tableName: "order_items", timestamps: true }
);

Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

Product.hasMany(OrderItem, { foreignKey: "product_id" });
OrderItem.belongsTo(Product, { foreignKey: "product_id" });
