import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import style from "./buttonPrimary.module.css";
import useUpdateTheme from "../consts/updateTheme";

type ButtonPrimaryProps = {
  buttonContent: string;
  theme: { theme: Etheme };
  children?: JSX.Element;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  buttonContent,
  theme,
  children,
  className,
  type,
  onClick,
  disabled,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${
        newtheme === Etheme.light
          ? "bg-tertiary hover:bg-secondary hover:border-tertiary"
          : "bg-dark-secondary hover:bg-tertiary hover:border-accent"
      } flex-1 rounded-l-2xl h-10 p-2 my-2 lg:my-5 border-b-2 border-transparent text-center font-oswald ${
        style.button_primary
      } ${className}
      `}
    >
      {" "}
      {children}
      <span>{buttonContent}</span>
    </button>
  );
};

export default ButtonPrimary;
