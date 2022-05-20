import { Console } from "../../models/Consoles";
import IConsoleCriar from "../../interfaces/Console";
import { AppDataSource } from "../../data-source";
const CriarConsolesService = async ({
  nome,
  valor,
  dono,
  estado,
  observacao,
  disponivel,
}: IConsoleCriar) => {
  const consoleRepositorio = AppDataSource.getRepository(Console);

  const novoConsole = new Console();
  novoConsole.nome = nome;
  novoConsole.valor = valor;
  novoConsole.dono = dono;
  novoConsole.estado = estado;
  novoConsole.observacao = observacao;
  novoConsole.disponivel = disponivel;

  consoleRepositorio.create(novoConsole);

  await consoleRepositorio.save(novoConsole);

  return novoConsole;
};

export default CriarConsolesService;
