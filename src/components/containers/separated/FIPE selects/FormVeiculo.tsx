import { useLocation } from "react-router-dom";
import { CNPJInterface } from "../../../../../InterfaceCNPJ";
import { Etheme } from "../../../../themeConsts";
import { useState, useEffect } from "react";
import SelectTipo from "./selectTipo";
import SelectMarca from "./selectMarca";
import SelectModelo from "./selectModelo";
import SelectAno from "./selectAno";

const FormVeiculo = ({ theme }: { theme: { theme: Etheme } }) => {
  /*THEME*/ const [newtheme, setNewtheme] = useState(theme.theme);

  const [selectedType, setSelectedType] = useState("");
  const [selectedMarca, setSelectedMarca] = useState<{
    codigo: string;
    nome: string;
  }>({ codigo: "", nome: "" });
  const [selectedModelo, setSelectedModelo] = useState<{
    codigo: number;
    nome: string;
  }>({ codigo: 0, nome: "" });

  const location = useLocation();
  const cnpj: CNPJInterface = location.state;

  useEffect(() => {
    setNewtheme(theme.theme);
  }, [theme.theme]);

  /*CLASSES REPETIDAS*/ const labelSelects_md =
    "flex w-full sm:w-1/2 items-center my-2";

  /*CLASSES REPETIDAS*/ const labelSelects_sm =
    "flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center";

  /*CLASSES REPETIDAS*/ const spanSelects =
    "mx-2 w-full rounded-2xl border-b-2 border-transparent hover:border-tertiary";

  /*CLASSES REPETIDAS*/ const classSelects = `${
    newtheme === Etheme.light
      ? "text-text bg-container"
      : "text-dark-text bg-dark-container"
  } w-full pl-3 text-opacity-70 hover:text-opacity-100 rounded-2xl h-inputsize`;

  return (
    <div className="">
      {cnpj && (
        <>
          {/* informações do veiculo desejado */}
          <form
            className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
              newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
            }`}
          >
            <label className={labelSelects_sm}>
              <span>Tipo:</span>
              <span className={spanSelects}>
                <SelectTipo
                  onTypeChange={setSelectedType}
                  className={classSelects}
                />
              </span>
            </label>
            <label className={labelSelects_sm}>
              <span>Marca:</span>
              <span className={spanSelects}>
                <SelectMarca
                  selectedType={selectedType}
                  onMarcaChange={setSelectedMarca}
                  className={classSelects}
                />
              </span>
            </label>
            <label className={labelSelects_md}>
              <span>Modelo:</span>
              <span className={spanSelects}>
                <SelectModelo
                  selectedType={selectedType}
                  selectedMarcaCodigo={selectedMarca.codigo}
                  onModeloChange={setSelectedModelo}
                  className={classSelects}
                />
              </span>
            </label>
            <label className={labelSelects_sm}>
              <span>Ano:</span>
              <span className={spanSelects}>
                <SelectAno
                  selectedType={selectedType}
                  selectedMarcaCodigo={selectedMarca.codigo}
                  selectedModeloCodigo={selectedModelo.codigo}
                  className={classSelects}
                />
              </span>
            </label>
          </form>
        </>
      )}
    </div>
  );
};

export default FormVeiculo;
