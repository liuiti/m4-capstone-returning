import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import FinalizarCompraService from "../services/FinalizarCompra/FinalizarCompra.service";

export default class FinalizarCompra {
    static async store(request: Request, response: Response) {

        const {id} = request.params

        FinalizarCompraService.execute(id)
  
  }
}
