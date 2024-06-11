import axios from "axios";
import baseURL, { Cnpj, CnpjOrder, CommonUser, User } from "./API_utils";
import axiosWithAuth from "../midleware/axiosWithAuth";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//______________________________________________ COMMON ROUTES - NO PROTECTION ______________________________________________//

//LISTA DE USUARIOS ------ ADMINISTRADORES
export const getSupervisor = async (): Promise<User[]> => {
  const response = await axios.get(baseURL + "/user/Supervisors");
  return response.data;
};

/// USUARIOS COMUNS - CADASTRO
export const postCommonUser = async (data: CommonUser): Promise<User[]> => {
  const response = await axios.post(baseURL + "/auth/register", data);
  return response.data;
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
  return response.data;
};

//PEDIDOS DE CLIENTES-CNPJS ----- Order
export const getOrderByCnpjsId = async (id: string): Promise<CnpjOrder> => {
  const response = await axiosWithAuth.get(baseURL + "/order/lead/" + id);
  return response.data;
};
