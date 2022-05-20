import { number } from "yup";
import { AppDataSource } from "../../data-source";
import { Jogo } from "../../entities/Jogos";
import AppError from "../../errors/AppError";

interface IJogoUpdate {
  nome: string;
  id: string;
  valor: number;
  descricao: string;
  dono: string;
  observacao: string;
  estado: string;
  disponivel: boolean;
}

const AtualizarJogoService = async ({
  nome,
  valor,
  id,
  descricao,
  dono,
  observacao,
  estado,
  disponivel,
}: IJogoUpdate) => {
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
    descricao: descricao || jogo?.descricao,
    dono: dono || jogo?.dono,
    observacao: observacao || jogo?.observacao,
    estado: estado || jogo?.estado,
    disponivel: disponivel || jogo?.disponivel,
  };

  jogosRepository.update(id, jogoAtualizado);

  return jogoAtualizado;
};

export default AtualizarJogoService;
