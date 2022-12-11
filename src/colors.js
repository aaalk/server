import DataTypes from "sequelize";
import { db } from "./connectToDb.js";

export const Colors = db.define(
  "colors",
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    value: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "colors",
  }
);

const colors = ["#0af", "#3b0", "#f90", "#f30", "#a3f"];
for (let i=1; i<6; i++) {
    await Colors.create({
        id: i,
        value: colors[i],
    });
}