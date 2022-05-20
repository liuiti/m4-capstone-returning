import { Request, Response } from "express";
import ListarJogosService from "../../services/Jogos/ListarJogos.service";

const ListarJogosController = async (req: Request, res: Response) => {
  const Jogos = await ListarJogosService();

  return res.status(200).json(Jogos);
};

export default ListarJogosController;
