import DataTypes from "sequelize";
import { db } from "./connectToDb.js";

export const Subtitles = db.define(
  "subtitles",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    video_id: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    text: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "subtitles",
  }
);