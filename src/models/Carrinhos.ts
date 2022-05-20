import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Usuario } from "./Usuarios";

@Entity("carrinhos")
export class Carrinho {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  usuario_id: string;
  @OneToOne(() => Usuario, (usuario) => usuario.id, {
    eager: true,
  })
  @JoinColumn()
  usuario: Usuario[];
}
