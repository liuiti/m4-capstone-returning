import { Router } from "express";
import consoleRouter from "./console.routes";
import enderecoRouter from "./enderecos.routes";
import jogoRouter from "./jogos.routes";
import usuarioRouter from "./usuario.routes";
import aluguelRouter from "./alugar.routes";

const routes = Router();

routes.use("/console", consoleRouter);
routes.use("/jogos", jogoRouter);
routes.use("/usuarios", usuarioRouter);
routes.use("/enderecos", enderecoRouter);
routes.use("/alugar", aluguelRouter);

export default routes;
