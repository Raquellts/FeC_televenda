import { useState } from "react";
import { Etheme } from "../../../themeConsts";
import SVGEditFile from "../../../components/SVGs/INFO/SVGEditFile";
import { Link } from "react-router-dom";
import { Cnpj, User } from "../../../API/API_utils";
import SVGpdf from "../../../components/SVGs/INFO/SVGpdf";
import useUpdateTheme from "../../../components/Hooks/updateTheme";

interface iPartEditButton {
  theme: Etheme;
  cnpj: Cnpj;
  user?: User;
}
const EditButton = ({ theme, cnpj, user }: iPartEditButton) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.dark
          ? "text-tertiary hover:text-accent"
          : "text-dark-tertiary hover:text-text"
      } flex flex-col items-center justify-center text-center font-oswald text-size-sm w-100 h-100 font-style-lg`}
    >
      <Link to="/Form" state={{ cnpj, user }}>
        <div className={user?.roleAsString === "USER" ? "hidden" : ""}>
          <SVGpdf
            width={42}
            height={42}
            fill_one={"none"}
            fill_two={"currentColor"}
          />
          <span className="hidden sm:block">Pedidos</span>
        </div>
        <div className={user?.roleAsString === "USER" ? "" : "hidden"}>
          <SVGEditFile
            width={42}
            height={42}
            fill_one={"none"}
            fill_two={"currentColor"}
          />
          <span className="hidden sm:block">Criar</span>
        </div>
      </Link>
    </div>
  );
};

export default EditButton;
