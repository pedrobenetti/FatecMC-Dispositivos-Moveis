import { Request, Response } from "express";

class ListSalesController { 

    async handle(request: Request, response: Response) {
        
        const sales = [
            {
                id: "1",
                ProductId: "1",
                userId: "1",
                total: "60",
                description: "O senhor das armas",
                obs: "livro"
            }
        ];
        return response.json(sales);
    }
}

export { ListSalesController };
