import { Router } from "express";
import CarrinhoController from "../controllers/Carrinho/carrinho.controller";

const carrinhoRouter = Router();

carrinhoRouter.get("",CarrinhoController.index)
carrinhoRouter.post("",CarrinhoController.store)
carrinhoRouter.delete("/:id",CarrinhoController.delete)

export default carrinhoRouter;