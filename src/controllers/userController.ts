import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken";
import userService from "../service/userService";

// GET /api/users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users);
});

// POST /api/users
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = await userService.registerUser(name, email, password);

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id.toString()),
  });
});
