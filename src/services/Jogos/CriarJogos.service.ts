import { Jogo } from "../../models/Jogos";
import { AppDataSource } from "../../data-source";
import { IJogosCriar } from "../../interfaces/Jogos";
import AppError from "../../errors/AppError";

export default class CriarJogosService {
   async execute({
    nome,
    valor,
    descricao_jogo,
    dono,
    estado,
    disponivel,
  }: IJogosCriar): Promise<Jogo> {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    if (!nome || !valor || !descricao_jogo || !dono || !estado || !disponivel) {
      throw new AppError("All fields required");
    }

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
