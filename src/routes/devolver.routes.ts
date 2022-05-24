import { Router } from "express";
import DevolverConsoleController from "../controllers/devolverConsole.controller";

const devolverRouter = Router();

/* ROTAS DE CONSOLES */
devolverRouter.post("/consoles", DevolverConsoleController.store);
/* ROTAS DE JOGOS */

export default devolverRouter;
