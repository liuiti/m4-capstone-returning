import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("pedidos_consoles")
export class Pedidos_Consoles {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  console_id: string;

  @Column({ type: "varchar", length: 128 })
  pedido_id: string;
}
