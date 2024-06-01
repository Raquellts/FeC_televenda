import { Imarca, IgetModelos, Iano, Iinformacao } from "./InterfaceAPIVeiculo";
import axios from "axios";

//MARCAS --------------------------------------------------------------------------------------

export const GetMarcas = async (tipo: string): Promise<Imarca[]> => {
  try {
    const response = await axios.get(
      `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas`
    );

    if (!response.data) {
      throw new Error("Invalid API response format");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching marcas:", error);
    throw error;
  }
};
//MODELOS --------------------------------------------------------------------------------------

export const GetModelos = async (tipo: string, marca: string) => {
  const data = await axios.get(
    `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos`
  );
  const response: IgetModelos = data.data;
  return response;
};

//ANO --------------------------------------------------------------------------------------

export const GetAnos = async (tipo: string, marca: string, modelo: string) => {
  const data = await axios.get(
    `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos/${modelo}/anos`
  );
  const response: Iano[] = data.data;
  return response;
};

//INFORMACOES ------------------------------------------------------------------------------

export const GetInformacoes = async (
  marca: string,
  modelo: string,
  ano: string,
  tipo: string
) => {
  const data = await axios.get(
    `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`
  );
  const response: Iinformacao = data.data;
  return response;
};
