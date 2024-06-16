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

  const status = cnpj.status;

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
        <div
          className={`flex items-center my-2 font-oswald ${spanSelects} border-2 border-b-4 ${
            status === 2
              ? "border-green-500"
              : status === 3
              ? "border-yellow-500"
              : status === 4
              ? "border-red-500"
              : "border-tertiary"
          } rounded-2xl`}
        >
          <select
            className={`w-full truncate ${classSelects} ${
              clicked ? "p-3" : "p-0"
            }`}
            onClick={handleClick}
            value={status}
          >
            <option value="" disabled defaultChecked>
              {status === 1
                ? "Pendente"
                : status === 2
                ? "Confirmado"
                : status === 3
                ? "Suspenso"
                : status === 4
                ? "Rejeitado"
                : "Sem status"}
            </option>
            <option value={1}>Pendente</option>
            <option value={2}>Confirmado</option>
            <option value={3}>Suspenso</option>
            <option value={4}>Rejeitado</option>
          </select>
        </div>
      </div>
    )
  );
};

export default SelectStatus;
