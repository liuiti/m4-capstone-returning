import { Usuario } from './../../models/Usuarios';
import { Jogo } from "./../../models/Jogos";
import { In } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { Pedido } from "../../models/Pedidos";
import { Jogo_Pedido } from "../../models/Jogos_Pedidos";
import jwt from "jsonwebtoken";

interface Request {
  jogo_id: string[];
  token: string | undefined;
}

export default class CriarAluguelJogo {
  static async execute({ jogo_id, token }: Request): Promise<Pedido> {
    const pedidoRepositorio = AppDataSource.getRepository(Pedido);

    const jogoPedidoRepositorio = AppDataSource.getRepository(Jogo_Pedido);

    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    if (!token) {
      throw new AppError("Token não encontrado");
    }

    //capturei o id do user
    const { usuarioCarrinho, sub }: any = jwt.decode(token);
    //capturei banco de dados de usuarios
    const usuarioRepositorio = AppDataSource.getRepository(Usuario);
    //capturei o usuario pelo ID
    const usuario = await usuarioRepositorio.findOne({
     where: {id: sub}
    });
    //validação do id do usuario
    if (!usuario) {
      throw new AppError("Usuário com esse id não existe");
    }
    
    usuario.pendencia = true
    console.log(usuario)


    const jogos = await jogoRepositorio.findBy({
      id: In(jogo_id),
    });

    if (jogos.length !== jogo_id.length) {
      throw new AppError("Lista invalida com esse id");
    }

    const pedido = pedidoRepositorio.create({ carrinhoId: usuarioCarrinho });

    await pedidoRepositorio.save(pedido);

    jogo_id.forEach(async (jogoId) => {
      const jogoPedido = jogoPedidoRepositorio.create({
        pedido: pedido,
        jogoId,
      });

      await jogoPedidoRepositorio.save(jogoPedido);
    });
    return pedido;
  }
}
