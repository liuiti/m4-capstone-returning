import { Request,Response } from "express";
import CriarConsolesService from "../../services/Consoles/CriarConsole.service";

const CriarConsolesController =async(req:Request,res:Response)=>{
    const{nome,valor,dono,estado,observacao,disponivel}= req.body;

    const novoConsole = CriarConsolesService({nome,valor,dono,estado,observacao,disponivel})

    return res.status(201).json(novoConsole)

}

export default CriarConsolesController;