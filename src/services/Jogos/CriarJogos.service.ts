import { Jogo } from "../../entities/Jogos";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

interface JogosDataParams {
  nome: string;
  valor: number;
  descricao: string;
  dono: string;
  observacao: string;
  estado: string;
  disponivel: boolean;
}

export default class CriarJogosService {
  static async execute({
    nome,
    valor,
    descricao,
    dono,
    observacao,
    estado,
    disponivel,
  }: JogosDataParams): Promise<Jogo> {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const jogo = jogoRepositorio.create({
      nome,
      valor,
      descricao,
      dono,
      observacao,
      estado,
      disponivel,
    });

    await jogoRepositorio.save(jogo);

    console.log(typeof valor);
    return jogo;
  }
}
