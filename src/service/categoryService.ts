import { Category } from "../models/categories";

export class CategoryService{


    private CategoryModel = Category;



    public async getAllCategory(): Promise<ICategoryAttributes[]>{
        try {

            const categoryResponse = await this.CategoryModel.findAll();

            return categoryResponse;
        }
        catch(error){
            throw new Error("Failed to fetch the error")
        }
    }


    public async createCategory(categoryData:ICategoryAttributes): Promise<ICategoryAttributes>{

        try{


            const response= await this.CategoryModel.create(categoryData);
            return response
        }

        catch(error){

            throw new Error("Error creating category")
        }

    }

 public async deleteCategory(id: number): Promise<boolean> {
    try {
      const deletedCount = await this.CategoryModel.destroy({
        where: { id }
      });

      return deletedCount > 0;
    } catch (error) {
      throw new Error("Error deleting the category");
    }
  }
}