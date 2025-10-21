// models/Movie.js
import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js"; // make sure this connects to your database

const Movie = sequelize.define("movies", {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // name is required
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false, // genre is required
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false, // release date is required
  },
});

Movie.associate = (models) => {
  Movie.hasMany(models.Review, {
    foreignKey: "movieId",
    as: "reviews",
  });
};

export { Movie };
