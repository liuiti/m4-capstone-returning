import { Request, Response } from "express";
import CriarUsuarioService from "../../services/usuario/criarUsuario.service";

const criarUsuarioController = async (req: Request, res: Response) => {
  const { nome, cpf, email, telefone, senha } = req.body;

  const usuario = await CriarUsuarioService({
    nome,
    cpf,
    email,
    telefone,
    senha,
    
  });
  return res.status(201).json(usuario);
};

export default criarUsuarioController;
