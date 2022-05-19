import { Router } from "express";
import consoleRouter from "./console.route";
import jogoRouter from "./jogos.routes";
import usuarioRouter from "./usuario.routes";

const routes = Router();

routes.use("/jogos", jogoRouter);
routes.use("/console", consoleRouter);
routes.use("/usuarios", usuarioRouter);

export default routes;
