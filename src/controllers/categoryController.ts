import { CategoryService } from "../service/categoryService"
import { Request, Response } from "express";


export class CategoryContoller{

    private categoryService = new CategoryService();


    public async getALlCategory(req:Request , res: Response){

        try{

            const response = await this.categoryService.getAllCategory();
            res.json(response)
        }
          catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
    }


    public async createCategory(req:Request, res:Response){

        try{

            const categoryData = req.body;

            const response = await this.categoryService.createCategory(categoryData);

            res.json(response);
        }
        catch(error){

            throw new Error("Error creating the category")
        }
    }


   public deleteCategory = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);

      const deleted = await this.categoryService.deleteCategory(id);

      if (!deleted) {
        res.status(404).json({ message: "Category not found" });
        return;
      }

      res.json({
        message: "Category deleted successfully"
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message
      });
    }
  };


}