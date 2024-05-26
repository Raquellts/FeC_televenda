import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import style from "./buttonPrimary.module.css";
import useUpdateTheme from "../consts/updateTheme";

type ButtonPrimaryProps = {
  buttonContent: string;
  theme: { theme: Etheme };
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  buttonContent,
  theme,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <button
      type={"submit"}
      className={`${
        newtheme === Etheme.light
          ? "bg-tertiary hover:from-secondary hover:to-tertiary hover:border-accent"
          : "bg-dark-tertiary hover:from-dark-secondary hover:to-dark-tertiary hover:border-dark-accent"
      } flex-1 rounded-l-2xl h-10 p-2 my-2 lg:my-5 border-b-2 border-transparent text-center font-oswald bg-gradient-to-r ${
        style.button_primary
      }
      `}
    >
      <span className={`${style.button_content}`}>{buttonContent}</span>
    </button>
  );
};

export default ButtonPrimary;
