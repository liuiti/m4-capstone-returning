import JogosController from "../controllers/Jogos.controller";

import { Router } from "express";

const jogoRouter = Router();

jogoRouter.post("", JogosController.store);
jogoRouter.get("", JogosController.index);
jogoRouter.delete("/:id", JogosController.delete);
jogoRouter.patch("/:id", JogosController.update);

export default jogoRouter;
