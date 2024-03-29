import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";


class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;

   console.log(" ");
   console.log(name)
   console.log(email)
   console.log(admin)
   console.log(password)
   console.log(" ");

   const createUserService = new CreateUserService();

   const user = await createUserService.execute({
       name,
       email,
       admin,
       password
   })


    return response.json(user);
  }
}

export { CreateUserController };
