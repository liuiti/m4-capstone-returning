import { DataSource } from "typeorm";
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

  test("Deleta um usuário com o ID válido", async () => {
    const cpf = "12341660";
    const email = "novoemail60@email.com";
    const nome = "Joaquina ";
    const pendencia = false;
    const senha = "12345610";
    const telefone = 37142934;

    const usuarioInfo = { cpf, email, nome, pendencia, senha, telefone };
    const response = await request(app).post("/usuarios").send(usuarioInfo);
    const userId = response.body.id;
    return await request(app)
      .delete(`/usuarios/${userId} `)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Usuario deletado");
      });
  });
});
