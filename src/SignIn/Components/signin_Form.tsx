import { useState } from "react";
import { CommonUser, User } from "../../API/API_utils";
//SVGs
import SVGUser from "../../components/SVGs/USER/SVGUser";
import SVGEmail from "../../components/SVGs/CONTACT/SVGEmail";
import SVGKey from "../../components/SVGs/USER/SVGKey";
//components
import InputPrimary from "../../components/Elements_for_Forms/InputPrimary";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
//theme
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/consts/updateTheme";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

interface signinInterface {
  theme: { theme: Etheme };
  error: string;
  formData: CommonUser;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handlesubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<CommonUser>>;
  Supervisors: () => void;
  supervisor: User[];
}
const SigninForm: React.FC<signinInterface> = ({
  theme,
  error,
  formData,
  handleChange,
  handlesubmit,
  setFormData,
  Supervisors,
  supervisor,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "bg-background" : "bg-dark-background"
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
        <select
          required
          name={"supervisorId"}
          value={formData.supervisorId}
          onChange={handleChange}
          onClick={Supervisors}
          className={`${
            newtheme === Etheme.light
              ? "bg-container focus:bg-gray-700 focus:border-primary hover:border-tertiary placeholder-text text-text"
              : "bg-dark-container focus:bg-white focus:border-dark-primary hover:border-dark-tertiary placeholder-dark-text text-dark-text"
          } placeholder-opacity-70 hover:placeholder-opacity-100 text-opacity-70 hover:text-opacity-100 ring-0 outline-none border-b-2 border-transparent border-rounded block p-2.5 my-2 w-full font-oswald`}
        >
          {supervisor?.map((supervisor) => {
            return (
              <option
                key={supervisor.id}
                value={supervisor.id}
                className="w-full"
              >
                {supervisor.name}
              </option>
            );
          })}
        </select>
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex items-center`}
        >
          <div
            className={`${
              newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
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
            required
            name="name"
            type="text"
            placeholder="nome"
            value={formData?.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full remove-rounded"
            theme={theme}
          />
          <InputPrimary
            required
            name="surname"
            type="text"
            placeholder="sobrenome"
            value={formData?.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full right-rounded ms-[0.1rem] "
            theme={theme}
          />
        </div>

        {/*INPUT DE EMAIL -------------- */}
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex items-center`}
        >
          <div
            className={`${
              newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
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
            required
            name="email"
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full right-rounded"
            theme={theme}
          />
        </div>

        {/*INPUT DE SENHA -------------- */}
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex items-center`}
        >
          <div
            className={`${
              newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
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
            required
            name="password"
            type="password"
            placeholder="senha"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full right-rounded"
            theme={theme}
          />
        </div>

        <div className="w-full">
          <ButtonPrimary
            buttonContent="Criar"
            className="w-full"
            type="submit"
            theme={theme}
          />
        </div>

        <p className="my-2 small-style">
          <ButtonSecondary
            href="/login"
            buttonContent="Já tenho uma conta"
            theme={theme}
          />
        </p>
        {/*-----------//THEME --- BOTÃO DE MUDAR O TEMA ----------*/}
      </form>
    </div>
  );
};

export default SigninForm;
