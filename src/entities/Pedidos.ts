import { Entity, Column, PrimaryColumn, ManyToMany, OneToOne } from "typeorm";
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
  })
  Jogo: Jogo;

  @Column()
  console_id: string;
  @OneToOne(() => console, (console) => console.id, {
    eager: true,
  })
  console: console;
}
