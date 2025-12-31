import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface CategoryCreation extends Optional<ICategoryAttributes, "id"> {}

export class Category extends Model<ICategoryAttributes, CategoryCreation> implements ICategoryAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
}

Category.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
  },
  { sequelize, tableName: "categories", timestamps: true }
);
