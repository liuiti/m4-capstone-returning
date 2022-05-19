import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Usuario } from "../../entities/Usuarios";

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
};
