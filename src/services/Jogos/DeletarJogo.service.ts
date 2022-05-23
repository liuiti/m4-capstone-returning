import { AppDataSource } from "../../data-source";
import { Jogo } from "../../models/Jogos";
import AppError from "../../errors/AppError";

export default class DeletarJogoService {
   async execute(id: string) {
    const jogosRepository = AppDataSource.getRepository(Jogo);
    const jogo = await jogosRepository.findOne({
      where: {
        id,
      },
    });

    if (!jogo) {
      throw new AppError("ID de jogo não encontrado", 400);
    }
    await jogosRepository.delete(id);
    return true;
  }
}
