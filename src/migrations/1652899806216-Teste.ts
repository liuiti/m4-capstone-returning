import { MigrationInterface, QueryRunner } from "typeorm";

export class Teste1652899806216 implements MigrationInterface {
    name = 'Teste1652899806216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(128) NOT NULL, "cpf" character varying(11) NOT NULL, "email" character varying(128) NOT NULL, "telefone" integer NOT NULL, "senha" character varying(128) NOT NULL, "pendencia" boolean NOT NULL DEFAULT 'false', CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jogos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(128) NOT NULL, "descricao" character varying(256) NOT NULL, "valor" numeric(8,2) NOT NULL, "dono" character varying(128) NOT NULL, "estado" character varying(128) NOT NULL, "observacao" character varying(256) NOT NULL, "disponivel" boolean NOT NULL, CONSTRAINT "PK_7312a4a154694e761783f910223" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consoles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(128) NOT NULL, "valor" integer NOT NULL, "dono" character varying(128) NOT NULL, "estado" character varying(128) NOT NULL, "observacao" character varying(256) NOT NULL, "disponivel" boolean NOT NULL, CONSTRAINT "PK_bde30fa4acf34faf40555da2332" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" bigint NOT NULL, "jogos_id" character varying(128) NOT NULL, "console_id" character varying(128) NOT NULL, "jogoId" uuid, "consoleId" uuid, CONSTRAINT "UQ_bf1294d0c8fcdc0a04d24939e40" UNIQUE ("jogos_id"), CONSTRAINT "UQ_6bc0deffcf546622c88345c7909" UNIQUE ("console_id"), CONSTRAINT "REL_3ae02460fff7022ad1b7aa8d02" UNIQUE ("jogoId"), CONSTRAINT "REL_03ee4654b5088c47ade789f502" UNIQUE ("consoleId"), CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrinhos" ("id" bigint NOT NULL, "usuario_id" character varying(128) NOT NULL, "pedido_id" character varying(128) NOT NULL, "usuarioId" uuid, CONSTRAINT "REL_ff45b69dce2f1ce3032c0a41f8" UNIQUE ("usuarioId"), CONSTRAINT "PK_8ed80828de93327d4601c21c30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "enderecos" ("id" bigint NOT NULL, "cidade" character varying(128) NOT NULL, "estado" character varying(2) NOT NULL, "cep" character varying(9) NOT NULL, "rua" character varying(50) NOT NULL, "numero" character varying(7) NOT NULL, "bairro" character varying(128) NOT NULL, "complemento" character varying(100) NOT NULL, "usuario_id" character varying(128) NOT NULL, "usuarioId" uuid, CONSTRAINT "UQ_702a2d47c2a196c1c8596dbf2b5" UNIQUE ("usuario_id"), CONSTRAINT "REL_3fda1857bc40b2c12b9562101a" UNIQUE ("usuarioId"), CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
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
