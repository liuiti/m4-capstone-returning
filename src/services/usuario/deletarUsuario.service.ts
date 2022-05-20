import { Usuario } from "../../models/Usuarios";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { DeleteResult } from "typeorm";

interface UsuarioDataParams {
  id: string;
}

const DeletarUsuarioService = async ({
  id,
}: UsuarioDataParams): Promise<DeleteResult> => {
  const usuarioRepositorio = AppDataSource.getRepository(Usuario);

  const usuario = await usuarioRepositorio.findOne({ where: { id } });
   
  if (!usuario) {
    throw new AppError("Não foi encontrado nenhum usuario com esse id");
  }

  return await usuarioRepositorio.delete(id);
};

export default DeletarUsuarioService;
