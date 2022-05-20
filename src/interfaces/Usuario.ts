export interface IUsuarioAtualizar {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: number;
  senha: string;
  pendencia: boolean;
}

export interface IUsuarioCriar {
  nome: string;
  cpf: string;
  email: string;
  telefone: number;
  senha: string;
  pendencia: boolean;
}
