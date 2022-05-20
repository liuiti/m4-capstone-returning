import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Console } from "./Consoles";
import { Carrinho } from "./Carrinhos";

@Entity("pedidos")
export class Pedido {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column({ type: "varchar", length: 128, unique: true })
  console_id: string;
  @OneToOne(() => Console, (console) => console.id, {
    eager: true,
  })
  @JoinColumn()
  console: Console[];

  @Column({ type: "varchar", length: 128, unique: true })
  carrinho_id: string;
  @OneToOne(() => Carrinho, (carrinho) => carrinho.id, {
    eager: true,
  })
  @JoinColumn()
  carrinho: Carrinho[];
}
