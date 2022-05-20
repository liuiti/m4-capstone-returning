import { endereco } from "../../models/Endereços";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { DeleteResult } from "typeorm";

interface EnderecoDataParams {
  id: string;
}

export default class DeletarEnderecosService {
  async execute({ id }: EnderecoDataParams): Promise<DeleteResult> {
    const enderecoRepositorio = AppDataSource.getRepository(endereco);

    const enderecoUsuario = await enderecoRepositorio.findOne({
      where: {
        id,
      },
    });

    if (!enderecoUsuario) {
      throw new AppError("Não encontrado nenhum endereço com esse id");
    }

    return await enderecoRepositorio.delete(id);
  }
}
