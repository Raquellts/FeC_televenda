import { useState } from "react";
import { GetMarcas } from "../../../../APIVeiculos";
import { Imarca } from "../../../../InterfaceAPIVeiculo";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../consts/updateTheme";

const SelectTipo = (theme: { theme: Etheme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);
  const [selectedType, setSelectedType] = useState("carros");
  const [marcas, setMarcas] = useState<Imarca[] | null>(null);

  const fetchMarcas = async () => {
    try {
      const response = await GetMarcas(selectedType);
      setMarcas(response);
    } catch (error) {
      console.error("Error fetching marcas:", error);
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    setMarcas(null); // Reset the marcas state when the selected type changes
  };

  const handleMarcasClick = () => {
    if (!marcas) {
      fetchMarcas();
    }
  };

  console.log(marcas);

  return (
    <div className="flex flex-row py-4">
      <label className="flex items-center">
        Tipo:
        <select
          className={`${
            newtheme === Etheme.light
              ? "text-primary bg-container"
              : "text-dark-primary bg-dark-container"
          } w-full pl-3 text rounded-full border-b-2 hover:border-tertiary`}
          defaultValue=""
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="carros">Carro</option>
          <option value="motos">Moto</option>
          <option value="caminhoes">Caminhão</option>
        </select>
      </label>
      <label className="flex items-center">
        Marca:
        <select
          className={`${
            newtheme === Etheme.light
              ? "text-primary bg-container"
              : "text-dark-primary bg-dark-container"
          } w-full pl-3 text rounded-full`}
          onClick={handleMarcasClick}
        >
          {marcas?.map((marca) => (
            <option key={marca.codigo} value={marca.nome}>
              {marca.nome}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectTipo;
