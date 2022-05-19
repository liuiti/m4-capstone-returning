import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { usuario } from "./Usuarios";

@Entity("enderecos")
export class endereco {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  cidade: string;

  @Column({ type: "varchar", length: 2 })
  estado: string;

  @Column({ type: "varchar", length: 9 })
  cep: string;

  @Column({ type: "varchar", length: 50 })
  rua: string;

  @Column({ type: "varchar", length: 7 })
  numero: string;

  @Column({ type: "varchar", length: 128 })
  bairro: string;

  @Column({ type: "varchar", length: 100 })
  complemento: string;

  @Column({ type: "varchar", length: 128, unique: true })
  usuario_id: string;

  @OneToOne(() => usuario, (usuario) => usuario.id, {
    eager: true,
  })
  @JoinColumn()
  usuario: usuario[];
}

/* 

 @OneToOne(() => usuario, (usuario) => usuario.id)
  @JoinColumn()
  usuario: usuario;
  
  
   @OneToOne(() => usuario, (usuario) => usuario.id, {
    eager: true,
  })
  usuario: usuario;
*/
