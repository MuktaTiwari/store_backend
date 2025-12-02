import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User, { IUser } from "../models/User";
import generateToken from "../utils/generateToken";

// GET /api/users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users: IUser[] = await User.find({});
  res.json(users);
});

// POST /api/users
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user: IUser = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id.toString()),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
