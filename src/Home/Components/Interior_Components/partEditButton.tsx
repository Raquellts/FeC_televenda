import React, { useState } from "react";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { Etheme } from "../../../themeConsts";
import SVGEditFile from "../../../components/SVGs/INFO/SVGEditFile";
import { Link } from "react-router-dom";
import { Cnpj } from "../../../API/API_utils";
import SVGpdf from "../../../components/SVGs/INFO/SVGpdf";

type DateProps = {
  cnpj: Cnpj;
  theme: Etheme;
  user: number | null;
  id: string;
};

const EditButton: React.FC<DateProps> = ({ theme, cnpj, user, id }) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.dark
          ? "text-tertiary hover:text-accent"
          : "text-dark-tertiary hover:text-text"
      } flex flex-col items-center justify-center text-center font-oswald text-[13px] w-100 h-100 font-style-lg`}
    >
      <Link to="/form" state={{ cnpj, id }}>
        {/* verificação de permissão */}
        {user === 4 ? (
          <>
            <SVGpdf
              width={42}
              height={42}
              fill_one={"none"}
              fill_two={"currentColor"}
            />
            <span className="hidden sm:block">Pedidos</span>
          </>
        ) : (
          <>
            <SVGEditFile
              width={42}
              height={42}
              fill_one={"none"}
              fill_two={"currentColor"}
            />
            <span className="hidden sm:block">Editar</span>
          </>
        )}
      </Link>
    </div>
  );
};

export default EditButton;