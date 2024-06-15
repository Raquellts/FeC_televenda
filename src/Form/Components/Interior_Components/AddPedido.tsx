import React, { useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import AddVeiculo from "./AddVeiculo";
import { Cnpj } from "../../../API/API_utils";
import ButtonTertiary from "../../../components/buttons/ButtonTertiary";
import Tooltip from "../../../components/containers/separated/tooltip";
import SVGPlus from "../../../components/SVGs/CIRCLE/SVGPlus";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 18;
/*SVG CONSTS*/ const height_svg = 18;

interface AddPedido {
  cnpj: Cnpj;
  theme: { theme: Etheme };
  handleOrderChange: any;
}

const AddPedido: React.FC<AddPedido> = ({ theme, cnpj, handleOrderChange }) => {
  // THEME
  const themes = theme.theme;
  const [newtheme, setNewtheme] = useState(themes);
  const [forms, setForms] = useState<JSX.Element[]>([
    <AddVeiculo
      cnpj={cnpj}
      theme={theme}
      handleOrderChange={handleOrderChange}
    />,
  ]);

  const handleRemoveForm = () => {
    setForms((prevForms) => prevForms.slice(0, -1));
  };

  useUpdateTheme(theme, setNewtheme);
  const hasActivePedido = forms.length > 0;

  return (
    <form
      className={`w-full flex flex-col justify-center items-center font-oswald pt-5 ${
        newtheme === Etheme.dark ? "text-tertiary" : "text-dark-tertiary"
      }`}
    >
      <p className={`flex justify-center w-full text-[20px]`}>Pedidos</p>
      {!hasActivePedido ? (
        <ButtonTertiary
          onClick={() =>
            setForms((prevForms) => [
              ...prevForms,
              <AddVeiculo
                cnpj={cnpj}
                theme={theme}
                handleOrderChange={handleOrderChange}
              />,
            ])
          }
          className={`flex justify-center border-transparent bg-blue-700 text-text hover:border-secondary hover:bg-primary font-oswald px-4 py-2 text-[16px]`}
        >
          <>
            <SVGPlus
              fill_one={"none"}
              fill_two={fill_Two_svg}
              width={width_svg}
              height={height_svg}
            />
            <p className="pl-1">Pedido</p>
          </>
        </ButtonTertiary>
      ) : (
        <p className={`text-center text-[13px] opacity-80`}>
          Pedido para compra de veiculos criado
        </p>
      )}
      {forms.map((form, index) => (
        <div key={index} className="w-full flex flex-col">
          <div className="w-full flex justify-end pb-2 pr-2">
            <Tooltip
              message="Deletar Pedido"
              theme={newtheme}
              className="mb-9 text-center"
            >
              <ButtonTertiary
                onClick={handleRemoveForm}
                className={`border-transparent bg-blue-700 text-text hover:border-secondary hover:bg-primary font-oswald px-4 py-2 text-[16px]`}
              >
                <p>Deletar</p>
              </ButtonTertiary>
            </Tooltip>
          </div>
          {form}
        </div>
      ))}
    </form>
  );
};
export default AddPedido;
