export type USERInterface = {
  user_email: string;
  user_name: string;
  id: number;
  cnpjInfo: CNPJInterface[];
};

export type CNPJInterface = {
  cnpj: string;
  name_cnpj: string;
  name_client: string;
  email: string;
  contact: string;
  activity: string;
  status: string;
  dateForCall: string;
  comments: string;
  veiculos: VeiculoInterface[];
  vendedor: Vendedor;
};

export type VeiculoInterface = {
  marca: string;
  modelo: string;
  versao: string;
  quantidade: string;
  valor_anunciado: string;
  link_anuncio: string;
  forma_pagamento: string;
  usado_na_troca: string;
  seguro: string;
  tipo_de_compra: string;
  motivo_da_compra: string;
  prazo: string;
};

export type Vendedor = {
  usuarioLogado: string;
  telefoneUsuarioLogado: string;
  emailUsuarioLogado: string;
};
