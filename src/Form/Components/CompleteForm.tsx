import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import FormCliente from "./FormCliente";
import { Cnpj } from "../../API/API_utils";

interface CompleteFormProps {
  theme: { theme: Etheme };
  cnpj: Cnpj;
}

const CompleteForm: React.FC<CompleteFormProps> = ({ theme, cnpj }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div>
      <div
        className={`${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        } shadow-md flex flex-col items-center justify-between p-1 rounded-2xl h-full bg-opacity-50`}
      >
        {/*---- Botão de gerar PDF----*/}
        {/* <div className={`fixed lg:ml-64 left-3 bottom-0 mb-6`}>
          <PDFComponent cnpj={cnpj} />
        </div> */}
        <div className={`divide-y divide-secondary divide-opacity-50 p-2`}>
          <FormCliente theme={theme} cnpj={cnpj} />
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;
