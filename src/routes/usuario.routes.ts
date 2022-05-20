import { Router } from "express";
import UsuarioController from "../controllers/Usuario.controller";
import usuarioInfoExiste from "../middlewares/usuarioInfoExiste.middlewares";




const usuarioRouter = Router();

usuarioRouter.post("/criar-usuario", UsuarioController.store); 
usuarioRouter.get("/listar", UsuarioController.index); 
usuarioRouter.patch("/atualizar/:id", usuarioInfoExiste, UsuarioController.update);  
usuarioRouter.delete("/deletar/:id", UsuarioController.delete);

export default usuarioRouter;
