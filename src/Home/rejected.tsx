import React, { useEffect, useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import Cabecalho from "../components/containers/separated/cabecalho";
import InfosCnpj from "../components/containers/infosCnpj";

const Home: React.FC = () => {
  const [theme, setTheme] = useState(themes.activeTheme);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex h-full min-h-screen`}
    >
      <ModalSideNav theme={theme} />
      <div className="px-4 lg:ml-64">
        <div
          className={`pb-1 pt-4 ${
            isScrolled
              ? `sticky top-0 pt-3 pb-1 z-10 ${
                  theme === Etheme.light
                    ? "bg-background"
                    : "bg-dark-background"
                }`
              : ""
          }`}
        >
          <Cabecalho theme={theme} />
        </div>
        <InfosCnpj statustext="REJECTED" theme={theme} />
      </div>
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Home;
