// import { AppDataSource } from "../../../data-source";
// import { DataSource } from "typeorm";
// import CriarEnderecosService from "../../../services/Endereços/CriarEnderecos.service";

// describe("Deve ser capaz de criar um novo endereço", () => {
//   let conexaoDb: any = DataSource;

//   beforeAll(async () => {
//     await AppDataSource.initialize()
//       .then((res) => (conexaoDb = res))
//       .catch((err) => {
//         console.error("Error during data source initialization");
//       });
//   });

//   afterAll(async () => {
//     await conexaoDb.destroy();
//   });

//   test("Deve ser capaz de inserir um novo endereço no database", async () => {
//     const novoEndereco = new CriarEnderecosService();
//     const endereco = await novoEndereco.execute({
//       cidade: "São Paulo",
//       estado: "SP",
//       cep: "12546520",
//       rua: "ruaTeste",
//       numero: "25",
//       bairro: "bairroTeste",
//       complemento: "complementoTeste",
//       usuarioId: "a1d7a2d2-62f2-4e43-97a7-5005d9868923",
//     });
//     expect(endereco).toBeTruthy();
//   });
// });
