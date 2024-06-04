import React, { useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import InfosUSER from "../components/containers/infosUSER";
import SVGUser from "../components/SVGs/USER/SVGUser";

const Home: React.FC = () => {
  const [theme, setTheme] = useState(themes.activeTheme);

  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex h-full min-h-screen`}
    >
      <ModalSideNav theme={theme} />
      <div className="p-4 lg:ml-64">
        <div className="pb-5 flex justify-between items-center w-full min-w-screen">
          <span
            className={`${
              theme === Etheme.light ? "text-primary" : "text-dark-primary"
            } mt-1 ml-1 font-oswald text-xl opacity-80 flex-shrink flex items-center`}
          >
            <SVGUser
              width={30}
              height={30}
              fill_one="none"
              fill_two="currentColor"
            />
            <p className="ml-1 mt-1 uppercase">Usuarios</p>
          </span>
          <div className="flex-grow border-t border-primary ml-2 mt-3 opacity-50"></div>
          {/*divisória ^^^^ */}
        </div>
        <InfosUSER theme={theme} />
      </div>
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Home;
