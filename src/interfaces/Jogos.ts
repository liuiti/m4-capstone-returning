export interface IJogosCriar {
  nome: string;
  valor: number;
  descricao_jogo: string;
  dono: string;
  estado: string;
  disponivel: boolean;
}

export interface IJogosUpdate {
  nome: string;
  valor: number;
  descricao_jogo: string;
  dono: string;
  estado: string;
  disponivel: boolean;
  id: string;
}
