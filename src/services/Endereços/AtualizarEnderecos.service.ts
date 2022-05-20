import { Endereco } from "../../models/Enderecos";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

interface EnderecoDataParams {
  id: string;
  cidade: string;
  estado: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  complemento: string;
}

export default class AtualizarEnderecosService {
  async execute({
    id,
    cidade,
    estado,
    cep,
    rua,
    numero,
    bairro,
    complemento,
  }: EnderecoDataParams): Promise<Endereco> {
    const enderecoRepositorio = AppDataSource.getRepository(Endereco);

    const enderecoUsuario = await enderecoRepositorio.findOne({
      where: { id },
    });

    if (!enderecoUsuario) {
      throw new AppError("Não encontrado nenhum endereço com esse id");
    }

    cidade ? (enderecoUsuario.cidade = cidade) : enderecoUsuario.cidade;
    estado ? (enderecoUsuario.estado = estado) : enderecoUsuario.estado;
    cep ? (enderecoUsuario.cep = cep) : enderecoUsuario.cep;
    rua ? (enderecoUsuario.rua = rua) : enderecoUsuario.rua;
    numero ? (enderecoUsuario.numero = numero) : enderecoUsuario.numero;
    bairro ? (enderecoUsuario.bairro = bairro) : enderecoUsuario.bairro;
    complemento
      ? (enderecoUsuario.complemento = complemento)
      : enderecoUsuario.complemento;
    return enderecoRepositorio.save(enderecoUsuario);
  }
}
