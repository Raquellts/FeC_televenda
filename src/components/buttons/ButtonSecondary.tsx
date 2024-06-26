import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import "./ButtonSecondary.css";
import useUpdateTheme from "../Hooks/updateTheme";

interface ButtonSecondaryProps {
  href: string;
  buttonContent: string;
  theme: { theme: Etheme };
  children?: JSX.Element;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  href,
  buttonContent,
  theme,
  children,
  className,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <a
      className={`${
        newtheme === Etheme.light ? "light" : "dark"
      } text-color-2 button-secondary font-oswald justify-center rounded-r-2xl h-8 p-2 text-center my-3 lg:my-6 small-style ${"button_secondary"} ${className}`}
      href={href}
    >
      {buttonContent} {children}
    </a>
  );
};

export default ButtonSecondary;
