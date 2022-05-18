import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("jogos")
export class Jogo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  valor: number;

  @Column()
  dono: string;

  @Column()
  observacao: string;
}
