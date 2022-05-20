import { Router } from "express";

import consoleRouter from "./console.route";
import jogoRouter from "./jogos.routes";
import pedidosRouter from "./pedidos.route";
import usuarioRouter from "./usuario.routes";

const routes = Router();

routes.use("/console",consoleRouter);
routes.use("/jogos", jogoRouter);
routes.use("/usuarios", usuarioRouter);
routes.use("/pedidos", pedidosRouter)

export default routes;
