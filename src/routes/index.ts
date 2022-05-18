import { Router } from "express";
import jogoRouter from "./jogos.routes";

const routes = Router();

routes.use("/jogos", jogoRouter);

export default routes;
