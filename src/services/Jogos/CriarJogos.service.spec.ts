// import { AppDataSource } from './../../data-source';
// import { DataSource } from 'typeorm';



// describe("Deve ser capaz de criar um novo jogo", () => {
//     let conexaoDb:any = DataSource

    

//     beforeAll(async () => {
//         await AppDataSource.initialize()
//             .then(res => conexaoDb = res)
//             .catch(err => {
//             console.error("Error during data source initialization")
//         })
//     })

//     afterAll(async () => {
//         await conexaoDb.destroy();
//     })

//     test("Deve ser capaz de inserir um novo jogo no database", async () => {
//         const nome = "Jogo de teste"
//         const valor = "10"
//         const descricao = "Jogo de aventura"
//         const dono = "returning"
//         const observacao = "publico adulto"
//         const estado = "bom estado"
//         const disponivel = true
        

//         const jogoInfo = { nome, valor, descricao, dono, observacao, estado, disponivel }
        
//         const novoJogo = await 

//             expect(novoJogo).toContain(
//                 {
//                  nome, valor, descricao, dono, observacao, estado, disponivel, id
//              }
//         )

//     })
    
// });




