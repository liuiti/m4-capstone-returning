import { Router } from "express";
import consoleRouter from "./console.routes";
import jogoRouter from "./jogos.routes";
import usuarioRouter from "./usuario.routes";
import enderecosRouter from "./enderecos.routes";

const routes = Router();

routes.use("/jogos", jogoRouter);
routes.use("/console", consoleRouter);
routes.use("/usuarios", usuarioRouter);
routes.use("/enderecos", enderecosRouter);

export default routes;
