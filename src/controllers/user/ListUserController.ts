import { Request, Response } from "express";
import { ListUserService } from "../../services/user/ListUserService";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = new ListUserService();

    const users = await listUsersService.execute();

    return response.json(users);
  }
}

export { ListUsersController };
