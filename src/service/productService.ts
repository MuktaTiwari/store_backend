import { IProduct } from "../interface/productInterface";
import { Product } from "../models/products";
import cloudinary from "../config/cloudinary";
import streamifier from "streamifier";

export class ProductService {
  private productModel = Product;

  public async getAllProduct(): Promise<IProduct[]> {
    try {
      const responseData = await this.productModel.findAll();
      return responseData;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }

  public async createProduct(
    requestData: IProduct,
    file?: Express.Multer.File
  ): Promise<IProduct> {
    try {
      let imageUrl = "";

      // Upload image only if file and buffer exist
      if (file && file.buffer) {
        imageUrl = await new Promise<string>((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "products" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result?.secure_url || "");
            }
          );

          streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
      }

      const responseData = await this.productModel.create({
        ...requestData,
        image_url: imageUrl, // Save image URL in DB
      });

      return responseData;
    } catch (error) {
      console.error("Product creation error:", error);
      throw new Error("Failed to create product");
    }
  }

  public async deleteProduct(id: string) {
    try {
      const response = await this.productModel.destroy({
        where: { id },
      });

      if (response === 0) {
        throw new Error("Product not found");
      }

      return response;
    } catch (error) {
      throw new Error("Failed to delete product");
    }
  }
}
