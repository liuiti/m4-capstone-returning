import { Request, Response } from "express";
import DeletarJogoService from "../../services/Jogos/DeletarJogo.service";

const DeletarJogoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const JogoDeletado = await DeletarJogoService(id);
  return res.status(200).json({ message: "Jogo Deletado!" });
};

export default DeletarJogoController;
