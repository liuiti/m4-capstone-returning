import { Request,Response } from "express";
import DeleteConsoleService from "../../services/Consoles/DeletarConsole.service";

const DeleteConsoleController =async(req:Request,res:Response)=>{
    const {id} = req.body;
    const deletarConsole = DeleteConsoleService(id)
    
    return res.status(200).json({message: "console deletado!"})

}

export default DeleteConsoleController