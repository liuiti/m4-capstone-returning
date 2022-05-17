import { Entity, Column, PrimaryColumn, ManyToMany, JoinColumn } from "typeorm";
import { jogo } from "./Jogos";
import {console} from "./Consoles";

@Entity("pedidos")
export class pedido {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column()
  jogos_id: string;
  @ManyToMany(() => jogo, (jogo) => jogo.id)
  @JoinColumn()
  jogo: jogo;

  @Column()
  videogame_id: string;
  @ManyToMany(() => console, (console) => console.id)
  @JoinColumn()
  console: console;
}
