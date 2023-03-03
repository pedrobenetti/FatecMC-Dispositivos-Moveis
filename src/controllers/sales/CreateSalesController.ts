import { Request, Response } from "express";

class CreateSaleController { 
    
    async handle(request: Request, response: Response) {
        const { id, productId, userId, total, description, obs } = request.body;

        console.log(id)        
        console.log(productId)        
        console.log(userId)        
        console.log(total)        
        console.log(description)        
        console.log(obs)        

        const sale = {
            id:id,
            productId:productId,
            userId:userId,
            total:total,
            description:description,
            obs:obs
        };

        return response.json(sale);
    }
}

export { CreateSaleController };
