import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Jogo } from "../models/Jogos";
import AtualizarJogosService from "../services/Jogos/AtualizarJogo.service";
import BuscarJogoService from "../services/Jogos/BuscarJogo.service";
import CriarJogosService from "../services/Jogos/CriarJogos.service";
import DeletarJogoService from "../services/Jogos/DeletarJogo.service";

export default class JogosController {
  static async store(request: Request, response: Response) {
    const { nome, valor, descricao_jogo, dono, estado, disponivel } =
      request.body;

    const novoJogo = new CriarJogosService();

    const jogo = await novoJogo.execute({
      nome,
      valor,
      descricao_jogo,
      dono,
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

    const novoJogo = new BuscarJogoService();

    const jogo = await novoJogo.execute(id);

    return response.status(200).json(jogo);
  }

  static async update(request: Request, response: Response) {
    const { nome, valor, descricao_jogo, dono, estado, disponivel } =
      request.body;
    const { id } = request.params;

    const attJogo = new AtualizarJogosService();

    const jogo = await attJogo.execute({
      nome,
      valor,
      descricao_jogo,
      dono,
      estado,
      disponivel,
      id,
    });

    return response.status(200).json(jogo);
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

    const apagarJogo = new DeletarJogoService();

    await apagarJogo.execute(id);

    return response.status(200).json({ message: "Game deleted" });
  }
}
