import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import CriarUsuarioService from "../../services/usuario/criarUsuario.service";

describe("Criar usuários", () => {
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
    const usuario = await CriarUsuarioService.execute({
      cpf: "123456",
      email: "novoemail@email.com",
      nome: "Nome atualizado",
      pendencia: false,
      senha: "123456",
      telefone: 37142833,
    });

    expect(usuario).toBeTruthy();
    expect(usuario).toHaveProperty("id");
  });
});
