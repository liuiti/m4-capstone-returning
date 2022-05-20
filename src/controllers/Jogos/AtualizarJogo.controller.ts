import { Request, Response } from "express";
import AtualizarJogoService from "../../services/Jogos/AtualizarJogo.service";

const AtualizarJogoController = async (req: Request, res: Response) => {
  const { nome, valor, descricao, dono, observacao, estado, disponivel } =
    req.body;
  const { id } = req.params;

  const jogo = await AtualizarJogoService({
    nome,
    valor,
    id,
    descricao,
    dono,
    observacao,
    estado,
    disponivel,
  });

  return res.status(200).json(jogo);
};

export default AtualizarJogoController;
