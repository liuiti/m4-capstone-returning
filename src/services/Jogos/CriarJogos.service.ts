import { Jogo } from "../../models/Jogos";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

interface JogosDataParams {
  nome: string;
  valor: number;
  descricao_jogo: string;
  dono: string;
  estado: string;
  disponivel: boolean;
}

export default class CriarJogosService {
  static async execute({
    nome,
    valor,
    descricao_jogo,
    dono,
    estado,
    disponivel,
  }: JogosDataParams): Promise<Jogo> {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const jogo = jogoRepositorio.create({
      nome,
      valor,
      descricao_jogo,
      dono,
      estado,
      disponivel,
    });

    await jogoRepositorio.save(jogo);

    return jogo;
  }
}
