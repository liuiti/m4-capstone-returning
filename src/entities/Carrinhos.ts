import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, ManyToMany} from "typeorm";
import { usuario } from "./Usuarios";
import { pedido } from "./Pedidos";

@Entity("carrinhos")
export class carrinho {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column()
  usuario_id: string;
  @OneToOne(() => usuario, (usuario) => usuario.id)
  @JoinColumn()
  usuario: usuario;

  @Column()
  pedido_id: string;
  @ManyToMany(() => pedido, (pedido) => pedido.id)
  @JoinColumn()
  pedido: pedido;
}
