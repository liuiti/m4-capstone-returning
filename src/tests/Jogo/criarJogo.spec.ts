import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import CriarJogosService from "../../services/Jogos/CriarJogos.service";

describe("Criar um novo jogo", () => {
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

  test("Deverá criar um novo jogo", async () => {
    const jogo = await CriarJogosService.execute({
      nome: "Fulano1",
      descricao_jogo: "Bom demais1",
      valor: 256,
      dono: "Joã1o",
      estado: "Excelente1",
      disponivel: true,
    });

    expect(jogo).toBeTruthy();
    expect(jogo).toHaveProperty("id");
  });
});
