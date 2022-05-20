import { AppDataSource } from "../../data-source";
import { Jogo } from "../../entities/Jogos";
import AppError from "../../errors/AppError";

const DeletarJogoService = async (id: string) => {
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

  return;
};

export default DeletarJogoService;
