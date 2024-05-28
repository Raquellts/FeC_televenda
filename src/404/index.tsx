import { useState } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import { Etheme, themes } from "../themeConsts";
import ButtonTheme from "../themeButton";

function Page404() {
  const [theme, setTheme] = useState(themes.activeTheme);

  return (
    <main
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-primary"
      } h-screen w-full flex flex-col justify-center items-center`}
    >
      <h1
        className={`${
          theme === Etheme.light ? "text-text" : "text-dark-text"
        } md:text-[200px] text-[150px] font-extrabold tracking-widest`}
      >
        404
      </h1>
      <div className="md:text-[20px] text-[18px] bg-accent px-2 text-white rounded absolute font-oswald uppercase mb-8 mr-4">
        Página não encontrada
      </div>
      <a href="/">
        <ButtonPrimary
          buttonContent="Retornar"
          theme={{
            theme: theme,
          }}
        />
      </a>

      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </main>
  );
}

export default Page404;
