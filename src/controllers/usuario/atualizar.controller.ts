import { Request, Response } from "express";

const atualizarUsuarioController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, cpf, email, telefone, senha, pendencias } = req.body;

  const usuario = await atualizarUsuarioService({
    id,
    nome,
    cpf,
    email,
    telefone,
    senha,
    pendencias,
  });

  return res.status(200).json(usuario);
};
