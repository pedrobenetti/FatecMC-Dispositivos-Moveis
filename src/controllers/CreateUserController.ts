import { Request, Response } from "express";
//import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;

   console.log(name)

   console.log(email)
   console.log(admin)
   console.log(password)
   
   const user = {
      name:name,
      email:email,
      admin:admin,
      password:password
    };
 
    return response.json(user);
  }
}

export { CreateUserController };
