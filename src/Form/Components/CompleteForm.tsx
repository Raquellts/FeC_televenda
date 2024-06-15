import { useState } from "react";
import { Etheme } from "../../themeConsts";
import { useLocation } from "react-router-dom";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import PDFComponent from "./PDFS/PDFItemCNPJ";
import FormCliente from "./FormCliente";
import FormPedido from "./FormPedido";

const CompleteForm = (theme: { theme: Etheme }) => {
  const location = useLocation();
  const { cnpj } = location.state;

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
        <div className={`fixed lg:ml-64 left-3 bottom-0 mb-6`}>
          <PDFComponent cnpj={cnpj} />
        </div>
        <div className={`divide-y divide-secondary divide-opacity-50 p-2`}>
          <FormCliente theme={theme} cnpj={cnpj} />
        </div>
      </div>
      <FormPedido theme={theme} cnpj={cnpj} />
    </div>
  );
};

export default CompleteForm;
