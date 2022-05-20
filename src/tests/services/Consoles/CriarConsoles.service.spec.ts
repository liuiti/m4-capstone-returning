import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import CriarConsoleService from "../../../services/Consoles/CriarConsole.service";

describe("Deve ser capaz de criar um novo console", () => {
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

  test("Deve ser capaz de inserir um novo console no database", async () => {
    const novoUsuario = new CriarConsoleService();
    const usuario = await novoUsuario.execute({
      nome: "Fulano",
      valor: 25,
      dono: "João",
      estado: "Excelente",
      observacao: "Quero mais",
      disponivel: true,
    });
    expect(usuario).toBeTruthy();
  });
});
