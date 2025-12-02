import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface CategoryAttributes {
  id: number;
  name: string;
  description?: string;
}

interface CategoryCreation extends Optional<CategoryAttributes, "id"> {}

export class Category extends Model<CategoryAttributes, CategoryCreation> implements CategoryAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
}

Category.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  { sequelize, tableName: "categories" }
);
