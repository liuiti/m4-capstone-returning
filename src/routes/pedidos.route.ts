import { Router } from "express";
import PedidosController from "../controllers/pedidos/pedidos.controller";


const pedidosRouter = Router();

pedidosRouter.post("",PedidosController.store);
pedidosRouter.get("", PedidosController.index);
pedidosRouter.get("/:id",PedidosController.show);
pedidosRouter.patch("/:id",PedidosController.update);
pedidosRouter.delete("/:id",PedidosController.delete);


export default pedidosRouter;