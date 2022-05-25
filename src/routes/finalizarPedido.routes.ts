import { Router } from "express";
import FinalizarCompra from "../controllers/FinalizarCompra.controller";

const finalizarPedidoRouter = Router()

finalizarPedidoRouter.post("", FinalizarCompra.store);

export default finalizarPedidoRouter;
