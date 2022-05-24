import { Usuario } from './../../models/Usuarios';
import { compare } from 'bcrypt';
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError"


interface Request {
  email: string;
  senha: string;
}

interface Response {
  token: string;
  usuario: Usuario;
}


export class AutenticacaoService {
  static async execute({ email, senha }: Request): Promise<Response> {
    const repositorioUsuario = AppDataSource.getRepository(Usuario);

    const usuario = await repositorioUsuario.findOne({
      where: { email },
    });

    if (!usuario) {
      throw new AppError("Combinação de e-mail ou senha incorretos");
    }

    const senhaMatch = await compare(senha, usuario.senha);

    if (!senhaMatch) {
      throw new AppError("Combinação de e-mail ou senha incorretos");
    }

    const token = sign({}, process.env.SECRET_KEY || "default", {
      subject: usuario.id,
      expiresIn: "3d",
    });

    return {
      usuario,
      token,
    };
  }
}
