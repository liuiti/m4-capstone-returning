import { Jogo } from "../../models/Jogos";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { IJogosCriar } from "../../interfaces/Jogos";

export default class CriarJogosService {
  static async execute({
    nome,
    valor,
    descricao_jogo,
    dono,
    estado,
    disponivel,
  }: IJogosCriar): Promise<Jogo> {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const jogo = jogoRepositorio.create({
      nome,
      valor,
      dono,
      descricao_jogo,
      estado,
      disponivel,
    });

    await jogoRepositorio.save(jogo);

    return jogo;
  }
}
