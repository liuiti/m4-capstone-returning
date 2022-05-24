import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Console_Pedido } from "../models/Consoles_Pedidos";
import CriarAluguelConsole from "../services/Alugar/criarAluguelConsole.services";

export default class AlugarConsoleController {
  static async store(request: Request, response: Response) {
    const { console_id } = request.body;

    const pedido = await CriarAluguelConsole.execute({ console_id });

    return response.status(201).json(pedido);
  }
  static async index(request: Request, response: Response) {
    const consolePedidoRepositorio =
      AppDataSource.getRepository(Console_Pedido);

    const consolePedido = await consolePedidoRepositorio.find();

    return response.status(200).json(instanceToPlain(consolePedido));
  }
}
