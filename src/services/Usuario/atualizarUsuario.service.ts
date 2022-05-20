import { Usuario } from "../../entities/usuario.entity";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { compare, hash } from "bcrypt";

interface UsuarioDataParams {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: number;
  senha: string;
  pendencia: boolean;
}

const atualizarUsuarioService = async ({
  id,
  nome,
  cpf,
  email,
  telefone,
  senha,
  pendencia,
}: UsuarioDataParams): Promise<Usuario> => {
  console.log(id);
  const usuarioRepositorio = AppDataSource.getRepository(Usuario);

  const usuario = await usuarioRepositorio.findOne({ where: { id } });

  if (!usuario) {
    throw new AppError("Não foi encontrado nenhum usuario com esse id");
  }

  if (senha) {
    const senhaDecodificada = await compare(senha, usuario.senha);

    if (senhaDecodificada) {
      throw new AppError("Passwords are the same");
    }
  }

  nome ? (usuario.nome = nome) : usuario.nome;
  cpf ? (usuario.cpf = cpf) : usuario.cpf;
  email ? (usuario.email = email) : usuario.email;
  telefone ? (usuario.telefone = telefone) : usuario.telefone;
  senha ? (usuario.senha = await hash(senha, 8)) : usuario.senha;
  pendencia ? (usuario.pendencia = pendencia) : usuario.pendencia;

  return usuarioRepositorio.save(usuario);
};

export default atualizarUsuarioService;
