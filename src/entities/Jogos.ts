import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("jogos")
export class jogo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  descrição: string;

  @Column()
  valor: number;

  @Column()
  dono: string;
}
