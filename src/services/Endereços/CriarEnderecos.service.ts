import { endereco } from "../../models/Endereços";
import AppError from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

interface EnderecosDataParams {
  cidade: string;
  estado: string;
  cep: string;
  rua: string;
  numero: number;
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
  }: EnderecosDataParams): Promise<endereco> {
    const enderecoRepositorio = AppDataSource.getRepository(endereco);

    const endereco = enderecoRepositorio.create({
      cidade,
      estado,
      cep,
      rua,
      numero,
      bairro,
      complemento,
    });

    await enderecoRepositorio.save(endereco);

    return endereco;
  }
}
