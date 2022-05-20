import { Request,Response } from "express";
import ListarConsoleService from "../../services/Consoles/ListarConsole.service";

const ListarConsoleController = async(req:Request,res:Response)=>{
    const listarConsoles = ListarConsoleService();
    return res.status(200).json(listarConsoles)

}

export default ListarConsoleController