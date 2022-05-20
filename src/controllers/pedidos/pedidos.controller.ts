import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import PedidosServices from "../../services/pedidos/pedidos.service";

export default class PedidosController {
  static async store(req: Request, res: Response) {
    const { carrinho_id } = req.body;

    const criandoPedido = PedidosServices.criarPedido(carrinho_id);

    return res.status(201).json(criandoPedido);
  }

  static async index(req: Request, res: Response) {
    const listarPedidos = PedidosServices.listarPedidos;

    return res.status(200).json(listarPedidos);
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const listarUnicoPedido = PedidosServices.listarUnicoPedido(id);

    return res.status(200).json(listarUnicoPedido);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { carrinhoId } = req.body;
    const atualizarPedido = PedidosServices.atualizarPedido(id, carrinhoId);

    return res.status(200).json(atualizarPedido);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deletarPedido = PedidosServices.deletarPedido(id);

    if (!deletarPedido) {
      throw new AppError("Id do Pedido inexistente!");
    }

    return res.status(200).json({ message: "Pedido Deletado" });
  }
}
