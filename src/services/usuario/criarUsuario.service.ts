import { Usuario } from "../../entities/Usuarios";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { hash } from "bcrypt";

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
    throw new AppError("Email já exite", 401);
  }

  const senhaCodificada = await hash(senha, 8);

  const usuario = usuarioRepositorio.create({
    nome,
    cpf,
    email,
    telefone,
    senha: senhaCodificada,
    pendencia,
  });

  await usuarioRepositorio.save(usuario);

  return usuario;
};

export default CriarUsuarioService;
