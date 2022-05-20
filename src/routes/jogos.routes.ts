import { Router } from "express";
import JogosController from "../controllers/Jogos.controller";

const jogoRouter = Router();

jogoRouter.post("", JogosController.store);
jogoRouter.get("", JogosController.index);

export default jogoRouter;
