import { Request,Response } from "express";
import AtualizarConsoleService from "../../services/Consoles/AtualizarConsole.service";

const AtualizarConsoleController = async(req:Request,res:Response)=>{
    const {id} = req.params;
    const {nome,valor,dono,estado,observacao,disponivel} = req.body;

    const atualizarConsole = AtualizarConsoleService({
        id,
        nome,
        valor,
        dono,
        estado,
        observacao,
        disponivel,
      })

    return res.status(200).json({message: "console atualizado"})
}

export default AtualizarConsoleController