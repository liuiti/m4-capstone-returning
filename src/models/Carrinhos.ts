import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuarios";

@Entity("carrinhos")
export class Carrinho {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  usuario_id: string;
  @OneToOne(() => Usuario, (usuario) => usuario.id, {
    eager: true,
  })
  @JoinColumn()
  usuario: Usuario[];
}
