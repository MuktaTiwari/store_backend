import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface CartAttributes {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
}

interface CartCreation extends Optional<CartAttributes, "id"> {}

export class Cart extends Model<CartAttributes, CartCreation> implements CartAttributes {
  public id!: number;
  public user_id!: number;
  public product_id!: number;
  public quantity!: number;
}

Cart.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
  { sequelize, tableName: "cart" }
);
