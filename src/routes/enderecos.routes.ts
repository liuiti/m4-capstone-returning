import { Router } from "express";
import EndereçoController from "../controllers/Enderecos.controller";

const usuarioRouter = Router();

usuarioRouter.post("", EndereçoController.store);
usuarioRouter.get("", EndereçoController.index);
usuarioRouter.patch("/:id", EndereçoController.update);
usuarioRouter.delete("/:id", EndereçoController.delete);

export default usuarioRouter;
