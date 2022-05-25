import { Router } from "express";
import AlugarJogoController from "../controllers/AlugarJogo.controller"

const alugarJogoRouter = Router()

alugarJogoRouter.post("", AlugarJogoController.store);

export default alugarJogoRouter;