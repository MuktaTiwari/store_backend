import { Response,Request } from "express";
import { UserService } from "../service/userService";



export class UserController{




  userService = new UserService()


  public async getAllUsers (req:Request , res:Response){


    try{

    }
    catch(error){

    }
  }


  public async createUser(req:Request, res:Response){

    try{


    }
    catch(error){
      
    }

  }

}