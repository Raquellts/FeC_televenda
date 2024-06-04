import React, { useEffect, useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import Cabecalho from "../components/containers/separated/cabecalho";
import InfosCnpj from "../components/containers/infosCnpj";
import ButtonTertiary from "../components/buttons/ButtonTertiary";
import { Link } from "react-router-dom";

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
        <InfosCnpj statustext="PENDING" theme={theme} />
      </div>
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
      <div className={`fixed left-4 bottom-6 lg:pl-64 justify-start`}>
        <ButtonTertiary
          onClick={() => {}}
          className={`flex flex-row items-center border-transparent bg-tertiary text-text hover:border-secondary hover:bg-primary font-oswald px-3 py-2 text-[20px]`}
        >
          <Link to="/Home">{"<<"}</Link>
        </ButtonTertiary>
      </div>
    </div>
  );
};

export default Home;
