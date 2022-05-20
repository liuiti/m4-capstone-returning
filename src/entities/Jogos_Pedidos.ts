import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Jogo } from "./Jogos";
import { Pedido } from "./Pedidos";


@Entity("jogos_pedidos")
export class Jogos_Pedidos {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  pedido_id: string;
    @ManyToOne(() => Pedido, (pedido_id) => pedido_id.id, {
        eager: true,
    }) @JoinColumn()
    pedido: Pedido[]
    
    
    @Column({ type: "varchar", length: 128 })
    jogo_id: string;
    @ManyToOne(() => Jogo, (jogo_id) => jogo_id.id, {
        eager: true,
    })
    @JoinColumn()
    jogo: Jogo[]
}
