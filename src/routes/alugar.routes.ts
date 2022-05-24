import { Router } from "express";
import AlugarConsoleController from "../controllers/AlugarConsole.controller";

const alugarConsoleRouter = Router();

alugarConsoleRouter.post("", AlugarConsoleController.store);
alugarConsoleRouter.get("", AlugarConsoleController.index);

export default alugarConsoleRouter;
