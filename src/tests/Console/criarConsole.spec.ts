import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import CriarConsoleService from "../../services/Consoles/CriarConsole.service";

describe("Criar um novo console", () => {
  let conexaoDb: any = DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (conexaoDb = res))
      .catch((err) => {
        console.error("Erro durante a inicialização do data-source");
      });
  });

  afterAll(async () => {
    await conexaoDb.destroy();
  });

  test("Deverá ser capaz de inserir um novo console", async () => {
    const console = await CriarConsoleService.execute({
      nome: "Fulano",
      valor: 25,
      dono: "João",
      estado: "Excelente",
      observacao: "Quero mais",
      disponivel: true,
    });

    expect(console).toBeTruthy();
    expect(console).toHaveProperty("id");
  });
});
