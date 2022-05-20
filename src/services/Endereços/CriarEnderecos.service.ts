import { Endereco } from "../../models/Enderecos";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { IEnderecosCriar } from "../../interfaces/Endereco";

export default class CriarEnderecosService {
  async execute({
    cidade,
    estado,
    cep,
    rua,
    numero,
    bairro,
    complemento,
  }: IEnderecosCriar): Promise<Endereco> {
    const enderecoRepositorio = AppDataSource.getRepository(Endereco);

    const enderecoUsuario = enderecoRepositorio.create({
      cidade,
      estado,
      cep,
      rua,
      numero,
      bairro,
      complemento,
    });

    await enderecoRepositorio.save(enderecoUsuario);

    return enderecoUsuario;
  }
}
