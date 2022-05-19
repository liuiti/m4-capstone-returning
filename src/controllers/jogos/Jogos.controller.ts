import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Jogo } from "../../entities/Jogos";
import CriarJogosService from "../../services/Jogos/CriarJogos.service";

export default class JogosController {
  static async store(request: Request, response: Response) {
    const { nome, valor, descricao, dono, observacao, estado, disponivel } =
      request.body;

    const jogo = await CriarJogosService.execute({
      nome,
      valor,
      descricao,
      dono,
      observacao,
      estado,
      disponivel,
    });
    return response.status(201).json(jogo);
  }
  static async index(request: Request, response: Response) {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const jogos = await jogoRepositorio.find();

    console.log(typeof jogos[0].valor);
    return response.json(jogos);
  }
}
