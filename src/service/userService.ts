import User, { IUser } from "../models/User";

export class UserService {
  async getUsers(): Promise<IUser[]> {
    return await User.find({});
  }

  async registerUser(name: string, email: string, password: string): Promise<IUser> {
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await User.create({ name, email, password });
    return user;
  }
}

export default new UserService();
