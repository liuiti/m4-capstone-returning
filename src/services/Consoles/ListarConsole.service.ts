import { Console } from "../../entities/Consoles";
import IConsoleCriar from "../../interfaces/Console";
import { AppDataSource } from "../../data-source";


const ListarConsoleService = async ()=>{
    const consoleRepositorio = AppDataSource.getRepository(Console)

    const listarConsoles = await consoleRepositorio.find();
    return listarConsoles
}

export default ListarConsoleService