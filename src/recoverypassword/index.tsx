import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import ButtonTheme from "../themeButton";
import { Etheme, themes } from "../themeConsts";
import InputRecovery from "./Components/InputsRecovery";
import hookHandleSubmit from "./Hooks/handleSubmit";

function RecoveryPassword() {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);

  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    hookHandleSubmit(
      event,
      password,
      confirmPassword,
      token,
      setErrorMessage,
      setSuccess,
      navigate
    );
  };

  const areInputsFilled = () => {
    return password && confirmPassword && token;
  };

  return (
    <>
      <div
        className={`full-div overflow-hidden flex items-center justify-center`}
      >
        <div
          className={`${
            theme === Etheme.light ? "bg-background" : "bg-dark-background"
          }  h-5/6 2xl:w-1/2 lg:w-2/3 sm:w-5/6 w-90vw flex-account justify-center items-center rounded-2xl z-10`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex-account text-center overflow-hidden w-full md:px-20 px-10"
          >
            <p className="mb-5 uppercase text-primary font-oswald header-style">
              Nova senha
            </p>
            <InputRecovery
              theme={{ theme: theme }}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              token={token}
              setToken={setToken}
              errormessage={errormessage}
            />

            {/*------------- BOTÃO DE ENVIAR ----------*/}
            <div>
              {success ? (
                <p className="my-5 font-oswald text-green-500">Senha trocada</p>
              ) : (
                <ButtonPrimary
                  type="submit"
                  buttonContent={"Enviar"}
                  theme={{ theme: theme }}
                  disabled={success || !areInputsFilled()} // disable button when message is shown or inputs are not filled
                />
              )}
            </div>

            <p className="my-5">
              <ButtonSecondary
                href="/Login"
                buttonContent="Retornar ao Login"
                theme={{ theme: theme }}
              />
            </p>
            {/*-----------//THEME --- BOTÃO DE MUDAR O TEMA ----------*/}
            <div className="fixed bottom-3 right-4">
              <ButtonTheme theme={theme} setTheme={setTheme} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RecoveryPassword;
