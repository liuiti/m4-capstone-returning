import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import CriarUsuarioService from "../../../services/usuario/criarUsuario.service";
import UsuarioController from "../../../controllers/Usuario.controller"


describe("Deve ser capaz de criar um novo usuário", () => {
  let conexaoDb: any = DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (conexaoDb = res))
      .catch((err) => {
        console.error("Error during data source initialization");
      });
  });

  afterAll(async () => {
    await conexaoDb.destroy();
  });


});
