import React, { useState } from "react";
import { Etheme, themes } from "../themeConsts";
import InfosCnpj from "../components/containers/infosCnpj";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import Cabecalho from "../components/navegations/cabecalho";

const Home: React.FC = () => {
  const [theme, setTheme] = useState(themes.activeTheme);
  const filter = null;
  const pageName = "Todas as empresas";

  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex h-full min-h-screen`}
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

      {/* INFOSCNPJ */}
      <div className="px-4 lg:ml-64">
        <InfosCnpj statustext={filter} theme={theme} />
      </div>

      {/* THEME BUTTON */}
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Home;
