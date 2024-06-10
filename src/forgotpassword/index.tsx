import Background from "../components/backgrounds/Background";
//css styles
import "../assets/font.css";
import { Etheme, themes } from "../themeConsts";
import ButtonTheme from "../themeButton";
import { useState } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import InputPrimary from "../components/Elements_for_Forms/InputPrimary";
import SVGEmail from "../components/SVGs/CONTACT/SVGEmail";
import { postForgotPassword } from "../API/API_cnpj";
import LoadingSVG from "../components/SVGs/loadingSVG";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

function ForgotPassword() {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({ msg: "" });
  const [form, setForm] = useState({
    email: "",
  });

  const handleClick = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await handlesubmit(event); // Pass the event object
  };

  const handlesubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const datamsg = await postForgotPassword(form);
    setMsg(datamsg);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  console.log(msg);
  return (
    <div
      className={`full-div overflow-hidden flex items-center justify-center`}
    >
      <Background />

      <div
        className={`${
          theme === Etheme.light ? "bg-background" : "bg-dark-background"
        }  h-5/6 2xl:w-1/2 lg:w-2/3 sm:w-5/6 w-90vw flex-account rounded-2xl z-10`}
      >
        <form
          onSubmit={handlesubmit}
          className="flex-account md:p-20 p-10 text-center overflow-hidden"
        >
          {/*------------- HEADER DE ESQUECI A SENHA -------------*/}
          <p
            className={`${
              theme === Etheme.light ? "text-primary" : "text-dark-primary"
            } mb-5 uppercase font-oswald header-style`}
          >
            Esqueci minha senha
          </p>
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
              name="email"
              type="email"
              placeholder="email"
              value={form.email}
              onChange={handleChange}
              theme={{ theme: theme }}
              className="w-full right-rounded"
            />
          </div>
          <div className="w-100">
            {msg.msg ? (
              <p className="my-5 text-secondary font-oswald">{msg.msg}</p>
            ) : (
              <>
                {isLoading ? (
                  <div className="w-100 flex flex-col justify-center items-center">
                    <LoadingSVG />
                    <p className="my-5 text-secondary font-oswald mt-[0px]">
                      Enviando
                    </p>
                  </div>
                ) : (
                  <ButtonPrimary
                    onClick={() => handleClick}
                    buttonContent="Enviar"
                    theme={{ theme: theme }}
                  />
                )}
              </>
            )}
          </div>

          <p className="my-5 text-secondary font-oswald">
            Retornar para:
            <ButtonSecondary
              href="/login"
              buttonContent="LOGIN"
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
  );
}

export default ForgotPassword;
