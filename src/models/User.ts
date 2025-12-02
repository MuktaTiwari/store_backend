import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  role?: string; // user / admin
}

interface UserCreation extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes, UserCreation> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: string;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "user" },
  },
  { sequelize, tableName: "users" }
);
