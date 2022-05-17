import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaEndereco1652800204610 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "enderecos",
        columns: [
          {
            name: "id",
            type: "bigserial",
            isPrimary: true,
          },
          {
            name: "cidade",
            type: "varchar",
            length: "50",
          },
          {
            name: "estado",
            type: "varchar",
            length: "2",
          },
          {
            name: "cep",
            type: "varchar",
            length: "9",
          },
          {
            name: "rua",
            type: "varchar",
            length: "50",
          },
          {
            name: "numero",
            type: "varchar",
            length: "7",
          },
          {
            name: "bairro",
            type: "varchar",
            length: "128",
          },
          {
            name: "complemento",
            type: "varchar",
            length: "100",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("enderecos");
  }
}
