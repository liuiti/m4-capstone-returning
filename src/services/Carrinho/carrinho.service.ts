import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { Carrinho } from "../../models/Carrinhos";

export default class CarrinhoServices {
  static async criarCarrinho(usuario_id: string) {
    const carrinhoRepositorio = AppDataSource.getRepository(Carrinho);

    const novoCarrinho = new Carrinho();
    novoCarrinho.usuario_id = usuario_id;

    carrinhoRepositorio.create(novoCarrinho);

    await carrinhoRepositorio.save(novoCarrinho);
    return novoCarrinho;
  }


  static async deletarCarrinho(id:string) {
      const carrinhoRepositorio = AppDataSource.getRepository(Carrinho)
      const carrinhoExistente = await carrinhoRepositorio.find()

      const buscarCarrinho = carrinhoExistente.find((item) => item.id === id);

      if (!carrinhoExistente) {
        throw new AppError("Carrinho inexistente!", 401);
      }

      await carrinhoRepositorio.delete(buscarCarrinho!.usuario_id)
      return true
  }
}
