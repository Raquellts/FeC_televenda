import React, { useState } from "react";
import { Etheme, themes } from "../themeConsts";
import InfosCnpj from "../components/containers/infosCnpj";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import SVGCompany from "../components/SVGs/INFO/SVGCompany";

const Home: React.FC = () => {
  const [theme, setTheme] = useState(themes.activeTheme);

  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex h-full`}
    >
      <ModalSideNav theme={theme} />
      <div className="px-4 md:ml-64">
        <div className="pb-3 pt-4 flex justify-between items-center w-full min-w-screen">
          <span
            className={`${
              theme === Etheme.light ? "text-primary" : "text-dark-primary"
            } mt-1 ml-1 font-oswald text-xl opacity-80 flex-shrink flex items-center`}
          >
            <SVGCompany
              width={30}
              height={30}
              fill_one="none"
              fill_two="currentColor"
            />
            <p className="ml-1 mt-1 uppercase">Lista de empresas</p>
          </span>

          <div className="flex-grow border-t border-primary ml-2 md:mr-[3rem] mt-3 opacity-50"></div>

          <div className="fixed top-0 right-4">
            <ButtonTheme theme={theme} setTheme={setTheme} />
          </div>
        </div>

        <InfosCnpj theme={theme} />
      </div>
    </div>
  );
};

export default Home;
