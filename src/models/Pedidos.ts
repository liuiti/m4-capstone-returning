import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Carrinho } from "./Carrinhos";

@Entity("pedidos")
export class Pedido {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column({ type: "varchar", length: 128, unique: true })
  carrinho_id: string;
  @ManyToOne(() => Carrinho, (carrinho) => carrinho.id, {
    eager: true,
  })
  @JoinColumn()
  carrinho: Carrinho[];
}
