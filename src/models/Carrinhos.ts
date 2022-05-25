import {
  Entity,
  OneToOne,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { Usuario } from "./Usuarios";

@Entity("carrinhos")
export class Carrinho {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column()
  usuarioId: string;

  @Column({ type: "decimal", precision: 8, scale: 2, default: 0 })
  total: number;

  @OneToOne(() => Usuario, (usuario) => usuario.id, {
    eager: true,
  })
  @JoinColumn()
  usuario: Usuario[];
}
