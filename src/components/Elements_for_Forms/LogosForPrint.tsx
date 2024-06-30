import { Etheme } from "../../themeConsts";
import { usePrintState } from "../../components/Hooks/isPrinting";
import logoFec from "../../assets/SVG/LOGO FOR WEB.svg";
import logoStatesat from "../../assets/SVG/stat&sat.svg";
import { useState } from "react";
import useUpdateTheme from "../Hooks/updateTheme";

const LogosForPrint = (theme: { theme: Etheme }) => {
  const { isPrinting } = usePrintState();

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div>
      {/* LOGOS for print */}
      <div
        className={`${
          isPrinting ? "" : "hidden"
        } flex flex-row justify-between items-center mx-5 ${
          newtheme === Etheme.light ? "text-primary" : "text-dark-primary "
        } `}
      >
        <div className="flex flex-row items-center">
          <img src={logoFec} alt="logo" className="h-14 logo_filter" />
          <div className="ml-2">
            <p className={`font-oswald text-size-xs`}>Freitas & Coutinho</p>
            <p className={`font-inter text-size-2xsm font-style-lg`}>
              inteligência comercial
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className={`font-oswald text-size-xs`}>Desenvolvido por</p>
          <img src={logoStatesat} alt="logo" className="h-6 logo_filter" />
        </div>
      </div>
    </div>
  );
};

export default LogosForPrint;
