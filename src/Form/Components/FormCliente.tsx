import { Etheme } from "../../themeConsts";
import CompCliente from "./Interior_Components/CompCliente";
import InfoTelemarking from "./Interior_Components/InfoTelemarking";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import { Cnpj } from "../../API/API_utils";
import React, { useState } from "react";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { Link } from "react-router-dom";
import SVGPlus from "../../components/SVGs/CIRCLE/SVGPlus";
import Status from "../../Home/Components/Interior_Components/partStatus";
import SVGDateNeed from "../../components/SVGs/DATE/SVGDateNeed";
import SVGCancel from "../../components/SVGs/CIRCLE/SVGCancel";
import { putStatusCnpj } from "../../API/API_cnpj";
import ModalDateToCall from "../../components/containers/separated/modalDateToCall";
import Tooltip from "../../components/containers/separated/tooltip";
import { usePrintState } from "../../components/Hooks/isPrinting";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 20;
/*SVG CONSTS*/ const height_svg = 20;

interface FormClienteProps {
  theme: { theme: Etheme };
  cnpj: Cnpj;
}

const FormCliente: React.FC<FormClienteProps> = ({ theme, cnpj }) => {
  const { isPrinting } = usePrintState();

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  const handleRefused = async () => {
    await putStatusCnpj(cnpj.id, 4, null);
    handleBack();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const buttonStatusChange = `border-transparent text-text hover:border-secondary hover:bg-primary font-oswald py-2 px-3 text-size-md mx-0.5 lg:mx-1 mt-2`;
  const tooltip = "top-12 left-0";

  return (
    <>
      {/*------ FORMULARIO DO CLIENTE/CNPJ ------*/}
      {cnpj ? (
        <form>
          <div
            className={`${newtheme} flex flex-row flex-wrap w-100 justify-center`}
          >
            <div className={`w-full md:w-90`}>
              <CompCliente theme={theme} cnpj={cnpj} />
            </div>
            <div className={`w-20 md:w-10 pr-1`}>
              <p className="flex justify-center w-100 font-oswald text-size-lg text-primary pt-5 pb-5">
                Status
              </p>
              <div
                className={`flex justify-center items-center my-2 py-6 font-oswald border-2 border-b-4 ${
                  cnpj.status === 1
                    ? "GREY"
                    : cnpj.status === 2
                    ? "GREEN"
                    : cnpj.status === 3
                    ? "YELLOW"
                    : cnpj.status === 4
                    ? "RED"
                    : "PURPLE"
                } rounded-2xl`}
              >
                <Status theme={newtheme} status={cnpj.status} />
              </div>
              <div
                className={`flex md:flex-col lg:flex-row justify-center items-center ${
                  isPrinting ? "hidden" : ""
                }`}
              >
                {/* BUTTONS STATUS */}
                {/* suspended */}
                <Tooltip
                  message={"Suspender para outra data"}
                  theme={newtheme}
                  className={tooltip}
                >
                  <ButtonTertiary
                    onClick={handleOpenModal}
                    className={`${buttonStatusChange} bg-amber-500`}
                  >
                    <div className="flex flex-row justify-center items-center">
                      <SVGDateNeed
                        fill_one={"none"}
                        fill_two={fill_Two_svg}
                        width={width_svg}
                        height={height_svg}
                      />
                    </div>
                  </ButtonTertiary>
                </Tooltip>
                {/* refused */}
                <Tooltip
                  message={"Cliente sem interesse"}
                  theme={newtheme}
                  className={tooltip}
                >
                  <ButtonTertiary
                    onClick={handleRefused}
                    className={`${buttonStatusChange} bg-red-500`}
                  >
                    <div className="flex flex-row justify-center items-center">
                      <SVGCancel
                        fill_one={"none"}
                        fill_two={fill_Two_svg}
                        width={width_svg}
                        height={height_svg}
                      />
                    </div>
                  </ButtonTertiary>
                </Tooltip>
              </div>
              <ModalDateToCall
                actionName={"Selecionar data da próxima chamada"}
                theme={theme}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                id={cnpj.id}
              />
            </div>
          </div>
          <div className={`w-full flex justify-between items-end pb-4`}>
            <div className={`w-full`}>
              <InfoTelemarking theme={theme.theme} />
            </div>

            <Link
              to="/Order"
              state={{ cnpj }}
              className={`flex justify-end mr-1 ${isPrinting ? "hidden" : ""}`}
            >
              <ButtonTertiary
                className={`border-transparent bg-tertiary text-text hover:border-secondary hover:bg-primary font-oswald py-2 px-4`}
              >
                <div className="flex flex-row justify-center items-center">
                  <SVGPlus
                    fill_one={"none"}
                    fill_two={fill_Two_svg}
                    width={width_svg}
                    height={height_svg}
                  />
                  <p className="flex flex-row w-full uppercase text-size-xsm">
                    <span>Add</span>&nbsp;
                    <span>Pedido</span>
                  </p>
                </div>
              </ButtonTertiary>
            </Link>
          </div>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormCliente;
