import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Jogo } from "../models/Jogos";
import BuscarJogoService from "../services/Jogos/BuscarJogo.service";
import CriarJogosService from "../services/Jogos/CriarJogos.service";

export default class JogosController {
  static async store(request: Request, response: Response) {
    const {
      nome,
      valor,
      descricao_jogo,
      dono,
      observacao,
      estado,
      disponivel,
    } = request.body;

    const jogo = await CriarJogosService.execute({
      nome,
      valor,
      descricao_jogo,
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

    return response.json(jogos);
  }

  static async show(request: Request, response: Response) {
    const { id } = request.params;

    const jogo = await BuscarJogoService(id);

    return response.status(200).json(jogo);
  }
}
