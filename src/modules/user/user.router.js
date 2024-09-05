import { Router } from "express";
import { singup , signin } from "./user.controller.js";
import { asyncHandler } from "../../middleware/asyncHandelar.js";
import { isValid } from "../../middleware/validation.js";
import { signUpValidation , signInValidation} from "./user.validation.js";

export const userRouter = Router();
//singup
userRouter.post('/', isValid(signUpValidation) ,asyncHandler(singup))
//singin
userRouter.post('/',isValid(signInValidation),asyncHandler(signin))

export default userRouter
