import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { Category } from "./categories";
import { IProduct } from "../interface/productInterface";



interface ProductCreation extends Optional<IProduct, "id"> {}

export class Product extends Model<IProduct, ProductCreation> implements IProduct {
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
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },  // FIXED
    price: { type: DataTypes.DECIMAL, allowNull: false },
    stock: { type: DataTypes.STRING, allowNull:true },
    image_url: { type: DataTypes.STRING },
    category_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, tableName: "products", timestamps: true }
);

Product.belongsTo(Category, { foreignKey: "category_id" });
Category.hasMany(Product, { foreignKey: "category_id" });
