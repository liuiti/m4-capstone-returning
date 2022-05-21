import { Router } from "express";
import AlugarController from "../controllers/Aluguel.controller";

const aluguelRouter = Router();

aluguelRouter.post("/:id", AlugarController.store);



export default aluguelRouter;
