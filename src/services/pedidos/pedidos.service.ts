import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { Pedido } from "../../models/Pedidos";

export default class PedidosServices {
  static async criarPedido(carrinhoId: string) {
    const pedidoRepositorio = AppDataSource.getRepository(Pedido);

    const novoPedido = new Pedido();
    novoPedido.carrinho_id = carrinhoId;

    pedidoRepositorio.create(novoPedido);

    await pedidoRepositorio.save(novoPedido);
    return novoPedido;
  }

  static async listarPedidos() {
    const pedidoRepositorio = AppDataSource.getRepository(Pedido);

    const listarPedido = await pedidoRepositorio.find();

    if (!listarPedido) {
      throw new AppError("Consoles inexistente!", 401);
    }
    return listarPedido;
  }
  static async listarUnicoPedido(id:string) {
    const pedidoRepositorio = AppDataSource.getRepository(Pedido);

    const listarPedido = await pedidoRepositorio.findOne({where:{id}});

    if (!listarPedido) {
      throw new AppError("Consoles inexistente!", 401);
    }

    return listarPedido;
  }

  static async atualizarPedido(id:string,carrinhoId:string) {
      const pedidoRepositorio = AppDataSource.getRepository(Pedido)
      const pedidoExistente = await pedidoRepositorio.find();

      const buscarPedido = pedidoExistente.find((item)=>{
          item.id === id
      })

      if (!buscarPedido) {
        throw new AppError("Id do Pedido inexistente!");
      }

      if(!pedidoExistente){
          throw new AppError("Pedido inexistente",401)
      }

      const pedidoAtualizado = new Pedido

      pedidoAtualizado.carrinho_id = carrinhoId 

      pedidoRepositorio.update(buscarPedido!.id,{
          carrinho_id : carrinhoId || buscarPedido!.carrinho_id
      })

      return pedidoAtualizado
  }

  static async deletarPedido(id:string) {
      const pedidoRepositorio = AppDataSource.getRepository(Pedido)
      const pedidoExistente = await pedidoRepositorio.find()

      const buscarPedido = pedidoExistente.find((item) => item.id === id);

      if (!pedidoExistente) {
        throw new AppError("Consoles inexistente!", 401);
      }

      await pedidoRepositorio.delete(buscarPedido!.carrinho_id)
      return true
  }
}
