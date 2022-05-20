import { Request, response, Response } from "express";
import DeletarUsuarioService from "../../services/usuario/deletarUsuario.service";

const deletarUsuarioController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await DeletarUsuarioService({ id });
  console.log(usuario + 'kasjkdajksd')
  return res.status(200).json({ message: "Usuario deleteado" });
};
export default deletarUsuarioController;
