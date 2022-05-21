import { Carrinho } from "../models/Carrinhos";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AlugarJogoService from "../services/Aluguel/AlugarJogo.service";

export default class AlugarController {
    static async store(request: Request, response: Response) {
        //captura o id do produto
        const { id } = request.body
        
        const novoAluguelJogo = new AlugarJogoService()

        const aluguel = await novoAluguelJogo.execute({
            id
        })

        return response.status(201).json(aluguel);

    }
}

