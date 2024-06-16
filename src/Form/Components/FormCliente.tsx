import { Etheme } from "../../themeConsts";
import CompCliente from "./Interior_Components/CompCliente";
import InfoTelemarking from "./Interior_Components/InfoTelemarking";
import SelectStatus from "./Interior_Components/selectStatus";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import { Cnpj } from "../../API/API_utils";
import React, { useState } from "react";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { Link } from "react-router-dom";
import SVGPlus from "../../components/SVGs/CIRCLE/SVGPlus";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 18;
/*SVG CONSTS*/ const height_svg = 18;

interface FormClienteProps {
  theme: { theme: Etheme };
  cnpj: Cnpj;
}

const FormCliente: React.FC<FormClienteProps> = ({ theme, cnpj }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <>
      {/*------ FORMULARIO DO CLIENTE/CNPJ ------*/}

      <form>
        <div
          className={`${newtheme}pb-6 flex flex-row flex-wrap w-100 justify-center`}
        >
          <div className={`w-full md:w-90`}>
            <CompCliente theme={theme} cnpj={cnpj} />
          </div>
          <div className={`w-80 md:w-10 pr-2`}>
            <p className="flex justify-center w-100 font-oswald text-[20px] text-primary pt-5 pb-2">
              Status
            </p>
            <SelectStatus theme={theme} cnpj={cnpj} />
            <Link
              to="/order"
              state={{ cnpj }}
              className="w-full flex justify-center mt-4"
            >
              <ButtonTertiary
                className={`border-transparent bg-tertiary text-text hover:border-secondary hover:bg-primary font-oswald py-2 px-4 text-[16px]`}
              >
                <div className="flex flex-row justify-center items-center">
                  <SVGPlus
                    fill_one={"none"}
                    fill_two={fill_Two_svg}
                    width={width_svg}
                    height={height_svg}
                  />
                  <p className="w-full uppercase">Add Pedido</p>
                </div>
              </ButtonTertiary>
            </Link>
          </div>
          <div className={`w-full flex justify-between items-end pb-4`}>
            <div className={`w-full`}>
              <InfoTelemarking theme={theme.theme} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCliente;
