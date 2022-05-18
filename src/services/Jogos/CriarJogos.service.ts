import { Jogo } from "../../entities/Jogos";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

interface JogosDataParams {
  nome: string;
  valor: number;
  descricao: string;
  dono: string;
  observacao: string;
}

export default class CriarJogosService {
  static async execute({
    nome,
    valor,
    descricao,
    dono,
    observacao,
  }: JogosDataParams): Promise<Jogo> {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const jogo = jogoRepositorio.create({
      nome,
      valor,
      descricao,
      dono,
      observacao,
    });

    await jogoRepositorio.save(jogo);

    return jogo;
  }
}
