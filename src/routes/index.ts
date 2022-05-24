import { Router } from "express";
import alugarConsoleRouter from "./alugar.routes";
import consoleRouter from "./console.routes";
import enderecoRouter from "./enderecos.routes";
import jogoRouter from "./jogos.routes";
import usuarioRouter from "./usuario.routes";
import loginRouter from "./login.routes";
import alugarJogoRouter from "./alugarJogo.routes";



const routes = Router();

routes.use("/consoles", consoleRouter);
routes.use("/jogos", jogoRouter);
routes.use("/usuarios", usuarioRouter);
routes.use("/enderecos", enderecoRouter);
routes.use("/alugar/consoles", alugarConsoleRouter);
routes.use("/login", loginRouter);
routes.use("/alugar/jogos", alugarJogoRouter);

export default routes;
