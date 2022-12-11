import DataTypes from "sequelize";
import { db } from "./connectToDb.js";

export const Chapters = db.define(
  "chapters",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "chapters",
  }
);