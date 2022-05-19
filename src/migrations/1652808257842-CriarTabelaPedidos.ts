import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaPedidos1652808257842 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pedidos",
        columns: [
          {
            name: "id",
            type: "bigserial",
            isPrimary: true,
          },
          {
            name: "jogosId",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "consoleId",
            type: "uuid",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pedidos");
  }
}
