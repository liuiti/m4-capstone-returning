import { Usuario } from "../../models/Usuarios";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { hash } from "bcrypt";


interface NovoUsuario {
  nome: string;
  cpf: string;
  email: string;
  telefone: number;
  senha: string;
 
}

const CriarUsuarioService = async ({
  nome,
  cpf,
  email,
  telefone,
  senha,
  
}: NovoUsuario): Promise<Usuario> => {
  const usuarioRepositorio = AppDataSource.getRepository(Usuario);

  const verificandoEmailExiste = await usuarioRepositorio.findOne({
    where: { email },
  });

  if (verificandoEmailExiste) {
    throw new AppError("Email já existe", 401);
  }

  if (!nome || !cpf || !email || !telefone || !senha) {
    throw new AppError("Dados incorretos", 401);

  }

  const senhaCodificada = await hash(senha, 8);

  const usuario = usuarioRepositorio.create({
    nome,
    cpf,
    email,
    telefone,
    senha: senhaCodificada,
    pendencia: false,
  });

  await usuarioRepositorio.save(usuario);

  return usuario;
};

export default CriarUsuarioService;
