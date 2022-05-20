import { Request, Response } from "express";
import CriarJogosService from "../../services/Jogos/CriarJogos.service";

const CriarJogoController = async (request: Request, response: Response) => {
  const {
    nome,
    valor,
    descricao,
    dono,
    observacao,
    estado,
    disponivel = true,
  } = request.body;
  console.log(nome, "to no controller");
  const jogo = await CriarJogosService({
    nome,
    valor,
    descricao,
    dono,
    observacao,
    estado,
    disponivel,
  });
  return response.status(201).json(jogo);
};

export default CriarJogoController;
