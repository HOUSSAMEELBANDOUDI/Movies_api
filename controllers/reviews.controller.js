import { Review, User, Movie } from "../models/index.js";

export async function createReview(req, res) {

     const review = await Review.create({
        rating : req.body.rating,
        text: req.body.text,
        userId: req.user.id,
        movieId: +req.params.movieId

     })
     res.status(201).json(review);
}

export async function getReviewsByMovieId(req, res) {
  const reviews = await Review.findAll({
    where: { movieId: +req.params.movieId },
    include: [
      {
        model: User,
        as: "user",
        attributes: ["id", "name"], // only return basic user info
      },
      {
        model: Movie,
         as: "movie",
        attributes: ["id", "name"], // include movie info
      },
    ],
  });

  return res.status(200).json({ reviews });
}