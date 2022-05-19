import { Request, response, Response } from "express";

const deletarUsuarioController = (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = deletarUsuarioService({ id });

  return res
    .status(200)
    .json({ message: "Usuario deleteado", usuarioDeletado: usuario });
};
