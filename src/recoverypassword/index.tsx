import { useState } from "react";
import { url_api } from "../../variaveis_ambiente";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputPrimary from "../components/containers/formContainers/InputPrimary";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";

function RecoveryPassword() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (password === confirmPassword) {
        const dados = {
          password: password,
          token: token,
        };
        const data = await axios.post(url_api + "changepassword", dados);

        if (data) {
          navigate("/login");
        }
      } else {
        setErrorMessage("As senhas precisam ser iguais");
      }
    } catch (err: any) {
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <>
      {errormessage && <p>{errormessage}</p>}
      <div className="full-div overflow-hidden flex items-center justify-center">
        <div className="bg-background h-5/6 2xl:w-1/2 lg:w-2/3 sm:w-5/6 w-90vw flex-account rounded-2xl z-10">
          <form
            onSubmit={handleSubmit}
            className="flex-account md:p-20 p-10 text-center overflow-hidden"
          >
            <p className="mb-5 uppercase text-primary font-oswald header-style">
              Nova senha
            </p>

            <InputPrimary
              name="password"
              type="password"
              placeholder="senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <InputPrimary
              name="confirm-password"
              type="password"
              placeholder="confirmar senha"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <InputPrimary
              name=""
              type="text"
              placeholder="token"
              value={confirmPassword}
              onChange={(event) => setToken(event.target.value)}
            />
            <div>
              <ButtonPrimary buttonContent="Enviar" />
            </div>

            <p className="my-5">
              <ButtonSecondary
                href="/login"
                buttonContent="Retornar ao Login"
              />
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default RecoveryPassword;
