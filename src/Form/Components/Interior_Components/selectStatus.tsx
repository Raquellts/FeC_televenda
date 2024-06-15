import { useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { Cnpj } from "../../../API/API_utils";

interface SelectStatusProps {
  cnpj: Cnpj;
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
  } w-full text-opacity-70 md:h-[110px] hover:text-opacity-100 rounded-2xl h-inputsize text-center`;

  return (
    cnpj && (
      <div>
        <label className={`flex items-center my-2 font-oswald ${spanSelects}`}>
          <select
            className={`w-full truncate ${classSelects} ${
              clicked ? "p-3" : "p-0"
            }`}
            onClick={handleClick}
          >
            <option value={1}>Pendente</option>
            <option value={2}>Aprovado</option>
            <option value={3}>Suspenso</option>
            <option value={4}>Rejeitado</option>

            <option value="" disabled defaultChecked>
              {cnpj.status === 1
                ? "Pendente"
                : cnpj.status === 2
                ? "Confirmado"
                : cnpj.status === 3
                ? "Suspenso"
                : cnpj.status === 4
                ? "Rejeitado"
                : "Sem status"}
            </option>
          </select>
        </label>
      </div>
    )
  );
};

export default SelectStatus;
