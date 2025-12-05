import { Request, Response } from "express";
import { ProductService } from "../service/productService";

export class ProductController {
  private productService = new ProductService();

  public async getAllProduct(req: Request, res: Response) {
    try {
      const products = await this.productService.getAllProduct();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  public async createProduct(req: Request, res: Response) {
    try {
      const file = req.file;
      const data = req.body;
      const product = await this.productService.createProduct(data, file);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  public async deleteProduct(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const response = await this.productService.deleteProduct(productId);
      res.json(response);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}
