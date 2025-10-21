import express from "express";
import * as authcontroller from "../controllers/auth.controller.js"
import { asyncHandler } from "../utils/helpers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { loginValidator } from "../validators/auth.validators.js";
import { validateRequest } from "../middlewares/validator.middleware.js";

const router = express.Router();

router.post("/login", loginValidator(), validateRequest, asyncHandler(authcontroller.login ))

router.post("/register", asyncHandler(authcontroller.register ))
    


router.get("/me", authenticateUser, asyncHandler(authcontroller.getCurrentUser))

export default router;