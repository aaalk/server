import DataTypes from "sequelize";
import { db } from "./connectToDb.js";

export const Notes = db.define(
  "notes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    video_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    text: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "notes",
  }
);