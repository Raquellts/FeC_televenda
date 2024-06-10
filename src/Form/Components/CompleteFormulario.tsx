import { useState } from "react";
import { Etheme } from "../../themeConsts";
import { useLocation } from "react-router-dom";
import { CNPJInterface } from "../../../InterfaceCNPJ";
import useUpdateTheme from "../../components/consts/updateTheme";
import PDFComponent from "../../components/containers/PDFS/PDFItemCNPJ";
import FormClienteCNPJ from "./FormClienteCNPJ";
import FormVendedor from "./FormVendedor";
import SelectStatus from "./selectStatus";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import NewFormVeiculo from "./NewFormVeiculo";

const CompleteForm = (theme: { theme: Etheme }) => {
  const location = useLocation();
  const cnpj: CNPJInterface = location.state;

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

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
        </div>
        <div className={`pb-6`}>
          <NewFormVeiculo theme={theme} cnpj={cnpj} />
        </div>
        <div className={`pb-6`}>
          <FormVendedor theme={theme} cnpj={cnpj} />
        </div>
      </div>
      <div className={`fixed center-0 bottom-6 justify-start`}>
        <ButtonTertiary
          onClick={() => window.history.back()}
          className={`flex flex-row items-center border-transparent bg-blue-700 text-text hover:border-secondary hover:bg-primary font-oswald px-4 py-2 text-[16px]`}
        >
          <>Salvar</>
        </ButtonTertiary>
      </div>
    </div>
  );
};

export default CompleteForm;
