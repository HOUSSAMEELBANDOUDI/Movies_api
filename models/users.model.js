// models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // 👈 by default, users are not admins
  },
});

User.associate = (models) => {
  User.hasMany(models.Review, {
    foreignKey: "userId",
    as: "reviews",
  });
};

export  { User };
