import { Router } from "express";
import JogosController from "../controllers/jogos/Jogos.controller";

const jogoRouter = Router();

jogoRouter.post("", JogosController.store);
jogoRouter.get("", JogosController.index);

export default jogoRouter;
