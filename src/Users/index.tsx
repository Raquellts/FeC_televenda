import React, { useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import InfosUSER from "./Components/infosUSER";
import Cabecalho from "../components/navegations/cabecalho";

const Home: React.FC = () => {
  const [theme, setTheme] = useState(themes.activeTheme);
  const pageName = "Usuarios";

  return (
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
      <div className="px-4 pb-4 lg:ml-64">
        <InfosUSER theme={theme} />
      </div>
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Home;
