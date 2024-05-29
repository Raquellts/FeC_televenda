import { ChangeEvent, useState } from "react";
import { USERInterface } from "../../../../InterfaceCNPJ";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../consts/updateTheme";

const SelectComponent: React.FC<{
  theme: { theme: Etheme };
  cnpj: { cnpj: string };
  data: USERInterface;
  setData: React.Dispatch<React.SetStateAction<USERInterface>>;
}> = ({ cnpj, data, setData, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const [selectedStatus, setSelectedStatus] = useState(
    data?.cnpjInfo.find((c) => c.cnpj === cnpj.cnpj)?.status || ""
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedStatus(value);
    setData({
      ...data,
      cnpjInfo: data?.cnpjInfo.map((c) => {
        if (c.cnpj === cnpj.cnpj) {
          return {
            ...c,
            status: value,
          };
        } else {
          return c;
        }
      }),
    });
  };

  return (
    <div
      className={`flex flex-col space-y-4 p-5 ${
        newtheme === Etheme.light ? "text-text" : "text-dark-text"
      }`}
    >
      {["PENDING", "APPROVED", "REJECTED", "SUSPENDED"].map((option) => (
        <label
          key={option}
          className="relative flex items-center cursor-pointer"
        >
          <input
            className="sr-only peer"
            name="futuristic-radio"
            type="radio"
            value={option}
            checked={selectedStatus === option}
            onChange={handleChange}
          />
          <div
            className={`w-6 h-6 bg-transparent border-2 border-${
              selectedStatus === option ? "red-500" : "gray-300"
            } rounded-full peer-checked:bg-red-500 peer-checked:border-red-500 peer-hover:shadow-lg peer-hover:shadow-red-500/50 peer-checked:shadow-lg peer-checked:shadow-red-500/50 transition duration-300 ease-in-out`}
          ></div>
          <span
            className={`ml-2 text-${
              selectedStatus === option ? "white" : "gray-500"
            }`}
          >
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default SelectComponent;
