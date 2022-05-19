import { Request, response, Response } from "express";

const criarUsuarioController = async (req: Request, res: Response) => {
  const { nome, cpf, email, telefone, senha, pendencias } = req.body;

  const usuario = await CriarUsuarioService({
    nome,
    cpf,
    email,
    telefone,
    senha,
    pendencias,
  });
  return response.status(201).json(usuario);
};
