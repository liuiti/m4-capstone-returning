import { Request,Response } from "express";
import UnicoConsoloService from "../../services/Consoles/UnicoConsole.service";

const UnicoConsoleController = async(req:Request,res:Response)=>{
    const {id}= req.params;
    const listarConsole = UnicoConsoloService(id)
    return res.status(200).json(listarConsole)
}

export default UnicoConsoleController