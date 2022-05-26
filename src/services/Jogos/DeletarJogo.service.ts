import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { Jogo } from "../../models/Jogos";

export default class DeletarJogoService {
  static async execute(id: string): Promise<Jogo> {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const jogo = await jogoRepositorio.findOne({ where: { id } });

    if (!jogo) {
      throw new AppError("Não encontrado nenhum jogo com esse id", 404);
    }

    await jogoRepositorio.delete(id);
    return jogo;
  }
}
