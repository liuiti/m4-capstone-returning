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
  static async execute(id: string, token: string) {
    let total = 0;

    const carrinhoRepositorio = AppDataSource.getRepository(Carrinho);

    const usuarioRepositorio = AppDataSource.getRepository(Usuario);

    const pedidoRepositorio = AppDataSource.getRepository(Pedido);

    const jogoPedidoRepositorio = AppDataSource.getRepository(Jogo_Pedido);

    const consolePedidosRepositorio =
      AppDataSource.getRepository(Console_Pedido);

    const consoleRepositorio = AppDataSource.getRepository(Console);

    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const carrinho = await carrinhoRepositorio.findOne({
      where: { usuarioId: id },
    });

    if (!carrinho) {
      throw new AppError("Carrinho não encontrado");
    }
    const pedidos = await pedidoRepositorio.findBy({
      carrinhoId: carrinho.id,
    });
    //verificar o que tem id igual ao do nosso carrinho

    if (!pedidos) {
      throw new AppError("Pedido não encontrado");
    }

    let usuario = await usuarioRepositorio.findOne({
      where: { id },
    });
    if (!usuario) {
      throw new AppError("Usuário com esse id não existe");
    }

    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
    pedidos.forEach(async (pedido) => {
      const consolePedidos = await consolePedidosRepositorio.findBy({
        pedidoId: pedido.id,
      });
      const jogoPedidos = await jogoPedidoRepositorio.findBy({
        pedidoId: pedido.id,
      });
      if (!jogoPedidos) {
        throw new AppError("Jogos pedidos não encontrado");
      }
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
        await consoleRepositorio.save(consoles);
      });

      jogoPedidos.forEach(async (item) => {
        const jogos = await jogoRepositorio.findOne({
          where: { id: item.jogoId },
        });
        if (!jogos) {
          throw new AppError("Jogos não encontrado");
        }
        jogos.disponivel = false;

        await jogoRepositorio.save(jogos);
      });
    });

    pedidos.forEach(async (pedido) => {
      const consolePedidos = await consolePedidosRepositorio.findBy({
        pedidoId: pedido.id,
      });
      consolePedidos.forEach(async (item) => {
        const consoles = await consoleRepositorio.findBy({
          id: item.consoleId,
        });

        total += consoles.reduce((valorAntigo, valorAtual) => {
          return Number(valorAntigo) + Number(valorAtual.valor);
        }, 0);
        carrinho.total = total;
        await carrinhoRepositorio.save(carrinho);
      });
    });

    console.log(carrinho.total);
    return { usuario, carrinho };
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
  }
}
