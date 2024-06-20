import { useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import Cabecalho from "../components/navegations/cabecalho";
import CompleteForm from "./Components/CompleteForm";
import { useLocation } from "react-router-dom";
import MapOrders from "./Components/MapOrders";
import { usePrintState } from "../components/Hooks/isPrinting";

function Form() {
  const { isPrinting } = usePrintState();
  const [theme, setTheme] = useState(themes.activeTheme);
  const pageName = "Formulario do pedido";
  const location = useLocation();
  const { cnpj, user } = location.state || {};

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
      <div className={`pb-4 lg:ml-64 ${isPrinting ? "" : "px-4"}`}>
        {/* FORMULARIO DE PEDIDO*/}
        <CompleteForm theme={{ theme }} cnpj={cnpj} />
        {/* LISTA DE PEDIDOS */}
        <MapOrders theme={theme} cnpj={cnpj} user={user} />
      </div>

      <div className={`fixed bottom-5 right-4 ${isPrinting ? "hidden" : ""}`}>
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default Form;
