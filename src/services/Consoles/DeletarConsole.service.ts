import { Console } from "../../entities/Consoles";
import IConsoleCriar from "../../interfaces/Console";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

const DeleteConsoleService=async(id:string)=>{
    const consoleRepositorio = AppDataSource.getRepository(Console)

    const console = await consoleRepositorio.find()

    const buscarConsole = console.find((item)=> item.id === id)

    if(!buscarConsole){
        throw new AppError("Id do console inexistente!",401)
    }

    await consoleRepositorio.delete(buscarConsole!.id)

    return true
}

export default DeleteConsoleService