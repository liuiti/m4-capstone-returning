import { Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuarios";

@Entity("carrinhos")
export class Carrinho {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @OneToOne(() => Usuario, (usuario) => usuario.id, {
    eager: true,
  })
  @JoinColumn()
  usuario: Usuario[];
}
