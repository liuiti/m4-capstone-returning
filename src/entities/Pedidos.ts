import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import  Jogo from "./Jogos";
import { console } from "./Consoles";

@Entity("pedidos")
export class pedido {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column()
  jogos_id: string;
  @OneToOne(() => Jogo, (jogo) => jogo.id, {
    eager: true,
  })@JoinColumn()
  Jogo: Jogo[];

  @Column()
  console_id: string;
  @OneToOne(() => console, (console) => console.id, {
    eager: true,
  })@JoinColumn()

  console: console[];
}
