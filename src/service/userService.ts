import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class UserService {
  userModel = User;

  public async register(data: any) {
    const { name, email, password, adminCode } = data;

    // check if exists
    const userExists = await this.userModel.findOne({ where: { email } });
    if (userExists) {
      throw new Error("User already exists");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // determine role
    let role = "user";
    if (adminCode && adminCode === process.env.ADMIN_CODE) {
      role = "admin";
    }

    // create user
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return {
      message: "User registered successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  public async login(data: any) {
    const { email, password } = data;

    const user = await this.userModel.findOne({ where: { email } });
    if (!user) throw new Error("Invalid email or password");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) throw new Error("Invalid email or password");

    // generate token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "30d" }
    );

    return {
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}
