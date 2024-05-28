import { useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../consts/updateTheme";

const Cabecalho = (theme: { theme: Etheme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
      } flex text-center items-center font-oswald mb-2`}
    >
      <p className="w-70">Informação da empresa</p>
      <p className="w-10">Status</p>
      <p className="w-10">Data</p>
      <p className="w-10">Editar</p>
    </div>
  );
};

export default Cabecalho;
