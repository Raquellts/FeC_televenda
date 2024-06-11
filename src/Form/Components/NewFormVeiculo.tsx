import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import FormVeiculo from "./FormVeiculo";
import { Cnpj } from "../../API/API_utils";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import Tooltip from "../../components/containers/separated/tooltip";
import SVGPlus from "../../components/SVGs/CIRCLE/SVGPlus";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 18;
/*SVG CONSTS*/ const height_svg = 18;

interface NewFormVeiculoProps {
  cnpj: Cnpj;
  theme: { theme: Etheme };
}

const NewFormVeiculo: React.FC<NewFormVeiculoProps> = ({ theme }) => {
  // THEME
  const themes = theme.theme;
  const [newtheme, setNewtheme] = useState(themes);
  const [forms, setForms] = useState<JSX.Element[]>([]);

  const handleAddForm = () => {
    setForms((prevForms) => [
      ...prevForms,
      <FormVeiculo key={prevForms.length} theme={theme} />,
    ]);
  };

  const handleRemoveForm = (index: number) => {
    setForms((prevForms) => prevForms.filter((_, i) => i !== index));
  };

  useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`flex flex-col justify-center items-center w-100 font-oswald text-primary pt-5 ${newtheme}`}
    >
      <p className={`flex justify-center w-100 text-[20px]`}>Veiculo</p>
      {forms.map((form, index) => (
        <div key={index}>
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
          {form}
        </div>
      ))}

      <div className={``}>
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
            <p className="pl-0.5">Veiculo</p>
          </div>
        </ButtonTertiary>
      </div>
    </div>
  );
};

export default NewFormVeiculo;
