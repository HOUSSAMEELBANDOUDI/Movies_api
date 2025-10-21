import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Review = sequelize.define("Review", {
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
})

// ✅ Associate Review with User and Movie (belongsTo only)
Review.associate = (models) => {
  Review.belongsTo(models.User, {
    foreignKey: "userId",
    as: "user",
  });

  Review.belongsTo(models.Movie, {
    foreignKey: "movieId",
    as: "movie",
  });
};

export { Review };
