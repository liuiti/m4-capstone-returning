import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  OneToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { Usuario } from "./Usuarios";
import { Pedido } from "./Pedidos";

@Entity("carrinhos")
export class carrinho {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  usuario_id: string;
  @OneToOne(() => Usuario, (Usuario) => Usuario.id, {
    eager: true,
  })
  @JoinColumn()
  usuario: Usuario[];

  @Column({ type: "varchar", length: 128 })
  pedido_id: string;
  @OneToMany(() => Pedido, (pedido) => pedido.id, {
    eager: true,
  })
  @JoinColumn()
  pedido: Pedido[];
}
