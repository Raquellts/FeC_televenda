import React, { useState, useEffect, useCallback } from "react";
import { Etheme, themes } from "../themeConsts";
import InfosCnpj from "./Components/infosCnpj";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import Cabecalho from "../components/navegations/cabecalho";
import { getCommonUser } from "../API/API_cnpj";
import { User } from "../API/API_utils";

interface HomeProps {
  filter: number | null;
  pageName: string;
}

const Home: React.FC<HomeProps> = ({ filter, pageName }) => {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);

  //_____________________
  // GETUSER vvv ___________

  const [user, setUser] = useState<User>();

  const handleDataUpdate = useCallback(() => {
    getCommonUser().then((data) => {
      setUser(data);
    });
  }, []);

  useEffect(() => {
    handleDataUpdate();
  }, [handleDataUpdate]);

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
      {user && (
        <div className="px-4 lg:ml-64">
          <InfosCnpj statusNumber={filter} theme={theme} user={user.role} />
        </div>
      )}
      {/* THEME BUTTON */}
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Home;
