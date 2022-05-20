import { Router } from "express";
import atualizarUsuarioController from "../controllers/usuario/atualizar.controller";
import deletarUsuarioController from "../controllers/usuario/deletar.controller";
import criarUsuarioController from "../controllers/usuario/criar.controller";
import listarUsuarioController from "../controllers/usuario/listar.controller";
import usuarioInfoExiste from "../middlewares/usuarioInfoExiste.middlewares";

const usuarioRouter = Router();

usuarioRouter.post("/criar-usuario", criarUsuarioController);
usuarioRouter.get("", listarUsuarioController);
usuarioRouter.patch("/:id", usuarioInfoExiste, atualizarUsuarioController);
usuarioRouter.delete("/:id", deletarUsuarioController);

export default usuarioRouter;
