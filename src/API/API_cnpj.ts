import axios from "axios";
import baseURL, { Cnpj, CnpjOrder, CommonUser, User } from "./API_utils";
import axiosWithAuth from "../midleware/axiosWithAuth";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//______________________________________________ COMMON ROUTES - NO PROTECTION ______________________________________________//

//LISTA DE SUPERVISORES ------  ACESSO: COMUNS
export const getSupervisor = async (): Promise<User[]> => {
  const response = await axios.get(baseURL + "/user/Supervisors");
  return response.data.body;
};

/// USUARIOS COMUNS - CADASTRO
export const postCommonUser = async (data: CommonUser): Promise<User[]> => {
  const response = await axios.post(baseURL + "/auth/register", data);
  return response.data.body;
};

//ESQUECI A SENHA
export const postForgotPassword = async (emailData: { email: string }) => {
  const response = await axios.post(
    baseURL + "/auth/forgot-password",
    emailData,
    config
  );
  const data: { msg: string } = response.data;
  return data;
};

//RESETAR PARA NOVA SENHA
export const postResetPassword = async (dados: {
  password: string;
  token: string;
}) => {
  const response = await axios.post(baseURL + "/auth/reset-password", dados);
  return response.data;
};

//______________________________________________ PROTECTED ROUTES - PROTECTION BY COOKIES ______________________________________________//

//LISTA DE CLIENTES-CNPJS ----- Lead
export const getCnpjs = async (): Promise<Cnpj[]> => {
  const response = await axiosWithAuth.get(baseURL + "/lead/");
  return response.data.body;
};

//PEGAR PEDIDOS DE CLIENTES-CNPJS ----- Order
export const getOrderByCnpjsId = async (id: string): Promise<CnpjOrder> => {
  const response = await axiosWithAuth.get(baseURL + "/order/lead/" + id);
  return response.data.body;
};

//CADASTRAR PEDIDOS DE CLIENTES-CNPJS ----- Order
export const postOrderByCnpjsId = async (
  id: string,
  data: CnpjOrder
): Promise<CnpjOrder> => {
  const response = await axiosWithAuth.post(baseURL + "/order/" + id, data);
  return response.data.body;
};

//LISTA DE USUARIOS ------ ACESSO: COMUNS
export const getCommonUser = async (): Promise<User> => {
  const response = await axiosWithAuth.get(baseURL + "/user/");
  return response.data.body;
};

//LISTA D TODOS OS USUARIOS ------  ACESSO: SUPERVISORES
export const getAllCommonUser = async (): Promise<User[]> => {
  const response = await axiosWithAuth.get(baseURL + "/user/ByRole");
  return response.data.body;
};
