import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarCarrinho1652808843948 implements MigrationInterface {
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
            type: "uuid",
          },
          {
            name: "pedidoId",
            type: "bigserial",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("carrinho");
  }
}
