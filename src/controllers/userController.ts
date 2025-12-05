import { Request, Response } from "express";
import { UserService } from "../service/userService";

export class UserController {
  userService = new UserService();

  public async register(req: Request, res: Response) {
    try {
      const requestData = req.body;
      const result = await this.userService.register(requestData);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async login(req: Request, res: Response) {
    const requestData = req.body;
    try {
      const result = await this.userService.login(requestData);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
