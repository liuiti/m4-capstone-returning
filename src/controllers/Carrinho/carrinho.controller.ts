import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { Carrinho } from "../../models/Carrinhos";
import CarrinhoServices from "../../services/Carrinho/carrinho.service";

export default class CarrinhoController {
    static async store(request: Request, response: Response) {
      const { usuario_id} = request.body;
  
      const criarCarrinho = CarrinhoServices.criarCarrinho(usuario_id)
      
      return response.status(201).json(criarCarrinho);
    }
  
    static async index(request: Request, response: Response) {
        const carrinhoRepositorio = AppDataSource.getRepository(Carrinho);

        const listarCarrinho = await carrinhoRepositorio.find();

        if (!listarCarrinho) {
        throw new AppError("Carrinho inexistente!", 401);
        }
        return listarCarrinho;
    }
  
   
  

    static async delete(request: Request, response: Response) {
      const { id } = request.params;
      const deletarCarinho = CarrinhoServices.deletarCarrinho(id) 
  
      return response
        .status(200)
        .json({ message: "Carrinho deletado", carrinhoDeletado: deletarCarinho });
    }
  }
  