import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url_api } from "../../variaveis_ambiente";
import Cookies from "js-cookie";
import axiosWithAuth from "../midleware/axiosWithAuth";
import ApiError from "../APIError";
//components
import logo from "../assets/E-statesat.svg";
import Background from "../components/backgrounds/Background";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import InputPrimary from "../components/containers/separated/InputPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
//styles
import "../assets/font.css";
import ButtonTheme from "../themeButton";
import { Etheme, themes } from "../themeConsts";
import SVGUser from "../components/SVGs/USER/SVGUser";
import SVGKey from "../components/SVGs/USER/SVGKey";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

function Login() {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handlesubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await axiosWithAuth.post(url_api + "login", formData);
      if (data) {
        Cookies.set("Token", data.data.token, { expires: 1 });
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

  return (
    <div
      className={`full-div overflow-hidden flex items-center justify-center lg:justify-start`}
    >
      <Background />

      <div
        className={`${
          theme === Etheme.light ? "bg-background" : "bg-dark-background"
        } sm:h-full md:h-95 lg:h-100
      xl:w-2/5 lg:w-1/2 md:w-90 w-100 lg:m-0 flex-account md:rounded-2xl lg:rounded-none z-10`}
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
              } p-2.5 rounded-s-2xl`}
            >
              <SVGUser
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
            </div>
            <InputPrimary
              name=""
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
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
              } p-2.5 rounded-s-2xl`}
            >
              <SVGKey
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
            </div>
            <InputPrimary
              name=""
              type="password"
              placeholder="senha"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              theme={{ theme: theme }}
              className="w-full right-rounded"
            />
          </div>

          {/*------------- BOTÃO DE LOGIN --- ENTRAR -------------*/}
          <div className="flex flex-row font-oswald">
            <ButtonPrimary buttonContent="Entrar" theme={{ theme: theme }} />
          </div>

          {/*------------- BOTÃO DE ESQUECI A SENHA -------------*/}
          <p className="flex items-center justify-center">
            <ButtonSecondary
              href="/getlogin"
              buttonContent="Esqueci ou não tenho um login!"
              theme={{ theme: theme }}
            />

            {/*-----------//THEME --- BOTÃO DE MUDAR O TEMA ----------*/}
            <div className="fixed bottom-3 right-4">
              <ButtonTheme theme={theme} setTheme={setTheme} />
            </div>
          </p>
        </form>
      </div>
      <div className="mx-auto hidden lg:block">
        <img src={logo} alt="logo" className="logo" />

        <p></p>
      </div>
    </div>
  );
}

export default Login;
