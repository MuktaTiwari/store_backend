import User, { IUser } from "../models/User";

export class UserService {
  async getUsers(): Promise<IUser[]> {
    return await User.find({});
  }

  async registerUser(userData: any): Promise<IUser> {
  // Destructure the required fields
  const { name, email, password } = userData;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }

  // Create user
  const user = await User.create({ name, email, password });

  return user;
}
}

export default new UserService();