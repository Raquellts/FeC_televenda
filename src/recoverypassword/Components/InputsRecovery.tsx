import { useState } from "react";
import InputPrimary from "../../components/Elements_for_Forms/InputPrimary";
import SVGAsterisk from "../../components/SVGs/SYMBOLS/SVGAsterisk";
import SVGKey from "../../components/SVGs/USER/SVGKey";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

interface InputRecoveryProps {
  theme: { theme: Etheme };
  token: string;
  password: string;
  confirmPassword: string;
  errormessage: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const InputRecovery = ({
  theme,
  token,
  password,
  confirmPassword,
  errormessage,
  setPassword,
  setConfirmPassword,
  setToken,
}: InputRecoveryProps) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div>
      {/*------------- NOVA SENHA --- SVG KEY -------------*/}
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
          placeholder="Nova senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          theme={theme}
          className="w-full right-rounded"
        />
      </div>

      {/*------------- REPETIR NOVA SENHA --- SVG KEY -------------*/}
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
          name="confirm-password"
          type="password"
          placeholder="Confirme nova senha"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          theme={theme}
          className="w-full right-rounded"
        />
      </div>

      {errormessage && (
        <p className="text-red-500 font-inter text-size-xsm">{errormessage}</p>
      )}

      {/*------------- TOKEN DE ACESSO --- SVG ASTERISK -------------*/}
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
          <SVGAsterisk
            width={width_svg}
            height={height_svg}
            fill_one="none"
            fill_two={fill_Two_svg}
          />
        </div>
        <InputPrimary
          required
          name="token"
          type="text"
          placeholder="Token"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          theme={theme}
          className="w-full right-rounded"
        />
      </div>
    </div>
  );
};

export default InputRecovery;
