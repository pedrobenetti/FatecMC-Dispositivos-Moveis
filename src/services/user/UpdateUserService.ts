import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    id: string;
    name: string;
    admin: boolean;
    password: string;
  }

  class UpdateUserService {
    async execute({ id, name,  admin , password }: IUserRequest) {

      const usersRepository = getCustomRepository(UsersRepositories);

      const userAlreadyExists = await usersRepository.findOne({
        id,
      });

      if (!userAlreadyExists) {
          throw new Error("User not exists")
      }
      const passwordHash = await hash(password, 8)
      userAlreadyExists.name=name
      userAlreadyExists.admin=admin
      userAlreadyExists.updated_at=new Date()
      userAlreadyExists.password=passwordHash

      return await usersRepository.update(id,userAlreadyExists)
      .then(f => {
          console.log(f);
          var messagmsgeDelete = {
            message:"Registro atualizado com sucesso"
          }
      
          return messagmsgeDelete;
          
      }, err => {
        throw new Error("Erro na atualização");
      });
  
      
    }
  }
  
  export { UpdateUserService };
