import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Pedido } from "./Pedidos";
import { Console } from "./Consoles";


@Entity("consoles_pedidos")
export class Console_Pedido {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  pedido_id: string;
  @ManyToOne(() => Pedido, (pedido_id) => pedido_id.id, {
    eager: true,
  })
  @JoinColumn()
  pedido: Pedido[];

  @Column({ type: "varchar", length: 128 })
  console_id: string;
  @ManyToOne(() => Console, (console_id) => console_id.id)
  @JoinColumn()
  console: Console[];
}
