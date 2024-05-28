// ButtonTheme.tsx
import { useEffect } from "react";
import SVGMoon from "./components/SVGs/THEME/SVGMoon";
import SVGSun from "./components/SVGs/THEME/SVGSun";
import { Etheme } from "./themeConsts";

type ButtonThemeProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<Etheme>>;
};

const ButtonTheme: React.FC<ButtonThemeProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === Etheme.light ? Etheme.dark : Etheme.light;
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme as Etheme);
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(storedTheme);
    }
  }, [theme, setTheme]);

  return (
    <button
      type="button"
      className={`${
        theme === Etheme.light
          ? "bg-background hover:text-black hover:bg-tertiary hover:border-accent hover:text-background"
          : "bg-dark-background hover:text-white hover:bg-secondary hover:bg-dark-tertiary hover:border-dark-accent"
      } border-background text-primary border-b-2 border-tertiary rounded-full px-2 py-2 mt-3 text-center`}
      onClick={toggleTheme}
    >
      {theme === Etheme.light ? (
        <SVGMoon
          width={24}
          height={24}
          fill_one={"none"}
          fill_two={"currentColor"}
        />
      ) : (
        <SVGSun
          width={24}
          height={24}
          fill_one={"none"}
          fill_two={"currentColor"}
        />
      )}
    </button>
  );
};

export default ButtonTheme;
