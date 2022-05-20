import { Router } from "express";
import atualizarUsuarioController from "../controllers/usuario/atualizar.controller";
import deletarUsuarioController from "../controllers/usuario/deletar.controller";
import criarUsuarioController from "../controllers/usuario/criar.controller";
import listarUsuarioController from "../controllers/usuario/listar.controller";
import usuarioInfoExiste from "../middlewares/usuarioInfoExiste.middlewares";

const usuarioRouter = Router();

usuarioRouter.post("/criar-usuario", criarUsuarioController); //testado e  ok
usuarioRouter.get("/listar", listarUsuarioController); // testado e ok
usuarioRouter.patch("/atualizar/:id", usuarioInfoExiste, atualizarUsuarioController);  //testada e ok
usuarioRouter.delete("/deletar/:id", deletarUsuarioController);

export default usuarioRouter;
