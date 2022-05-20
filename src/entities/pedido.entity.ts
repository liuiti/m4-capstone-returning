import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Jogo } from "./jogo.entity";
import { Console } from "./console.entity";

@Entity("pedidos")
export class Pedido {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column({ type: "varchar", length: 128, unique: true })
  jogos_id: string;
  @OneToOne(() => Jogo, (jogo) => jogo.id, {
    eager: true,
  })
  @JoinColumn()
  Jogo: Jogo[];

  @Column({ type: "varchar", length: 128, unique: true })
  console_id: string;
  @OneToOne(() => Console, (console) => console.id, {
    eager: true,
  })
  @JoinColumn()
  console: Console[];
}
