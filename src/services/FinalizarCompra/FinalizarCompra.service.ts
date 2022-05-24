import { Carrinho } from "../../models/Carrinhos";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { Usuario } from "../../models/Usuarios";
import { Pedido } from "../../models/Pedidos";
import { Console_Pedido } from "../../models/Consoles_Pedidos";
import { Jogo_Pedido } from "../../models/Jogos_Pedidos";
import { Jogo } from "../../models/Jogos";
import { Console } from "../../models/Consoles";

export default class FinalizarCompraService {
  static async execute(id: string) {
    const carrinhoRepositorio = AppDataSource.getRepository(Carrinho);

    const usuarioRepositorio = AppDataSource.getRepository(Usuario);

    const pedidoRepositorio = AppDataSource.getRepository(Pedido);

    const jogoPedidoRepositorio = AppDataSource.getRepository(Jogo_Pedido);

    const consolePedidosRepositorio =
      AppDataSource.getRepository(Console_Pedido);

    const consoleRepositorio = AppDataSource.getRepository(Console);

    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    //selecionar carrinho do usuario
    const carrinho = await carrinhoRepositorio.findOne({
      where: { usuarioId: id },
    });

    if (!carrinho) {
      throw new AppError("Carrinho não encontrado");
    }
    //encontrando na tabela pedidos o crrinho com id igual do
    const pedidos = await pedidoRepositorio.findOne({
      where: { carrinhoId: carrinho.id },
    });

    if (!pedidos) {
      throw new AppError("Pedido não encontrado");
    }

    const consolePedidos = await consolePedidosRepositorio.findBy({
      pedidoId: pedidos.id,
    });

    if (!consolePedidos) {
      throw new AppError("Consoles pedidos não encontrados");
    }
    consolePedidos.forEach(async (item) => {
      const consoles = await consoleRepositorio.findOne({
        where: { id: item.consoleId },
      });

      if (!consoles) {
        throw new AppError("Consoles não encontrado");
      }

        consoles.disponivel = false;
        
        await consoleRepositorio.save(consoles)
    });
      
      
      
      
      
  }
}
