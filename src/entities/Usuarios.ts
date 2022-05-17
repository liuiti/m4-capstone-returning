import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class usuario {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  telefone: number;

  @Column()
  senha: string;
}
