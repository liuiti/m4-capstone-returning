import { Console } from "../../models/Consoles";
import IConsoleCriar from "../../interfaces/Console";
import { AppDataSource } from "../../data-source";

export default class CriarConsoleService {
  async execute({
    nome,
    valor,
    dono,
    estado,
    observacao,
    disponivel,
  }: IConsoleCriar): Promise<Console> {
    const consoleRepositorio = AppDataSource.getRepository(Console);

    const console = consoleRepositorio.create({
      nome,
      valor,
      dono,
      estado,
      observacao,
      disponivel,
    });

    await consoleRepositorio.save(console);

    return console;
  }
}
