import { Endereco } from "../../models/Enderecos";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

interface EnderecosDataParams {
  cidade: string;
  estado: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  complemento?: string;
}

export default class CriarEnderecosService {
  static async execute({
    cidade,
    estado,
    cep,
    rua,
    numero,
    bairro,
    complemento,
  }: EnderecosDataParams): Promise<Endereco> {
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
