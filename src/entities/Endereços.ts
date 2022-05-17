import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("enderecos")
export class endereco {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

}
