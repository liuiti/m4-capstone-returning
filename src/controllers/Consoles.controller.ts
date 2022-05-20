import { Console } from "console";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AtualizarConsoleService from "../services/Consoles/AtualizarConsole.service";
import CriarConsolesService from "../services/Consoles/CriarConsole.service";
import DeletarConsoleService from "../services/Consoles/DeletarConsole.service";
import UnicoConsoleService from "../services/Consoles/UnicoConsole.service";

export default class ConsoleController {
  static async store(request: Request, response: Response) {
    const { nome, valor, dono, estado, observacao, disponivel } = request.body;

    const console = CriarConsolesService.execute({
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
    const consoleRepositorio = AppDataSource.getRepository(Console);

    const listarConsoles = await consoleRepositorio.find();

    return response.status(200).json(listarConsoles);
  }

  static async show(request: Request, response: Response) {
    const { id } = request.params;

    const listarConsole = UnicoConsoleService.execute(id);

    return response.status(200).json(listarConsole);
  }

  static async update(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, valor, dono, estado, observacao, disponivel } = request.body;

    const console = AtualizarConsoleService.execute({
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
    const { id } = request.body;
    const deletarConsole = DeletarConsoleService.execute(id);

    return response
      .status(200)
      .json({ message: "Console deletado", consoleDeletado: deletarConsole });
  }
}
