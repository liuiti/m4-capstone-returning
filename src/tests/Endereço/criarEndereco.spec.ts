/* import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testando a rota de usuários", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Erro durante a inicialização do Data Source", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Deverá criar um novo usuário", async () => {
    const cpf = "123456";
    const email = "novoemail@email.com";
    const nome = "Nome atualizado";
    const pendencia = false;
    const senha = "123456";
    const telefone = 37142833;

    const usuarioInfo = { cpf, email, nome, pendencia, senha, telefone };

    const response = await request(app).post("/usuarios").send(usuarioInfo);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: response.body.id,
        cpf,
        email,
        nome,
        pendencia,
        senha: response.body.senha,
        telefone,
      })
    );
  });
});
 */
