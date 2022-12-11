import DataTypes from "sequelize";
import { db } from "./connectToDb.js";

export const Video = db.define(
  "video",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    chapter_id: DataTypes.INTEGER,
    date: DataTypes.INTEGER,
    url: DataTypes.STRING,
    title: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "video",
  }
);