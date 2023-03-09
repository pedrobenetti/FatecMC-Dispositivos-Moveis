import { Request, Response } from "express";

class DeleteUserController {
    async handle(request:Request, response:Response) {
        
        const id = request.params.id
        console.log(id)

        const user = {
            name: "Pedro",
            email: "pedro@gmail.com",
            admin: "true",
            password: "1234"
        }

        return response.json(user)
    }
}


export { DeleteUserController }
