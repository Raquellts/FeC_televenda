import { useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import Cabecalho from "../components/navegations/cabecalho";
import CompleteForm from "./Components/CompleteForm";
import { useLocation } from "react-router-dom";
import MapOrders from "./Components/MapOrders";

function Form() {
  const [theme, setTheme] = useState(themes.activeTheme);
  const pageName = "Formulario do pedido";
  const location = useLocation();
  const { cnpj } = location.state || {};

  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex min-h-screen h-full w-full`}
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
      <div className="px-4 pb-4 lg:ml-64">
        {/* FORMULARIO DE PEDIDO*/}
        <CompleteForm theme={{ theme }} cnpj={cnpj} />
        {/* LISTA DE PEDIDOS */}
        <MapOrders theme={theme} cnpj={cnpj} />
      </div>

      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default Form;
