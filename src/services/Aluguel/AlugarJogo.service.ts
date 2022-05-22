import { AppDataSource } from "../../data-source"
import IAlugelJogo from "../../interfaces/Aluguel"
import { Carrinho } from "../../models/Carrinhos"
import { Usuario } from "../../models/Usuarios";


export default class AlugarJogoService {
    async execute({
        id
    }: IAlugelJogo): Promise<Carrinho>{
        
        const carrinhoRepositorio = AppDataSource.getRepository(Carrinho);

        const usuariosRepositorio = AppDataSource.getRepository(Usuario);

        // const donoDoPedido = usuariosRepositorio.find({
        //     select: id
        // })

        const carrinho = carrinhoRepositorio.create({
            id
        })

        await carrinhoRepositorio.save(carrinho);

        return carrinho;

    }
}