import { AppDataSource } from "../../data-source";
import { Jogo } from "../../models/Jogos";
import AppError from "../../errors/AppError";
import { IJogosUpdate } from "../../interfaces/Jogos";

export default class AtualizarJogosService {
  public static async execute({
    nome,
    valor,
    id,
    descricao_jogo,
    dono,
    estado,
    disponivel,
  }: IJogosUpdate) {
    const jogosRepository = AppDataSource.getRepository(Jogo);

    const jogo = await jogosRepository.findOne({
      where: {
        id,
      },
    });

    if (!jogo) {
      throw new AppError("ID de jogo não encontrado", 400);
    }

    const jogoAtualizado = {
      nome: nome || jogo?.nome,
      valor: valor || jogo?.valor,
      descricao_jogo: descricao_jogo || jogo?.descricao_jogo,
      dono: dono || jogo?.dono,
      estado: estado || jogo?.estado,
      disponivel: disponivel || jogo?.disponivel,
    };

    jogosRepository.update(id, jogoAtualizado);

    return jogoAtualizado;
  }
}
