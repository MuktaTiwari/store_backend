import { Router } from "express";
import { CategoryContoller } from "../controllers/categoryController";

const router = Router();
const categoryController = new CategoryContoller();

router.get("/", categoryController.getALlCategory.bind(categoryController));

router.post("/category", categoryController.createCategory.bind(categoryController));

router.delete("/:id", categoryController.deleteCategory);

export default router;
