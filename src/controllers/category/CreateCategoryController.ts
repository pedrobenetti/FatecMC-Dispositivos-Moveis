import { Request, Response } from "express";

class CreateCategoryController {

    async handle(request: Request, response: Response) {
        const { id, name } = request.body;

        console.log(id)
        console.log(name)

        const category = {
            id:id,
            name:name
        };

        return response.json(category);
    }
}

export { CreateCategoryController };
