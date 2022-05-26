import { Router } from "express";
import DevolverConsoleController from "../controllers/devolverConsole.controller";
import DevolverJogoController from "../controllers/devolverJogo.controller";

const devolverRouter = Router();

/* ROTAS DE CONSOLES */

devolverRouter.post("/consoles", DevolverConsoleController.store);

/* ROTAS DE JOGOS */

devolverRouter.post("/jogos", DevolverJogoController.store);

export default devolverRouter;
