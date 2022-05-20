import { Console } from "../../entities/console.entity";
import IConsoleCriar from "../../interfaces/Console";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

const ListarConsoleService = async () => {
  const consoleRepositorio = AppDataSource.getRepository(Console);

  const listarConsoles = await consoleRepositorio.find();

  if (!listarConsoles) {
    throw new AppError("Consoles inexistente!", 401);
  }
  return listarConsoles;
};

export default ListarConsoleService;
