import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaPedidos1652808964012 implements MigrationInterface {
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
            name: "jogoId",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "consoleId",
            type: "varchar",
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
