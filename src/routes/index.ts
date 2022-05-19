import { Router } from "express";
import jogoRouter from "./jogos.routes";
import usuarioRouter from "./usuario.routes";

const routes = Router();

routes.use("/jogos", jogoRouter);
routes.use("/usuarios", usuarioRouter);

export default routes;
