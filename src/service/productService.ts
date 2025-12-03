import { IProduct } from "../interface/productInterface";
import { Product } from "../models/products";

export class ProductService {
  private productModel = Product;

  public async getAllProduct(): Promise<IProduct[]> {
    try {
      const responseData = await this.productModel.findAll(); // Mongoose find
      return responseData;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }

  public async createProduct(requestData: IProduct): Promise<IProduct> {
    try {
      const responseData = await this.productModel.create(requestData);
      return responseData;
    } catch (error) {
      throw new Error("Failed to create product");
    }
  }
}
