import { useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import SVGBadge from "../components/SVGs/USER/SVGBadge";
import ButtonTheme from "../themeButton";
import FormCNPJ from "../components/containers/FormClienteCNPJ";

function Form() {
  const [theme, setTheme] = useState(themes.activeTheme);
  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex min-h-screen h-full`}
    >
      <ModalSideNav theme={theme} />
      <div className="px-4 md:ml-64">
        <div className="pb-3 pt-4 flex justify-between items-center w-full min-w-screen">
          <span
            className={`${
              theme === Etheme.light ? "text-primary" : "text-dark-primary"
            } mt-1 ml-1 font-oswald text-xl opacity-80 flex-shrink flex items-center`}
          >
            <SVGBadge
              width={30}
              height={30}
              fill_one="none"
              fill_two="currentColor"
            />
            <p className="ml-1 mt-1 uppercase">Formulario</p>
          </span>
          <div className="flex-grow border-t border-primary ml-2 mt-3 opacity-50"></div>
          {/*divisória ^^^^ */}
        </div>

        <FormCNPJ theme={theme} />
      </div>
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default Form;
