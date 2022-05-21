import { AppDataSource } from "../../data-source";
import { Jogo } from "../../models/Jogos";
import AppError from "../../errors/AppError";

export default class ListarJogosService {
  static async execute() {
    const jogosRepository = AppDataSource.getRepository(Jogo);
    const jogosLista = await jogosRepository.find();

    if (!jogosLista) {
      throw new AppError("Lista Vazia!", 401);
    }
    console.log(jogosLista);
    return jogosLista;
  }
}
