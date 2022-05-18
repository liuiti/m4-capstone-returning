import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { boolean } from "yup";

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

  @Column()
  pendencia:boolean;
  
}
