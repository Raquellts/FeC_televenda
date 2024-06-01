import React, { useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../consts/updateTheme";

interface InputPrimaryProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  theme: { theme: Etheme };
}
const InputPrimary: React.FC<InputPrimaryProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  className,
  theme,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`${
        newtheme === Etheme.light
          ? "bg-container focus:bg-gray-700 focus:border-primary hover:border-tertiary placeholder-text text-text"
          : "bg-dark-container focus:bg-white focus:border-dark-primary hover:border-dark-tertiary placeholder-dark-text text-dark-text"
      } placeholder-opacity-70 hover:placeholder-opacity-100 text-opacity-70 hover:text-opacity-100 ring-0 outline-none border-b-2 border-transparent border-rounded block p-2.5 my-2 w-fit font-oswald ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputPrimary;
