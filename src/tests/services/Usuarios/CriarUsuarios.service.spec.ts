import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import CriarUsuarioService from "../../../services/usuario/criarUsuario.service";

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

  test("Deve ser capaz de inserir um novo usuário no database", async () => {
    const novoUsuario = new CriarUsuarioService();
    const usuario = await novoUsuario.execute({
      nome: "Fulano",
      cpf: "22656325492",
      email: "fulano@hotmail.com",
      telefone: 995632663,
      senha: "12345",
      pendencia: true,
    });
    expect(usuario).toBeTruthy();
  });
});
