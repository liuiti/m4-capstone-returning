import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("consoles")
export class console {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  nome: string;

  @Column({ type: "integer" })
  valor: number;

  @Column({ type: "varchar", length: 128 })
  dono: string;

  @Column({ type: "varchar", length: 128 })
  estado: string;

  @Column({ type: "varchar", length: 256 })
  observacao: string;

  @Column()
  disponivel: boolean;
}
