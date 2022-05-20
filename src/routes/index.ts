import { Router } from "express";

import consoleRouter from "./console.routes";
import enderecoRouter from "./enderecos.routes";
import carrinhoRouter from "./carrinho.routes";
import jogoRouter from "./jogos.routes";
import pedidosRouter from "./pedidos.route";
import usuarioRouter from "./usuario.routes";

const routes = Router();

routes.use("/console", consoleRouter);
routes.use("/jogos", jogoRouter);
routes.use("/usuarios", usuarioRouter);

routes.use("/pedidos", pedidosRouter)

routes.use("/enderecos", enderecoRouter);

routes.use("/carrinho",carrinhoRouter)

export default routes;
