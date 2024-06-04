import { useState } from "react";
import { CNPJInterface } from "../../../../../InterfaceCNPJ";
import { Etheme } from "../../../../themeConsts";
import useUpdateTheme from "../../../consts/updateTheme";

interface SelectStatusProps {
  cnpj: CNPJInterface;
  theme: { theme: Etheme };
}

const SelectStatus: React.FC<SelectStatusProps> = ({ cnpj, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  /*CLASSES REPETIDAS*/ const spanSelects =
    "w-full rounded-2xl border-b-2 border-transparent hover:border-tertiary";
  /*CLASSES REPETIDAS*/ const classSelects = `${
    newtheme === Etheme.light
      ? "text-text bg-container"
      : "text-dark-text bg-dark-container"
  } w-full text-opacity-70 md:h-[115px] hover:text-opacity-100 rounded-2xl h-inputsize text-center`;

  return (
    cnpj &&
    cnpj.status && (
      <div>
        <label className={`flex items-center my-2 font-oswald ${spanSelects}`}>
          <select
            className={`w-full truncate ${classSelects} ${
              clicked ? "p-3" : "p-0"
            }`}
            onClick={handleClick}
          >
            <option value="PENDING">Pendente</option>
            <option value="APPROVED">Aprovado</option>
            <option value="REJECTED">Rejeitado</option>
            <option value="SUSPENDED">Suspenso</option>

            <option value="" disabled selected>
              {cnpj.status === "PENDING"
                ? "Pendente"
                : cnpj.status === "APPROVED"
                ? "Aprovado"
                : cnpj.status === "REJECTED"
                ? "Rejeitado"
                : cnpj.status === "SUSPENDED"
                ? "Suspenso"
                : "Sem status"}
            </option>
          </select>
        </label>
      </div>
    )
  );
};

export default SelectStatus;
