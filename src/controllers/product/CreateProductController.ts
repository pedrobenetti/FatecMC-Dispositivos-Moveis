import { Request, Response } from "express";

class CreateProductController { 

    async handle(request: Request, response: Response) {
        const { id, name, description, price, url } = request.body;

        console.log(id)
        console.log(name)
        console.log(description)
        console.log(price)
        console.log(url)

        const product = { 
            id:id,
            name:name,
            description:description,
            price:price,
            url:url
        };

        return response.json(product);
    }
}

export { CreateProductController };
