//MARCAS --------------------------------------------------------------------------------------

export type Imarca = {
  nome: string;
  codigo: string;
};

//MODELOS --------------------------------------------------------------------------------------
export type Imodelo = {
  codigo: number;
  nome: string;
};
export type Imodelos = {
  modelos: Imodelo[];
};

export type Iano = {
  codigo: string;
  nome: string;
};
export type Ianos = {
  anos: Iano[];
};

export type IgetModelos = {
  Anos: Ianos;
  Modelos: Imodelos;
};

//INFORMACOES ------------------------------------------------------------------------------

export type Iinformacao = {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  TipoVeiculo: number;
  SiglaCombustivel: string;
};
