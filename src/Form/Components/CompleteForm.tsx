import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import FormCliente from "./FormCliente";
import { Cnpj } from "../../API/API_utils";
import PrintButton from "../../components/buttons/PrintButton";
import { usePrintState } from "../../components/Hooks/isPrinting";

interface CompleteFormProps {
  theme: { theme: Etheme };
  cnpj: Cnpj;
}

const CompleteForm: React.FC<CompleteFormProps> = ({ theme, cnpj }) => {
  const { isPrinting } = usePrintState();

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div>
      <div
        className={`${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        } flex flex-col items-center justify-between p-1 rounded-2xl h-full ${
          isPrinting ? "" : "shadow-md"
        }`}
      >
        {/*---- Botão de gerar PDF----*/}
        <div
          className={`${
            isPrinting ? "hidden" : ""
          } fixed lg:ml-64 left-3 bottom-0 mb-6`}
        >
          <PrintButton />
        </div>
        <div
          className={`w-100 divide-y divide-secondary divide-opacity-50 ${
            isPrinting ? "" : "p-2"
          }`}
        >
          <FormCliente theme={theme} cnpj={cnpj} />
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;
