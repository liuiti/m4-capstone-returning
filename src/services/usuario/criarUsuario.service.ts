import { Usuario } from "../../entities/Usuarios";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

interface UsuarioDataParams {
  nome: string;
  cpf: string;
  email: string;
  telefone: number;
  senha: string;
  pendencia: boolean;
}

const CriarUsuarioService = async ({
  nome,
  cpf,
  email,
  telefone,
  senha,
  pendencia,
}: UsuarioDataParams): Promise<Usuario> => {
  const usuarioRepositorio = AppDataSource.getRepository(Usuario);

  const verificandoEmailExiste = await usuarioRepositorio.findOne({
    where: { email },
  });

  if (verificandoEmailExiste) {
    throw new AppError("Email já exite");
  }

  const usuario = usuarioRepositorio.create({
    nome,
    cpf,
    email,
    telefone,
    senha,
    pendencia,
  });
  await usuarioRepositorio.save(usuario);

  return usuario;
};
