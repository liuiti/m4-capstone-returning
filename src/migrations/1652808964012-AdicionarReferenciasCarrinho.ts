import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AdicionarReferenciasCarrinho1652808964012
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "carrinho",
      new TableForeignKey({
        name: "UsuarioFK",
        columnNames: ["usuarioId"],
        referencedColumnNames: ["id"],
        referencedTableName: "usuarios",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "carrinho",
      new TableForeignKey({
        name: "PedidoFK",
        columnNames: ["pedidoId"],
        referencedColumnNames: ["id"],
        referencedTableName: "pedidos",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("carrinho", "UsuarioFK");
    await queryRunner.dropForeignKey("carrinho", "PedidoFK");
  }
}
