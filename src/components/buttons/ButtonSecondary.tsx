import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import style from "./buttonSecondary.module.css";
import useUpdateTheme from "../consts/updateTheme";

interface ButtonSecondaryProps {
  href: string;
  buttonContent: string;
  theme: { theme: Etheme };
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  href,
  buttonContent,
  theme,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <a
      className={`${
        newtheme === Etheme.light ? style.light : style.dark
      } text-color-2 button-secondary font-oswald justify-center rounded-r-2xl h-8 p-2 text-center my-3 lg:my-6 small-style ${
        style.button_secondary
      }`}
      href={href}
    >
      {buttonContent}
    </a>
  );
};

export default ButtonSecondary;
