import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Pedido } from "./Pedidos";
import { Console } from "./Consoles";


@Entity("pedidos_consoles")
export class Pedidos_Consoles {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  pedido_id: string;
  @ManyToOne(() => Pedido, (pedido_id) => pedido_id.id, {
    eager: true,
  })
  @JoinColumn()
  id_pedido: Pedido[];

  @Column({ type: "varchar", length: 128 })
  console_id: string;
  @ManyToOne(() => Console, (console_id) => console_id.id)
  @JoinColumn()
  console_pedido: Console[];
}
