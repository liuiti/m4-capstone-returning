import { Usuario } from "../../models/Usuarios";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { DeleteResult } from "typeorm";

export default class DeletarUsuarioService {
  static async execute(id: string): Promise<DeleteResult> {
    const usuarioRepositorio = AppDataSource.getRepository(Usuario);

    const usuario = await usuarioRepositorio.findOne({ where: { id } });

    if (!usuario) {
      throw new AppError("Não foi encontrado nenhum usuario com esse id");
    }

    return await usuarioRepositorio.delete(id);
  }
}
