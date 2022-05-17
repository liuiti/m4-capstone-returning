import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class AdicionarReferenciasPedido1652810260265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "pedidos",
            new TableForeignKey({
                name:"JogoFK",
                columnNames:["jogoId"],
                referencedColumnNames:["id"],
                referencedTableName:"jogos",
                onDelete: "CASCADE",
                onUpdate: "CASACADE"
            })
        )

        await queryRunner.createForeignKey(
            "carrinho",
            new TableForeignKey({
                name:"ConsoleFK",
                columnNames:["consoleId"],
                referencedColumnNames:["id"],
                referencedTableName:"consoles",
                onDelete: "CASCADE",
                onUpdate: "CASACADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("pedidos","JogoFK")
        await queryRunner.dropForeignKey("pedidos","ConsoleFK")
    }

}
