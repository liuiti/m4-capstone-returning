import { AppDataSource } from "../../data-source";
import { Jogo } from "../../models/Jogos";
import AppError from "../../errors/AppError";

const BuscarJogoService = async (id: string) => {
  const jogoRepositorio = AppDataSource.getRepository(Jogo);

  const jogo = await jogoRepositorio.findOne({ where: { id } });

  if (!jogo) {
    throw new AppError("Não encontramos nenhum jogo com esse id", 404);
  }

  return jogo;
};

export default BuscarJogoService;
