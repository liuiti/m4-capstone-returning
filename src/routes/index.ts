import { Router } from "express";
import consoleRouter from "./console.route";
const routes = Router();

routes.use("/console",consoleRouter);

export default routes;
