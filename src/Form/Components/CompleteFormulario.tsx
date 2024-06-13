import { useState } from "react";
import { Etheme } from "../../themeConsts";
import { useLocation } from "react-router-dom";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import PDFComponent from "./PDFS/PDFItemCNPJ";
import FormClienteCNPJ from "./Interior_Components/FormClienteCNPJ";
import InfoTelemarking from "./Interior_Components/InfoTelemarking";
import SelectStatus from "./Interior_Components/selectStatus";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import ConfirmationModal from "../../components/containers/separated/confirmationModal";
import SVGSave from "../../components/SVGs/SYMBOLS/SVGSave";
import Tooltip from "../../components/containers/separated/tooltip";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 18;
/*SVG CONSTS*/ const height_svg = 18;

const CompleteForm = (theme: { theme: Etheme }) => {
  const location = useLocation();
  const { cnpj /*id*/ } = location.state;

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*__________________ HOOK - HANDLE CLIENT-CNPJ SUBMIT ____________________*/
  /*HANDLE CLIENT_CNPJ SUBMIT vvv */
  const [save, setsave] = useState(false); //modal confirmation of changes
  const [confirmed, setconfirmed] = useState(false);

  const handleCNPJSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    setsave(false);
    setTimeout(() => {
      setconfirmed(true);
    }, 1000);
  };

  const handlesave = () => {
    setsave(true);
  };

  const handleCancelsave = () => {
    setsave(false);
    setconfirmed(false);
  };

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
      } shadow-md flex flex-col items-center justify-between p-1 rounded-2xl h-full bg-opacity-50`}
    >
      {/*---- Botão de gerar PDF----*/}
      <div className={`fixed lg:ml-64 left-3 bottom-0 mb-6`}>
        <PDFComponent cnpj={cnpj} />
      </div>
      <div className={`divide-y divide-secondary divide-opacity-50 p-2`}>
        {/*------ FORMULARIO DO CLIENTE/CNPJ ------*/}

        <form onSubmit={handleCNPJSubmit}>
          <div className={`pb-6 flex flex-row flex-wrap w-100 justify-center`}>
            <div className={`w-full md:w-90`}>
              <FormClienteCNPJ theme={theme} cnpj={cnpj} />
            </div>
            <div className={`w-80 md:w-10 pr-2`}>
              <p className="flex justify-center w-100 font-oswald text-[20px] text-primary pt-5 pb-2">
                Status
              </p>
              <SelectStatus theme={theme} cnpj={cnpj} />
            </div>
            <div className={`w-full flex justify-between items-end pb-4`}>
              <div className={`w-full`}>
                <InfoTelemarking theme={theme} />
              </div>
              {/*------ BOTÃO ATUALIZAR CLIENTE --- botão para abrir o modal ------*/}

              <div className={`px-4`}>
                <Tooltip
                  message="Atualizar informações do cliente"
                  theme={newtheme}
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
            {/*------ MODAL CONFIRMAR ATUALIZACAO DE CLIENTE ------*/}

            <div className={`w-full lg:px-[35%] md:px-30 px-10`}>
              <ConfirmationModal
                theme={theme}
                isOpen={save}
                onCancel={handleCancelsave}
              />
            </div>

            {/*------ MENSAGEM DE SUCESSO AO ATUALIZAR CLIENTE ------*/}

            {confirmed ? (
              <p className={`text-green-500 text-size-xsm mr-1 mt-1.5`}>
                Salvo com sucesso
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteForm;
