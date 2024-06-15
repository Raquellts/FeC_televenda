import React, { useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import CompVeiculo from "./CompVeiculo";
import { Cnpj } from "../../../API/API_utils";
import ButtonTertiary from "../../../components/buttons/ButtonTertiary";
import Tooltip from "../../../components/containers/separated/tooltip";
import SVGPlus from "../../../components/SVGs/CIRCLE/SVGPlus";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 18;
/*SVG CONSTS*/ const height_svg = 18;

interface AddVeiculo {
  cnpj: Cnpj;
  theme: { theme: Etheme };
  handleOrderChange: any;
}

const AddVeiculo: React.FC<AddVeiculo> = ({ theme, handleOrderChange }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const [forms, setForms] = useState<JSX.Element[]>([
    <CompVeiculo key={0} theme={theme} handleOrderChange={handleOrderChange} />,
  ]);

  const handleAddForm = () => {
    setForms((prevForms) => [
      ...prevForms,
      <CompVeiculo
        key={prevForms.length}
        theme={theme}
        handleOrderChange={handleOrderChange}
      />,
    ]);
  };

  const handleRemoveForm = (index: number) => {
    setForms((prevForms) => prevForms.filter((_, i) => i !== index));
  };
  useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
      } shadow-md flex flex-col items-center justify-between p-2 rounded-2xl h-full bg-opacity-50`}
    >
      <p className={`flex justify-center w-100 text-[20px] pt-5`}>Veiculos</p>
      {forms.map((form, index) => (
        <div key={index} className="py-5">
          <div className="flex justify-between items-center">
            <p className={`pl-5 text-[18px] mb-1`}>Veiculo {index + 1}</p>
            <hr className="w-5/6 opacity-30" />
            <div className="flex justify-end mr-6">
              <Tooltip
                message="Remover Veiculo"
                theme={newtheme}
                className="mb-9 text-center"
              >
                <ButtonTertiary
                  onClick={() => handleRemoveForm(index)}
                  className={`border-transparent bg-blue-700 text-text hover:border-secondary hover:bg-primary font-oswald px-4 py-2 text-[16px]`}
                >
                  <p>✕</p>
                </ButtonTertiary>
              </Tooltip>
            </div>
          </div>
          {form}
        </div>
      ))}

      <div className={`pb-5`}>
        <Tooltip
          message="Adicionar Veiculo"
          theme={newtheme}
          className="mb-9 text-center"
        >
          <ButtonTertiary
            onClick={handleAddForm}
            className={`border-transparent bg-blue-700 text-text hover:border-secondary hover:bg-primary font-oswald px-4 py-2 text-[16px]`}
          >
            <div className="flex flex-row">
              <SVGPlus
                fill_one={"none"}
                fill_two={fill_Two_svg}
                width={width_svg}
                height={height_svg}
              />
            </div>
          </ButtonTertiary>
        </Tooltip>
      </div>
    </div>
  );
};

export default AddVeiculo;
