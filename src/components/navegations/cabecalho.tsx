import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../Hooks/updateTheme";
import TitleBar from "./titlebar";
import { usePrintState } from "../Hooks/isPrinting";

interface cabecalhoProps {
  theme: { theme: Etheme };
  pageName: string;
}

const Cabecalho = ({ theme, pageName }: cabecalhoProps) => {
  const { isPrinting } = usePrintState();
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
      } flex text-center items-center font-oswald mb-2`}
    >
      <p className="w-90 ml-10 uppercase">- {pageName} -</p>

      <div className="w-10">
        <div className={isPrinting ? "hidden" : ""}>
          <TitleBar theme={themes} />
        </div>
      </div>
    </div>
  );
};

export default Cabecalho;
