import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarCarrinho1652808257842 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "carrinho",
        columns: [
          {
            name: "id",
            type: "bigserial",
            isPrimary: true,
          },
          {
            name: "usuarioId",
            type: "varchar",
            length: "128",
          },
          {
            name: "pedidoId",
            type: "varchar",
            length: "128",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("carrinho");
  }
}
