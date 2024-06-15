import { Etheme } from "../../themeConsts";
import CompCliente from "./Interior_Components/CompCliente";
import InfoTelemarking from "./Interior_Components/InfoTelemarking";
import SelectStatus from "./Interior_Components/selectStatus";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import ConfirmationModal from "../../components/containers/separated/modalConfirmSave";
import SVGSave from "../../components/SVGs/SYMBOLS/SVGSave";
import Tooltip from "../../components/containers/separated/tooltip";
import { Cnpj } from "../../API/API_utils";
import React, { useState } from "react";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { Link } from "react-router-dom";

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

  /*SAVE MODAL*/ const [save, setSave] = useState(false);
  /*SAVE MODAL*/ const [confirmed, setConfirmed] = useState(false);

  /*SAVE MODAL*/ const handlesave = () => {
    setSave(true);
  };

  /*SAVE MODAL*/ const handleCancelsave = () => {
    setSave(false);
    setConfirmed(false);
  };

  /*SAVE MODAL*/ const handleConfirmSave = () => {
    setSave(false);
    setConfirmed(true);
  };

  return (
    <>
      {/*------ FORMULARIO DO CLIENTE/CNPJ ------*/}

      <form>
        <div className={`pb-6 flex flex-row flex-wrap w-100 justify-center`}>
          <div className={`w-full md:w-90`}>
            <CompCliente theme={theme} cnpj={cnpj} />
          </div>
          <div className={`w-80 md:w-10 pr-2`}>
            <p className="flex justify-center w-100 font-oswald text-[20px] text-primary pt-5 pb-2">
              Status
            </p>
            <SelectStatus theme={theme} cnpj={cnpj} />
            <Link to="/order" state={{ cnpj }}>
              teste
            </Link>
          </div>
          <div className={`w-full flex justify-between items-end pb-4`}>
            <div className={`w-full`}>
              <InfoTelemarking theme={theme.theme} />
            </div>
            {/*------ BOTÃO ATUALIZAR CLIENTE --- botão para abrir o modal ------*/}

            <div className={`px-4`}>
              <Tooltip
                message="Atualizar informações do cliente"
                theme={theme.theme}
                className={`${save ? "hidden" : ""} mb-9 text-center`}
              >
                <ButtonTertiary
                  onClick={handlesave}
                  className={`${
                    save ? "invisible" : ""
                  } border-transparent bg-green-700 text-text hover:border-secondary hover:bg-primary font-oswald px-4 py-2 text-[16px]`}
                >
                  <div className="flex flex-row">
                    <SVGSave
                      fill_one={"none"}
                      fill_two={fill_Two_svg}
                      width={width_svg}
                      height={height_svg}
                    />
                    <p>Atualizar</p>
                  </div>
                </ButtonTertiary>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className={`w-full lg:px-[35%] md:px-30 px-10`}>
          <ConfirmationModal
            actionName="Atualizar informações do cliente"
            theme={theme}
            isOpen={save}
            onCancel={handleCancelsave}
            onConfirm={handleConfirmSave}
          />
        </div>

        {/*------ MENSAGEM DE SUCESSO AO ATUALIZAR CLIENTE ------*/}

        {confirmed ? (
          <p className={`text-green-500 text-size-xsm mr-1 mt-1.5`}>
            Salvo com sucesso
          </p>
        ) : null}
      </form>
    </>
  );
};

export default FormCliente;
