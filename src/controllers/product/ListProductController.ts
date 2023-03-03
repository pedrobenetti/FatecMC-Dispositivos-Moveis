import { Request, Response } from "express";

class ListProductController {
    async handle(request: Request, response: Response) {

        const products = [
            {
                id: "1",
                name: "O senhor das armas",
                description: "O senhor das armas",
                price: "60",
                url: "sei la"
            }
        ];
        return response.json(products);
    }
}

export { ListProductController };
