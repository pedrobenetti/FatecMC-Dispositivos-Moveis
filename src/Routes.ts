import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { ListUsersController } from "./controllers/user/ListUserController"

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";

import { CreateSaleController } from "./controllers/sales/CreateSalesController";
import { ListSalesController } from "./controllers/sales/ListSalesController";

/*
import { UpdateUserController} from "./controllers/UpdateUserController";
import { DeleteUserController} from "./controllers/DeleteUserController";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { ensureAdmin} from "./middlewares/ensureAdmin";
import { ensureAuthenticated} from "./middlewares/ensureAuthenticated";



const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();
const autenticationUserController  = new AuthenticateUserController();
*/
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const router = Router();
router.post("/users", createUserController.handle);
router.get("/listusers", listUsersController.handle);

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
router.post("/category", createCategoryController.handle);
router.get("/listcategory", listCategoryController.handle);

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
router.post("/product", createProductController.handle);
router.get("/listproduct", listProductController.handle);

const createSalesController = new CreateSaleController();
const listSalesController = new ListSalesController();
router.post("/sales", createSalesController.handle);
router.get("/listsales", listSalesController.handle);


/*
router.post("/login", autenticationUserController.handle);

router.get("/users",  ensureAuthenticated,ensureAdmin,listUsersController.handle);

router.use(ensureAdmin)
router.delete("/users/:id", deleteUserController.handle);
router.put("/users", updateUserController.handle);
*/
export {router}
