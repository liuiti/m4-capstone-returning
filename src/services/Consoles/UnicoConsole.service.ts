import { Console } from "../../entities/console.entity";
import IConsoleCriar from "../../interfaces/Console";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

const UnicoConsoloService = async (id: string) => {
  const consoleRepositorio = AppDataSource.getRepository(Console);
  const listarConsole = await consoleRepositorio.findOne({ where: { id } });

  if (!listarConsole) {
    throw new AppError("Console inexistente!", 401);
  }

  return listarConsole;
};

export default UnicoConsoloService;
