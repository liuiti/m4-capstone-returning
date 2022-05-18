import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("jogos")
export default class Jogo {
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
  estado:string;

  @Column()
  observacao: string;

  @Column()
  disponivel:boolean;
}