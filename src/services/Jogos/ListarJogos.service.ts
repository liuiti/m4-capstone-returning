import { AppDataSource } from "../../data-source";
import { Jogo } from "../../entities/Jogos";
import AppError from "../../errors/AppError";

const ListarJogosService = async () => {
  const jogosRepository = AppDataSource.getRepository(Jogo);
  const jogosLista = await jogosRepository.find();
  console.log(jogosLista);
  return jogosLista;
};

export default ListarJogosService;
