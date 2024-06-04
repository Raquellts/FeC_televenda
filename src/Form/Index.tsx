import { useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import SVGBadge from "../components/SVGs/USER/SVGBadge";
import ButtonTheme from "../themeButton";
import CompleteForm from "../components/containers/separated/Form Cliente/CompleteFormulario";
import ButtonTertiary from "../components/buttons/ButtonTertiary";

function Form() {
  const [theme, setTheme] = useState(themes.activeTheme);
  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex min-h-screen h-full`}
    >
      <ModalSideNav theme={theme} />
      <div className="px-4 pb-4 lg:ml-64">
        <div className="pb-5 pt-4 flex justify-between items-center w-full min-w-screen">
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

        <CompleteForm theme={theme} />
      </div>
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
      <div className={`fixed left-4 bottom-6 lg:pl-64 justify-start`}>
        <ButtonTertiary
          onClick={() => window.history.back()}
          className={`flex flex-row items-center border-transparent bg-tertiary text-text hover:border-secondary hover:bg-primary font-oswald px-3 py-2 text-[20px]`}
        >
          <>{"<<"}</>
        </ButtonTertiary>
      </div>
    </div>
  );
}

export default Form;
