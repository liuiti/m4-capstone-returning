import { MigrationInterface, QueryRunner } from "typeorm";

export class TesteReferences1652894417914 implements MigrationInterface {
    name = 'TesteReferences1652894417914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "telefone" integer NOT NULL, "senha" character varying NOT NULL, "pendencia" boolean NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jogos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "valor" integer NOT NULL, "dono" character varying NOT NULL, "estado" character varying NOT NULL, "observacao" character varying NOT NULL, "disponivel" boolean NOT NULL, CONSTRAINT "PK_7312a4a154694e761783f910223" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consoles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "valor" integer NOT NULL, "dono" character varying NOT NULL, "estado" character varying NOT NULL, "observacao" character varying NOT NULL, "disponivel" boolean NOT NULL, CONSTRAINT "PK_bde30fa4acf34faf40555da2332" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" bigint NOT NULL, "jogos_id" character varying NOT NULL, "console_id" character varying NOT NULL, "jogoId" uuid, "consoleId" uuid, CONSTRAINT "REL_3ae02460fff7022ad1b7aa8d02" UNIQUE ("jogoId"), CONSTRAINT "REL_03ee4654b5088c47ade789f502" UNIQUE ("consoleId"), CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrinhos" ("id" bigint NOT NULL, "usuario_id" character varying NOT NULL, "pedido_id" character varying NOT NULL, "usuarioId" uuid, CONSTRAINT "REL_ff45b69dce2f1ce3032c0a41f8" UNIQUE ("usuarioId"), CONSTRAINT "PK_8ed80828de93327d4601c21c30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "enderecos" ("id" bigint NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "cep" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "bairro" character varying NOT NULL, "complemento" character varying NOT NULL, "usuario_id" character varying NOT NULL, "usuarioId" uuid, CONSTRAINT "REL_3fda1857bc40b2c12b9562101a" UNIQUE ("usuarioId"), CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_3ae02460fff7022ad1b7aa8d021" FOREIGN KEY ("jogoId") REFERENCES "jogos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_03ee4654b5088c47ade789f5029" FOREIGN KEY ("consoleId") REFERENCES "consoles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carrinhos" ADD CONSTRAINT "FK_ff45b69dce2f1ce3032c0a41f89" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD CONSTRAINT "FK_3fda1857bc40b2c12b9562101ac" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enderecos" DROP CONSTRAINT "FK_3fda1857bc40b2c12b9562101ac"`);
        await queryRunner.query(`ALTER TABLE "carrinhos" DROP CONSTRAINT "FK_ff45b69dce2f1ce3032c0a41f89"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_03ee4654b5088c47ade789f5029"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_3ae02460fff7022ad1b7aa8d021"`);
        await queryRunner.query(`DROP TABLE "enderecos"`);
        await queryRunner.query(`DROP TABLE "carrinhos"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "consoles"`);
        await queryRunner.query(`DROP TABLE "jogos"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
