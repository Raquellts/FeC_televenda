import axios from "axios";
import baseURL, { CommonUser, User } from "./API_utils";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

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
