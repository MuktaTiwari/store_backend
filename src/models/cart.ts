import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { User } from "./User";
import { Product } from "./products";

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
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  },
  { sequelize, tableName: "carts", timestamps: true }
);

User.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

Product.hasMany(Cart, { foreignKey: "product_id" });
Cart.belongsTo(Product, { foreignKey: "product_id" });
