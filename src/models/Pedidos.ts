import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Carrinho } from "./Carrinhos";

@Entity("pedidos")
export class Pedido {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column({ type: "varchar", length: 128, unique: true })
  carrinho_id: string;
  @ManyToOne(() => Carrinho, (carrinho) => carrinho.id, {
    eager: true,
  })
  @JoinColumn()
  carrinho: Carrinho[];
}
