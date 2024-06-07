import { useState } from "react";
import { url_api } from "../../variaveis_ambiente";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ApiError from "../APIError";
//components
import logo from "../assets/E-statesat.svg";
import Background from "../components/backgrounds/Background";
import InputPrimary from "../components/containers/separated/InputPrimary";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
//styles
import "../assets/font.css";
import { Etheme, themes } from "../themeConsts";
import ButtonTheme from "../themeButton";
import SVGUser from "../components/SVGs/USER/SVGUser";
import SVGKey from "../components/SVGs/USER/SVGKey";
import SVGEmail from "../components/SVGs/CONTACT/SVGEmail";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

function Signin() {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);

  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "diretoria",
  });

  const handlesubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    seterror("");

    try {
      const data = await axios.post(url_api + "user", formData);
      if (data) {
        navigate("/login");
      }
    } catch (err: unknown) {
      if (err instanceof Error && "response" in err) {
        const apiError = err as ApiError;
        seterror(apiError.response.data.message);
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
        } lg:h-100 h-90 xl:w-2/5 lg:w-1/2 sm:w-5/6 w-90vw lg:m-0 flex-account rounded-2xl lg:rounded-none z-10`}
      >
        <p>{error ? error : null}</p>
        <form
          onSubmit={handlesubmit}
          className="flex-account md:p-20 p-10 text-center overflow-hidden"
        >
          <p className="mb-5 uppercase text-primary font-oswald header-style">
            Registrar
          </p>

          {/*INPUT DE NOME -------------- */}
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
              name=""
              type="text"
              placeholder="nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              theme={{ theme: theme }}
              className="w-full right-rounded"
            />
          </div>

          {/*INPUT DE EMAIL -------------- */}
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
              <SVGEmail
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

          {/*INPUT DE SENHA -------------- */}
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

          <div className="w-full">
            <ButtonPrimary
              buttonContent="Criar"
              theme={{ theme: theme }}
              className="w-full"
            />
          </div>

          <p className="my-2 small-style">
            <ButtonSecondary
              href="/login"
              buttonContent="Já tenho uma conta"
              theme={{ theme: theme }}
            />
          </p>
          {/*-----------//THEME --- BOTÃO DE MUDAR O TEMA ----------*/}
          <div className="fixed bottom-3 right-4">
            <ButtonTheme theme={theme} setTheme={setTheme} />
          </div>
        </form>
      </div>
      <div className="mx-auto hidden lg:block">
        <img src={logo} alt="logo" className="logo" />
        <p></p>
      </div>
    </div>
  );
}

export default Signin;
