import { Request, Response } from "express";

class ListCategoryController {
    async handle(request: Request, response: Response) { 

        const category = [
            {
                id: "1",
                name: "livros"  
            },
            {
                id: "2",
                name: "materiais escolares"
            }
        ];

        return response.json(category);
    }
}

export { ListCategoryController };
