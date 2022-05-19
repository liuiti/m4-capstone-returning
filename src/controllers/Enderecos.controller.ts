import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { endereco } from "../models/Endereços";
import CriarEnderecosService from "../services/Endereços/CriarEnderecos.service";
import BuscarJogoService from "../services/Jogos/BuscarJogo.service";

export default class EnderecosController {
  static async store(request: Request, response: Response) {
    const { cidade, estado, cep, rua, numero, bairro, complemento } =
      request.body;

    const endereco = await CriarEnderecosService.execute({
      cidade,
      estado,
      cep,
      rua,
      numero,
      bairro,
      complemento,
    });
    return response.status(201).json(endereco);
  }
  static async index(request: Request, response: Response) {
    const enderecoRepositorio = AppDataSource.getRepository(endereco);

    const enderecos = await enderecoRepositorio.find();

    return response.json(enderecos);
  }
}
