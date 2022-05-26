import { Router } from "express";
import UsuarioController from "../controllers/Usuario.controller";
import ensureAuth from "../middlewares/ensureAuth";
import usuarioInfoExiste from "../middlewares/usuarioInfoExiste.middlewares";

const usuarioRouter = Router();

usuarioRouter.post("", ensureAuth, UsuarioController.store);
usuarioRouter.get("", ensureAuth, UsuarioController.index);
usuarioRouter.patch(
  "/:id",
  ensureAuth,
  usuarioInfoExiste,
  UsuarioController.update
);
usuarioRouter.delete("/:id", ensureAuth, UsuarioController.delete);

export default usuarioRouter;
