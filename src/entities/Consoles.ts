import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("consoles")
export class console {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  dono: string;

  @Column()
  estado: string;

  @Column()
  observacao: string;

  @Column()
  disponivel: boolean;

}
