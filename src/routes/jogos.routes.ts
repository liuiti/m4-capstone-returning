import { Router } from "express";
import AtualizarJogoController from "../controllers/Jogos/AtualizarJogo.controller";
import CriarJogoController from "../controllers/Jogos/CriarJogo.controller";
import DeletarJogoController from "../controllers/Jogos/DeletarJogo.controller";
import ListarJogosController from "../controllers/Jogos/ListarJogos.controller";

const jogoRouter = Router();

jogoRouter.post("", CriarJogoController);
jogoRouter.get("", ListarJogosController);
jogoRouter.delete("/:id", DeletarJogoController);
jogoRouter.patch("/:id", AtualizarJogoController);

export default jogoRouter;
