import { Console } from "../models/Consoles";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AtualizarConsoleService from "../services/Consoles/AtualizarConsole.service";
import CriarConsolesService from "../services/Consoles/CriarConsole.service";
import DeletarConsoleService from "../services/Consoles/DeletarConsole.service";
import UnicoConsoleService from "../services/Consoles/UnicoConsole.service";
import IConsoleCriar from "../interfaces/Console";

export default class ConsoleController {
  static async store(request: Request, response: Response) {
    const { nome, valor, dono, estado, observacao, disponivel } = request.body;
    const console = await CriarConsolesService.execute({
      nome,
      valor,
      dono,
      estado,
      observacao,
      disponivel,
    });

    return response.status(201).json(console);
  }

  static async index(request: Request, response: Response) {
    const jogoRepositorio = AppDataSource.getRepository(Console);

    const jogos = await jogoRepositorio.find();

    return response.json(jogos);
  }

  static async show(request: Request, response: Response) {
    const { id } = request.params;

    const novoListarConsole = new UnicoConsoleService();

    const listarConsole = await novoListarConsole.execute(id);

    return response.status(200).json(listarConsole);
  }

  static async update(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, valor, dono, estado, observacao, disponivel } = request.body;

    const atualizarConsole = new AtualizarConsoleService();

    const console = await atualizarConsole.execute({
      id,
      nome,
      valor,
      dono,
      estado,
      observacao,
      disponivel,
    });

    return response
      .status(200)
      .json({ message: "Console atualizado", ConsoleAtualizado: console });
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

    const novoDeletarConsole = new DeletarConsoleService();
    const deletarConsole = await novoDeletarConsole.execute(id);

    return response.status(200).json({ message: "Console deletado" });
  }
}
