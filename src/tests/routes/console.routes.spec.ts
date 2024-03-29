import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import app from "../../app";
import request from "supertest";

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
    const nome = "Fulano";
    const valor = 25;
    const dono = "João";
    const estado = "Excelente";
    const observacao = "Quero mais";
    const disponivel = true;

    const novoConsole = { nome, valor, dono, estado, observacao, disponivel };
    const response = await request(app).post("/console").send(novoConsole);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        nome,
        valor,
        dono,
        estado,
        observacao,
        disponivel,
      })
    );
  });
  test("Este teste deve ser capaz de listar os consoles", async () => {
    const response = await request(app).get("/console").send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });
});
