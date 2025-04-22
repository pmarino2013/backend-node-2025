import { Router } from "express";
import {
  deleteUserId,
  getUsers,
  postUser,
  putUserId,
} from "../controllers/usuarios.js";

const routerUser = Router();

routerUser.get("/", getUsers);

routerUser.post("/", postUser);

routerUser.put("/:id", putUserId);

routerUser.delete("/:id", deleteUserId);

export default routerUser;
