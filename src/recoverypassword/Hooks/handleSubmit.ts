import { postResetPassword } from "../../API/API_cnpj";

export const hookHandleSubmit = async (
  event: React.FormEvent,
  password: string,
  confirmPassword: string,
  token: string,
  setErrorMessage: (message: string) => void,
  setSuccess: (success: boolean) => void,
  navigate: (path: string) => void
) => {
  event.preventDefault();

  try {
    if (password === confirmPassword) {
      const dados = {
        password: password,
        token: token,
      };
      postResetPassword(dados);
      setSuccess(true); // show success message
      setTimeout(() => {
        navigate("/Login");
      }, 1000); // redirect after 1 second
    } else {
      setErrorMessage("As senhas precisam ser iguais ⤴");
    }
  } catch (err: any) {
    setErrorMessage(err.response.data.message);
  }
};

export default hookHandleSubmit;
