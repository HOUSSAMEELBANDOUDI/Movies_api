import { body } from "express-validator"


export function loginValidator() {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please provide a valid email address"),

    body("password")
      .notEmpty()
      .withMessage("Password is required"),
  ];
}
