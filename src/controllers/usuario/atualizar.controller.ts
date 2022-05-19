import { Request, Response } from "express";
import atualizarUsuarioService from "../../services/usuario/atualizarUsuario.service";

const atualizarUsuarioController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, cpf, email, telefone, senha, pendencia } = req.body;

  const usuario = await atualizarUsuarioService({
    id,
    nome,
    cpf,
    email,
    telefone,
    senha,
    pendencia,
  });

  return res.status(200).json(usuario);
};

export default atualizarUsuarioController;
