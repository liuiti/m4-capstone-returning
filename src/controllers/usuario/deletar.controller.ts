import { Request, response, Response } from "express";
import DeletarUsuarioService from "../../services/usuario/deletarUsuario.service";

const deletarUsuarioController = (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = DeletarUsuarioService({ id });

  return res.status(200).json({ message: "Usuario deleteado" });
};
export default deletarUsuarioController;
