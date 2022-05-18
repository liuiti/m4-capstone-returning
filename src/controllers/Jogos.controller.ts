import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Jogo from "../entities/Jogos";

export default class JogosController {
  static async store(request: Request, response: Response) {
    const { nome, valor, descricao, dono, status, observacao } = request.body;

    const jogo = await CriarJogoService.execute({
      nome,
      valor,
      descricao,
      dono,
      observacao,
    });
    return response.status(201).json(jogo);
  }
  static async index(request: Request, response: Response) {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const jogos = await jogoRepositorio.find();

    return response.json(jogos);
  }
}
