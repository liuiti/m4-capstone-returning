import { Router } from "express";
import consoleRouter from "./console.route";
import jogoRouter from "./jogos.routes";

const routes = Router();

routes.use("/jogos", jogoRouter);
routes.use("/console", consoleRouter);

export default routes;
