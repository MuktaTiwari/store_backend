import { Request, Response } from "express";
import { ProductService } from "../service/productService";

export class ProductController {
  private productService = new ProductService();

  public async getAllProduct(req: Request, res: Response) {
    try {
      const products = await this.productService.getAllProduct();
      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server Error", error });
    }
  }

  public async createProduct(req: Request, res: Response) {
    try {
      const requestData = req.body;
      const productResponse = await this.productService.createProduct(requestData);
      return res.status(201).json(productResponse);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server Error", error });
    }
  }
}
