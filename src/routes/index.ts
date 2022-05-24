import { Router } from "express";
import alugarRouter from "./alugar.routes";
import consoleRouter from "./console.routes";
import enderecoRouter from "./enderecos.routes";
import jogoRouter from "./jogos.routes";
import usuarioRouter from "./usuario.routes";
import loginRouter from "./login.routes";
import devolverRouter from "./devolver.routes";

const routes = Router();

routes.use("/consoles", consoleRouter);
routes.use("/jogos", jogoRouter);
routes.use("/usuarios", usuarioRouter);
routes.use("/enderecos", enderecoRouter);
routes.use("/alugar", alugarRouter);
routes.use("/login", loginRouter);
routes.use("/devolver", devolverRouter);

export default routes;
