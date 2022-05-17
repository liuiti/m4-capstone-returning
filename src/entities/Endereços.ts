import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { usuario } from "./Usuarios";

@Entity("enderecos")
export class endereco {
  @PrimaryColumn("bigint")
  readonly id: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

  @Column()
  usuario_id: string;

  @OneToOne(() => usuario, (usuario) => usuario.id)
  @JoinColumn()
  usuario: usuario;
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
