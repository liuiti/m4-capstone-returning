import { Entity, Column, PrimaryColumn, OneToOne, OneToMany } from "typeorm";
import { usuario } from "./Usuarios";
import { pedido } from "./Pedidos";

@Entity("carrinhos")
export class carrinho {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column()
  usuario_id: string;
  @OneToOne(() => usuario, (usuario) => usuario.id, {
    eager: true,
  })
  usuario: usuario;

  @Column()
  pedido_id: string;
  @OneToMany(() => pedido, (pedido) => pedido.id, {
    eager: true,
  })
  pedido: pedido;
}
