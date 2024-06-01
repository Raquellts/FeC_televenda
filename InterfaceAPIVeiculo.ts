//MARCAS --------------------------------------------------------------------------------------

export type Imarca = {
  nome: string;
  codigo: string;
};

//MODELOS --------------------------------------------------------------------------------------
export type Imodelo = {
  nome: string;
  codigo: number;
};

export type Iano = {
  nome: string;
  codigo: string;
};

export type IgetModelos = {
  anos: Iano[];
  modelos: Imodelo[];
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
