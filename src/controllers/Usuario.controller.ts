import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Usuario } from "../models/Usuarios";
import AtualizarUsuarioService from "../services/usuario/atualizarUsuario.service";
import CriarUsuarioService from "../services/usuario/criarUsuario.service";
import DeletarUsuarioService from "../services/usuario/deletarUsuario.service";

export default class UsuarioController {
  static async store(request: Request, response: Response) {
    const { nome, cpf, email, telefone, senha, pendencia } = request.body;

    const usuario = await CriarUsuarioService.execute({
      nome,
      cpf,
      email,
      telefone,
      senha,
      pendencia,
    });

    return response.status(201).json(usuario);
  }
  static async index(request: Request, response: Response) {
    const usuariosRepositorio = AppDataSource.getRepository(Usuario);

    const usuarios = await usuariosRepositorio.find();

    return response.status(200).json(usuarios);
  }
  static async update(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, cpf, email, telefone, senha, pendencia } = request.body;

    const usuario = await AtualizarUsuarioService.execute({
      id,
      nome,
      cpf,
      email,
      telefone,
      senha,
      pendencia,
    });

    return response
      .status(200)
      .json({ message: "Usuario atualizado", usuarioAtualizado: usuario });
  }
  static async delete(request: Request, response: Response) {
    const { id } = request.params;

    const usuario = await DeletarUsuarioService.execute(id);

    return response.status(200).json({ message: "Usuario deleteado" });
  }
}
