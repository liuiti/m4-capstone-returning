import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaUsuario1652816388960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: "usuarios",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "nome",
            type: "varchar",
            length: "128",
          },
          {
            name: "email",
            type: "varchar",
            length: "128",
          },
          {
            name: "cpf",
            type: "varchar",
            length: "128",
          },
          {
            name: "telefone",
            type: "integer",
          },
          {
            name: "senha",
            type: "varchar",
            length: "128",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuarios");
  }
}
