import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testando a rota de usuários", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
        const cpf = "123456";
        const email = "novoemail@email.com";
        const nome = "Nome atualizado";
        const pendencia = false;
        const senha = "123456";
        const telefone = 37142833;

        const usuarioInfo = { cpf, email, nome, pendencia, senha, telefone };

        request(app).post("/usuarios").send(usuarioInfo);
      })
      .catch((err) => {
        console.error("Erro durante a inicialização do Data Source", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  let expectedProps = [
    "id",
    "cpf",
    "email",
    "nome",
    "pendencia",
    "senha",
    "telefone",
  ];

  /* test("Deverá retornar um array JSON", async () => {
    return request(app)
      .get("/usuarios")
      .expect(200)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Array);
      });
  }); */

  test("Deverá retornar objetos com as propriedades corretas", async () => {
    return request(app)
      .get("/usuarios")
      .expect(200)
      .then((res) => {
        let sampleKeys = Object.keys(res.body[0]);
        expectedProps.forEach((key) => {
          expect(sampleKeys.includes(key)).toBe(true);
        });
      });
  });
});
