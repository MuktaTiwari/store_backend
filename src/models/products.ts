import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { Category } from "./categories";

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category_id: number;
}

interface ProductCreation extends Optional<ProductAttributes, "id"> {}

export class Product extends Model<ProductAttributes, ProductCreation> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
  public image_url!: string;
  public category_id!: number;
}

Product.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
  },
  { sequelize, tableName: "products" }
);

Product.belongsTo(Category, { foreignKey: "category_id" });
Category.hasMany(Product, { foreignKey: "category_id" });
