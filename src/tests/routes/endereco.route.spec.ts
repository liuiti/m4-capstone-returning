import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import app from "../../app"
import request from "supertest"
 


describe("Deve ser capaz de criar um novo endereço", () => {
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

  test("Deve ser capaz de inserir um novo endereço no database", async () => {
   
      const cidade = "São Paulo"
      const estado ="mg"
      const cep = "12546520"
      const rua = "ruaTeste"
      const numero = "545"
      const bairro = "Excelente1"
      const complemento = "Quero mais1"
      const usuarioId = "3dd6ebf1-b4d3-44f8-bb63-e6fe9db415be"
      
      const novoEndereco = {  cidade,
        estado,
        cep,
        rua,
        numero,
        bairro,
        complemento,
        usuarioId, }
      const response = await request(app).post("/enderecos").send(novoEndereco)
      
      expect(response.body).toBeTruthy();
      
  
  });
  test("Este teste deve ser capaz de listar um endereço",async()=>{
    const response = await request(app).get("/enderecos").send()

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map")
});
});


