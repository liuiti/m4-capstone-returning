import { Request, response, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Usuario } from "../../entities/usuario.entity";

const listarUsuarioController = async (req: Request, res: Response) => {
  const usuariosRepositorio = AppDataSource.getRepository(Usuario);

  const usuarios = await usuariosRepositorio.find();

  return res.status(200).json(usuarios);
};
export default listarUsuarioController;
