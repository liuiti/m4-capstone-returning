import { Entity, Column, PrimaryColumn, ManyToMany, OneToOne } from "typeorm";
import  Jogo from "./Jogos";
import { console } from "./Consoles";

@Entity("pedidos")
export class pedido {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column()
  jogos_id: string;
<<<<<<< HEAD
  @ManyToMany(() => Jogo, (jogo) => jogo.id, {
=======
  @OneToOne(() => Jogo, (jogo) => jogo.id, {
>>>>>>> 750eebc5bbf03169cfc32dff63664b6d0bf25567
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
