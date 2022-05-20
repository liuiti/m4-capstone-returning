import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("jogos_pedidos")
export class Jogos_Pedidos {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  jogo_id: string;

  @Column({ type: "varchar", length: 128 })
  pedido_id: string;
}
