import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Cookies from "js-cookie";
import axiosWithAuth from "../midleware/axiosWithAuth";
import ApiError from "../APIError";
import baseURL from "../API/API_utils";
//components
import logo from "../assets/SVG/LOGO FILLED.svg";
import logoDeveloper from "../assets/SVG/stat&sat.svg";
import Background from "../components/backgrounds/Background";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import InputPrimary from "../components/Elements_for_Forms/InputPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
//styles
import "../assets/font.css";
import ButtonTheme from "../themeButton";
import { Etheme, themes } from "../themeConsts";
import SVGUser from "../components/SVGs/USER/SVGUser";
import SVGKey from "../components/SVGs/USER/SVGKey";
import Tooltip from "../components/containers/separated/tooltip";

interface loginInterface {
  username: string;
  password: string;
}

function Login() {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<loginInterface>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 4);

  const handlesubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await axiosWithAuth.post(baseURL + "/auth/login", formData);
      if (data) {
        Cookies.set("Token", data.data.token, { expires: expirationDate });
        navigate("/");
      }
    } catch (err: unknown) {
      if (err instanceof Error && "response" in err) {
        const apiError = err as ApiError;
        setError(apiError.response.data.message);
      } else {
        // Handle other types of errors or re-throw
        throw err;
      }
    }
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  /*SVG CONSTS*/ const fill_Two_svg = "currentColor";
  /*SVG CONSTS*/ let width_svg = 23;
  /*SVG CONSTS*/ let height_svg = 23;

  if (isMobile) {
    width_svg = 16;
    height_svg = 16;
  }

  return (
    <div
      className={`full-div overflow-hidden flex items-center justify-center lg:justify-start`}
    >
      <Background />

      <div
        className={`${
          theme === Etheme.light ? "bg-background" : "bg-dark-background"
        } lg:h-100 h-90 xl:w-2/5 lg:w-1/2 sm:w-5/6 w-90vw lg:m-0 flex-account rounded-2xl lg:rounded-none z-10 justify-center`}
      >
        <p>{error ? error : null}</p>

        <form
          onSubmit={handlesubmit}
          className="flex-account md:p-20 p-10 text-center overflow-hidden"
        >
          {/*------------- LOGO DE TELA MENOR --- LG:HIDDEN -------------*/}
          <img
            src={logo}
            alt="logo"
            className="h-44 lg:hidden my-5 logo_filter"
          />

          {/*------------- HEADER DE LOGIN --- ENTRAR -------------*/}
          <p
            className={`${
              theme === Etheme.light ? "text-primary" : "text-dark-primary"
            } mb-5 uppercase font-oswald header-style`}
          >
            Entrar
          </p>

          {/*------------- IMPUT DE EMAIL --- SVG USER -------------*/}
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
              <SVGUser
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
            </div>
            <InputPrimary
              name="UserEmail"
              type="email"
              placeholder="Email ou Usuário"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              theme={{ theme: theme }}
              className="w-full right-rounded"
            />
          </div>

          {/*------------- IMPUT DE SENHA --- SVG KEY -------------*/}
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
              name="UserPassword"
              type="password"
              placeholder="Senha"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              theme={{ theme: theme }}
              className="w-full right-rounded"
            />
          </div>

          {/*------------- BOTÃO DE LOGIN --- ENTRAR -------------*/}
          <div className="flex flex-col lg:flex-col font-oswald md:mx-3 mx-14 lg:mx-0">
            <div className={`w-full text-xs md:text-sm`}>
              <ButtonPrimary
                buttonContent="Entrar"
                theme={{ theme: theme }}
                className="w-full"
                type="submit"
              />
            </div>

            {/* BOTOES recuperar senha e criar conta VVVV */}
            <ButtonSecondary
              href="/Forgot"
              buttonContent="Esqueci a senha!"
              theme={{ theme: theme }}
              className="mx-30 my-0"
            />
          </div>

          <p className="text-secondary font-oswald">
            Não tem uma conta?
            <ButtonSecondary
              href="/Signin"
              buttonContent="CRIAR CONTA"
              theme={{ theme: theme }}
            />
          </p>

          {/*-----------//THEME --- BOTÃO DE MUDAR O TEMA ----------*/}
          <div className="fixed bottom-3 right-4">
            <ButtonTheme theme={theme} setTheme={setTheme} />
          </div>
        </form>
      </div>
      {/*--------- LOGOS ----------*/}
      {/*--------- logo de tela grande ------*/}
      <div className="mx-auto hidden lg:block mt-[8%] text-center">
        <img
          src={logo}
          alt="logo"
          className={`logo ${
            theme === Etheme.light ? "light_filter" : "dark_filter"
          }`}
        />
        <p
          className={`font-inter text-size-3xlg font-style-xlg ${
            theme === Etheme.light ? "text-dark-text" : "text-text"
          }`}
        >
          Freitas & Coutinho
        </p>
        <p
          className={`font-montserrat font-style-lg ${
            theme === Etheme.light ? "text-dark-text" : "text-text"
          }`}
        >
          inteligência comercial
        </p>
        {/*--------- logo desenvolvedora ------*/}
        <div className="flex flex-row items-center ms-[16%] mt-40">
          <p
            className={`font-oswald ${
              theme === Etheme.light ? "text-dark-text" : "text-text"
            }`}
          >
            Desenvolvido por
          </p>
          <Tooltip
            message={`EMAIL: statesat@hotmail.com`}
            theme={theme}
            className="font-oswald font-style-lg"
          >
            <img
              src={logoDeveloper}
              alt="logo"
              className={`logoDev ms-1 ${
                theme === Etheme.light ? "light_filter" : "dark_filter"
              }`}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Login;
