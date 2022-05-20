import { Router } from "express";
import AtualizarConsoleController from "../controllers/consoles/AtualizarConsole.controller";
import CriarConsolesController from "../controllers/consoles/CriarConsole.controller";
import DeleteConsoleController from "../controllers/consoles/DeleteConsole.controller";
import ListarConsoleController from "../controllers/consoles/ListarConsole.controller";
import UnicoConsoleController from "../controllers/consoles/UnicoConsole.controller";

const consoleRouter = Router();

consoleRouter.post("", CriarConsolesController);
consoleRouter.get("", ListarConsoleController);
consoleRouter.get("/:id", UnicoConsoleController)
consoleRouter.patch("/:id",AtualizarConsoleController)
consoleRouter.delete("/:id",DeleteConsoleController)


export default consoleRouter;