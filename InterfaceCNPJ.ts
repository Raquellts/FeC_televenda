export type USERInterface = {
  user: string;
  id: number;
  cnpjInfo: CNPJInterface[];
};

export type CNPJInterface = {
  cnpj: string;
  name: string;
  email: string;
  contact: string;
  activity: string;
  status: string;
  dateForCall: string;
  comments: string;
  veiculos: VeiculoInterface[];
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
  participante_da_campanha: string;
  idodeloVersaoERP: string;
  urlVersao: string;
  usuarioLogado: string;
  telefoneUsuarioLogado: string;
  emailUsuarioLogado: string;
};
