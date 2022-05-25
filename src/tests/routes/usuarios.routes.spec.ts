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

  test("Deverá criar um novo usuário", async () => {
    const cpf = "123456";
    const email = "novoemail@email.com";
    const nome = "Nome atualizado";
    const pendencia = false;
    const senha = "123456";
    const telefone = 37142833;

    const usuarioInfo = { cpf, email, nome, pendencia, senha, telefone };

    const response = await request(app).post("/usuarios/").send(usuarioInfo);

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

  let expectedProps = [
    "id",
    "cpf",
    "email",
    "nome",
    "pendencia",
    "senha",
    "telefone",
  ];
  test("Deverá retornar um array JSON", async () => {
    return request(app)
      .get("/usuarios")
      .expect(200)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });

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

  test("Deve atualizar um usuário no banco de dados", async () => {
    const cpf = "12345660";
    const email = "novoemail50@email.com";
    const nome = "Nome bem atualizado ";
    const pendencia = false;
    const senha = "12345680";
    const telefone = 37142834;

    const usuarioInfo = { cpf, email, nome, pendencia, senha, telefone };
    const response = await request(app).post("/usuarios").send(usuarioInfo);
    const userId = response.body.id;
    return await request(app)
      .patch(`/usuarios/${userId} `)
      .send({ nome: "Maria" })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.usuarioAtualizado.nome).toBe("Maria");
      });
  });

  test("Deleta o usuário com o ID válido", async () => {
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
