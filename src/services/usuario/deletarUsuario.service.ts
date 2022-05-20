import { Usuario } from "../../models/Usuarios";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { DeleteResult } from "typeorm";

export default class DeletarUsuarioService {
  static async execute(id: string): Promise<DeleteResult> {
    const usuarioRepositorio = AppDataSource.getRepository(Usuario);
    
    console.log('cheguei no controller');

    const usuario = await usuarioRepositorio.findOne({ where: { id } });

    console.log("não cheguei aqui");
    
    if (!usuario) {
      throw new AppError("Não foi encontrado nenhum usuario com esse id");
    }
    return await usuarioRepositorio.delete(id);
  }
}
