import express from "express";
import { getUsers, registerUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(registerUser);

export default userRouter;
