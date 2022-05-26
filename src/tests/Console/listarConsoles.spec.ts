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

  test("Deverá ser capaz de listar os consoles registrados", async () => {
    const response = await request(app).get("/console").send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });
});
