import { Entity, Column, PrimaryColumn, ManyToMany, JoinColumn } from "typeorm";
import { Jogo } from "./Jogos";
import { console } from "./Consoles";

@Entity("pedidos")
export class pedido {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column()
  jogos_id: string;
  @ManyToMany(() => Jogo, (jogo) => jogo.id, {
    eager: true,
  })
  Jogo: Jogo;

  @Column()
  videogame_id: string;
  @ManyToMany(() => console, (console) => console.id, {
    eager: true,
  })
  console: console;
}
