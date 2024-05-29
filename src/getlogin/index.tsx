import Background from "../components/backgrounds/Background";
import ButtonTheme from "../themeButton";
import { Etheme, themes } from "../themeConsts";

//css styles
import "../assets/font.css";
import { useState } from "react";
import InputPrimary from "../components/containers/separated/InputPrimary";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";

function GetLogin() {
  const [theme, setTheme] = useState(themes.activeTheme);
  const handlesubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="full-div overflow-hidden flex items-center justify-center">
      <Background />
      <div
        className={`${
          theme === Etheme.light ? "bg-background" : "bg-dark-background"
        } h-5/6 2xl:w-1/2 lg:w-2/3 sm:w-5/6 w-90vw flex-account rounded-2xl z-10`}
      >
        <form
          onSubmit={handlesubmit}
          className="flex-account md:p-20 p-10 text-center overflow-hidden"
        >
          <p
            className={`${
              theme === Etheme.light ? "text-primary" : "text-dark-primary"
            } mb-5 uppercase font-oswald header-style`}
          >
            Esqueci minha senha
          </p>
          <div className="flex-col font-oswald">
            <select
              className={`${
                theme === Etheme.light
                  ? "text-primary bg-container"
                  : "text-dark-primary bg-dark-container"
              } w-full pl-3 text rounded-full`}
              defaultValue=""
            >
              <option value="" disabled hidden className="">
                Motivo ↴
              </option>
              <option value="" className="">
                Esqueci a senha
              </option>
              <option value="" className="">
                Esqueci o email
              </option>
              <option value="" className="">
                Lembro o login, mas não consigo logar
              </option>
              <option value="" className="">
                Outro motivo
              </option>
            </select>
          </div>
          <InputPrimary
            name=""
            type="email"
            placeholder="email"
            value={""}
            onChange={() => ""}
            theme={{ theme: theme }}
            className="w-full"
          />
          <div className="flex flex-row font-oswald">
            <ButtonPrimary buttonContent="Enviar" theme={{ theme: theme }} />
          </div>
          <p className="flex items-center justify-center">
            <ButtonSecondary
              href="/login"
              buttonContent="Voltar para o login!"
              theme={{ theme: theme }}
            />
            <div className="fixed bottom-3 right-4">
              <ButtonTheme theme={theme} setTheme={setTheme} />
            </div>
          </p>
        </form>
      </div>
    </div>
  );
}

export default GetLogin;
