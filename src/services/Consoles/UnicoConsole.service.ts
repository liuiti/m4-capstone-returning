import { Console } from "../../entities/Consoles";
import IConsoleCriar from "../../interfaces/Console";
import { AppDataSource } from "../../data-source";

const UnicoConsoloService = async (id:string)=>{
    const consoleRepositorio = AppDataSource.getRepository(Console)
    const listarConsole = await consoleRepositorio.findOne({where:{id}})

    return listarConsole

}

export default UnicoConsoloService