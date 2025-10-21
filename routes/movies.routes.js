import express from "express";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { authenticateAdmin } from "../middlewares/admin.middleware.js";
import * as moviesController from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/",asyncHandler(moviesController.getMovies))

router.get("/:id",asyncHandler(moviesController.getMovie))

router.post("/",authenticateUser, 
    asyncHandler(authenticateAdmin), 
    asyncHandler(moviesController.createMovie) )

router.put("/:id",authenticateUser, 
    asyncHandler(authenticateAdmin), 
    asyncHandler(moviesController.updateMovie) )

router.delete("/:id",authenticateUser, 
    asyncHandler(authenticateAdmin), 
    asyncHandler(moviesController.deleteMovie) )

export default router;

