import { Request, response, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Usuario } from "../../entities/Usuarios";

const listarUsuarioController = async (req: Request, res: Response) => {
  const usuariosRepositorio = AppDataSource.getRepository(Usuario);

  const usuarios = await usuariosRepositorio.find();

  return response.status(200).json(usuarios);
};
