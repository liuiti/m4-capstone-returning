import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import Jogo from "./Jogos";
import { console } from "./Consoles";

@Entity("pedidos")
export class pedido {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column({ type: "varchar", length: 128, unique: true })
  jogos_id: string;
<<<<<<< HEAD
  @ManyToMany(() => Jogo, (jogo) => jogo.id, {
=======
  @OneToOne(() => Jogo, (jogo) => jogo.id, {
>>>>>>> 750eebc5bbf03169cfc32dff63664b6d0bf25567
    eager: true,
  })
  @JoinColumn()
  Jogo: Jogo[];

  @Column({ type: "varchar", length: 128, unique: true })
  console_id: string;
  @OneToOne(() => console, (console) => console.id, {
    eager: true,
  })
  @JoinColumn()
  console: console[];
}
