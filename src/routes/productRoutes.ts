import { Router } from "express";
import upload from "../middleware/upload";
import { ProductController } from "../controllers/productController";

const router = Router();
const productController = new ProductController();

router.get("/products", productController.getAllProduct.bind(productController));
router.post(
  "/products",
  upload.single("image"), // Name of your file field in FormData
  productController.createProduct.bind(productController)
);

export default router;
