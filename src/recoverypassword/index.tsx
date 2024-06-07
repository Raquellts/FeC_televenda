import { useState } from "react";
import { url_api } from "../../variaveis_ambiente";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import InputPrimary from "../components/containers/separated/InputPrimary";
import ButtonTheme from "../themeButton";
import { Etheme, themes } from "../themeConsts";
import SVGKey from "../components/SVGs/USER/SVGKey";
import SVGAsterisk from "../components/SVGs/SYMBOLS/SVGAsterisk";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

function RecoveryPassword() {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);

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
      {errormessage && <p>{errormessage}</p>}{" "}
      <div
        className={`full-div overflow-hidden flex items-center justify-center`}
      >
        <div
          className={`${
            theme === Etheme.light ? "bg-background" : "bg-dark-background"
          }  h-5/6 2xl:w-1/2 lg:w-2/3 sm:w-5/6 w-90vw flex-account rounded-2xl z-10`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex-account md:p-20 p-10 text-center overflow-hidden"
          >
            <p className="mb-5 uppercase text-primary font-oswald header-style">
              Nova senha
            </p>

            {/*------------- NOVA SENHA --- SVG KEY -------------*/}
            <div
              className={`${
                theme === Etheme.light ? "text-primary" : "text-dark-primary"
              } flex items-center`}
            >
              <div
                className={`${
                  theme === Etheme.light ? "bg-container" : "bg-dark-container"
                } p-svgOnInput rounded-s-2xl`}
              >
                <SVGKey
                  width={width_svg}
                  height={height_svg}
                  fill_one="none"
                  fill_two={fill_Two_svg}
                />
              </div>
              <InputPrimary
                name="password"
                type="password"
                placeholder="nova senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                theme={{ theme: theme }}
                className="w-full right-rounded"
              />
            </div>

            {/*------------- REPETIR NOVA SENHA --- SVG KEY -------------*/}
            <div
              className={`${
                theme === Etheme.light ? "text-primary" : "text-dark-primary"
              } flex items-center`}
            >
              <div
                className={`${
                  theme === Etheme.light ? "bg-container" : "bg-dark-container"
                } p-svgOnInput rounded-s-2xl`}
              >
                <SVGKey
                  width={width_svg}
                  height={height_svg}
                  fill_one="none"
                  fill_two={fill_Two_svg}
                />
              </div>
              <InputPrimary
                name="confirm-password"
                type="password"
                placeholder="confirmar senha"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                theme={{ theme: theme }}
                className="w-full right-rounded"
              />
            </div>

            {/*------------- TOKEN DE ACESSO --- SVG ASTERISK -------------*/}
            <div
              className={`${
                theme === Etheme.light ? "text-primary" : "text-dark-primary"
              } flex items-center`}
            >
              <div
                className={`${
                  theme === Etheme.light ? "bg-container" : "bg-dark-container"
                } p-svgOnInput rounded-s-2xl`}
              >
                <SVGAsterisk
                  width={width_svg}
                  height={height_svg}
                  fill_one="none"
                  fill_two={fill_Two_svg}
                />
              </div>
              <InputPrimary
                name=""
                type="text"
                placeholder="token"
                value={confirmPassword}
                onChange={(event) => setToken(event.target.value)}
                theme={{ theme: theme }}
                className="w-full right-rounded"
              />
            </div>

            {/*------------- BOTÃO DE ENVIAR ----------*/}
            <div>
              <ButtonPrimary buttonContent="Enviar" theme={{ theme: theme }} />
            </div>

            <p className="my-5">
              <ButtonSecondary
                href="/login"
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
