import { Usuario } from "../../models/Usuarios";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { hash } from "bcrypt";
import { IUsuarioCriar } from "../../interfaces/Usuario";

<<<<<<< HEAD
export default class CriarUsuarioService {
  static async execute({
=======

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
>>>>>>> f7a9a7d199f00ed3d664da4b8ad1395471bd18c5
    nome,
    cpf,
    email,
    telefone,
<<<<<<< HEAD
    senha,
    pendencia,
  }: IUsuarioCriar): Promise<Usuario> {
    const usuarioRepositorio = AppDataSource.getRepository(Usuario);

    const verificandoEmailExiste = await usuarioRepositorio.findOne({
      where: { email },
    });

    if (verificandoEmailExiste) {
      throw new AppError("Email já exite", 401);
    }
=======
    senha: senhaCodificada,
    pendencia: false,
  });
>>>>>>> f7a9a7d199f00ed3d664da4b8ad1395471bd18c5

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
  }
}
