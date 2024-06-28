import axios from "axios";
import baseURL, {
  Cnpj,
  CnpjOrder,
  CnpjPaginationResponse,
  CommonUser,
  Item,
  User,
} from "./API_utils";
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

//ATUALIZAR INFOS DECLIENTES-CNPJS ----- Lead
export const postUpdateCnpj = async (id: string, data: any): Promise<any> => {
  const response = await axiosWithAuth.put(baseURL + "/lead/" + id, data);
  return response.data.body;
};

export const postCommentCnpj = async (
  id: string,
  comments: string
): Promise<any> => {
  const response = await axiosWithAuth.post(baseURL + "/lead/comment/" + id, {
    comment: comments,
  });
  return response.data.body;
};

//PEGAR PEDIDOS DE CLIENTES-CNPJS ----- Order
export const getOrderByCnpjsId = async (id: string): Promise<CnpjOrder[]> => {
  const response = await axiosWithAuth.get(baseURL + "/order/lead/" + id);
  return response.data.body;
};

//CADASTRAR PEDIDOS DE CLIENTES-CNPJS ----- Order
export const postOrderByCnpjsId = async (
  id: string,
  data: Item
): Promise<Item> => {
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

//STATUS UPDATERS ------  status do pedido
export const putStatusOrder = async (
  orderId: string,
  status: string
): Promise<any> => {
  await axiosWithAuth.put(baseURL + "/order/status/" + orderId, { status });
};

//STATUS UPDATERS ------  status do CNPJ
export const putStatusCnpj = async (
  cnpjId: string,
  status: number,
  datetocall: string | null
): Promise<any> => {
  await axiosWithAuth.put(baseURL + "/lead/status/" + cnpjId, {
    status,
    datetocall,
  });
  {
    /*3 - suspenso | 4 - cancelado*/
  }
};

//PAGINAÇÃO DE CLIENTES-CNPJS
export const getCnpjsPagination = async (
  page: number,
  size: number
): Promise<CnpjPaginationResponse> => {
  const response = await axiosWithAuth.get(
    baseURL + `/lead/?page=${page}&size=${size}`
  );
  return response.data;
};
