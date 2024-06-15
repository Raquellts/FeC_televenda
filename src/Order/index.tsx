import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Etheme, themes } from "../themeConsts";
import ButtonTheme from "../themeButton";
import Cabecalho from "../components/navegations/cabecalho";
import ModalSideNav from "../components/navegations/modalSideNav";
import CompVeiculo from "./Components/CompVeiculo";

const FormPedido = () => {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);
  const location = useLocation();
  const { cnpj: cnpjFromLocation } = location.state || {};
  const cnpj = cnpjFromLocation || {
    id: "",
    leadId: "",
    userId: "",
  };
  const pageName = "Criar pedido";

  return (
    <>
      <div
        className={`${
          theme === Etheme.light ? "bg-background" : "bg-dark-background"
        } Flex min-h-screen h-full`}
      >
        <ModalSideNav theme={theme} />
        {/* CABECALHO E TITLEBAR */}
        <div
          className={`sticky top-0 z-10 lg:ml-64 pb-[1px] pt-2 px-4 ${
            theme === Etheme.light ? "bg-background" : "bg-dark-background"
          }`}
        >
          <Cabecalho theme={{ theme }} pageName={pageName} />
        </div>
        <div className="px-4 lg:ml-64 font-oswald flex flex-col items-start justify-center align-middle">
          {/* FORMULARIO DE PEDIDO*/}
          <p className="text-red-500 text-size-xsm ml-4 mb-4">
            * Campos obrigatórios
          </p>
          <CompVeiculo theme={{ theme }} cnpj={cnpj} />
        </div>
        {/*-----------//THEME --- BOTÃO DE MUDAR O TEMA ----------*/}
        <div className="fixed bottom-3 right-4">
          <ButtonTheme theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </>
  );
};

export default FormPedido;
