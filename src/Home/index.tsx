import React, { useState, useEffect } from "react";
import { Etheme, themes } from "../themeConsts";
import InfosCnpj from "./Components/infosCnpj";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import Cabecalho from "../components/navegations/cabecalho";
import Loading from "../components/backgrounds/loadingBack";
import { getCnpjs } from "../API/API_cnpj";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  filter: number | null;
  pageName: string;
}

const Home: React.FC<HomeProps> = ({ filter, pageName }) => {
  /*THEME*/ const [theme, setTheme] = useState(themes.activeTheme);

  // LOADINGS ___________

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      setIsLoading(true);
      getCnpjs();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      navigate("/*");
    }
  }, [navigate]);

  //_____________________

  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex h-full min-h-screen`}
    >
      {/* LOADING */}
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loading theme={theme} />
        </div>
      ) : (
        <>
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
            <InfosCnpj statusNumber={filter} theme={theme} />
          </div>

          {/* THEME BUTTON */}
          <div className="fixed bottom-5 right-4">
            <ButtonTheme theme={theme} setTheme={setTheme} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
