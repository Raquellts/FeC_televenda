import { useState } from "react";
import { Etheme } from "../../themeConsts";
import { useLocation } from "react-router-dom";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import PDFComponent from "../../components/containers/PDFS/PDFItemCNPJ";
import FormClienteCNPJ from "./FormClienteCNPJ";
import FormVendedor from "./FormVendedor";
import SelectStatus from "./selectStatus";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import NewFormVeiculo from "./NewFormVeiculo";
import { Cnpj } from "../../API/API_utils";
import ConfirmationModal from "../../components/containers/separated/confirmationModal";
import SVGSave from "../../components/SVGs/SYMBOLS/SVGSave";
import Tooltip from "../../components/containers/separated/tooltip";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 18;
/*SVG CONSTS*/ const height_svg = 18;

const CompleteForm = (theme: { theme: Etheme }) => {
  const location = useLocation();
  const cnpj: Cnpj = location.state;

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*__________________ HOOK - HANDLE CLIENT-CNPJ SUBMIT ____________________*/

  /*HANDLE CLIENT_CNPJ SUBMIT vvv */
  const [saveCNPJ, setsaveCNPJ] = useState(false); //modal confirmation of changes
  const [confirmedCNPJ, setconfirmedCNPJ] = useState(false);

  const handleCNPJSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    setsaveCNPJ(false);
    setTimeout(() => {
      setconfirmedCNPJ(true);
    }, 1000);
  };

  const handlesaveCNPJ = () => {
    setsaveCNPJ(true);
  };

  const handleCancelsaveCNPJ = () => {
    setsaveCNPJ(false);
    setconfirmedCNPJ(false);
  };

  /*__________________ HOOK - HANDLE PEDIDO-VEICULO SUBMIT ____________________*/

  /*HANDLE VEICULO_PEDIDO SUBMIT  */
  const [saveVeiculo, setsaveVeiculo] = useState(false); //modal confirmation of changes
  const [confirmedVeiculo, setconfirmedVeiculo] = useState(false);

  const handleVeiculoSubmit = async () => {
    setsaveVeiculo(false);
    setTimeout(() => {
      setconfirmedVeiculo(true);
    }, 1000);
  };

  const handlesaveVeiculo = () => {
    setsaveVeiculo(true);
  };

  const handleCancelsaveVeiculo = () => {
    setsaveVeiculo(false);
    setconfirmedVeiculo(false);
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
              <p className="flex justify-center w-100 font-oswald text-[20px] text-primary pt-5">
                Status
              </p>
              <SelectStatus theme={theme} cnpj={cnpj} />
            </div>

            {/*------ BOTÃO ATUALIZAR CLIENTE --- botão para abrir o modal ------*/}

            <Tooltip
              message="Atualizar informações do cliente"
              theme={newtheme}
              className="mb-9 text-center"
            >
              <ButtonTertiary
                onClick={handlesaveCNPJ}
                className={`${
                  saveCNPJ ? "hidden" : ""
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

            {/*------ MODAL CONFIRMAR ATUALIZACAO DE CLIENTE ------*/}

            <div className={`w-full lg:px-[35%] md:px-30 px-10`}>
              <ConfirmationModal
                theme={theme}
                isOpen={saveCNPJ}
                onCancel={handleCancelsaveCNPJ}
              />
            </div>

            {/*------ MENSAGEM DE SUCESSO AO ATUALIZAR CLIENTE ------*/}

            {confirmedCNPJ ? (
              <p className={`text-green-500 text-size-xsm mr-1 mt-1.5`}>
                Salvo com sucesso
              </p>
            ) : null}
          </div>
        </form>
        <div className={`pb-6`}>
          {/*------ FORMULARIO DOS VEICULOS/PEDIDOS ------*/}

          <form onSubmit={handleVeiculoSubmit}>
            <NewFormVeiculo theme={theme} cnpj={cnpj} />

            {/*------ BOTÃO ATUALIZAR CLIENTE --- botão para abrir o modal ------*/}
            <div>
              <Tooltip
                message="Atualizar informações do cliente"
                theme={newtheme}
                className="mb-9 text-center"
              >
                <ButtonTertiary
                  onClick={handlesaveVeiculo}
                  className={`${
                    saveCNPJ ? "hidden" : ""
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

              {/*------ MODAL CONFIRMAR ATUALIZACAO DE CLIENTE ------*/}

              <div className={`w-full lg:px-[35%] md:px-30 px-10`}>
                <ConfirmationModal
                  theme={theme}
                  isOpen={saveVeiculo}
                  onCancel={handleCancelsaveVeiculo}
                />
              </div>

              {/*------ MENSAGEM DE SUCESSO AO ATUALIZAR CLIENTE ------*/}

              {confirmedVeiculo ? (
                <p className={`text-green-500 text-size-xsm mr-1 mt-1.5`}>
                  Salvo com sucesso
                </p>
              ) : null}
            </div>
          </form>
        </div>
        <div className={`pb-6`}>
          <FormVendedor theme={theme} cnpj={cnpj} />
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;
