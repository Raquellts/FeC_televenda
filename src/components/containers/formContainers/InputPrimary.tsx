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
          ? "bg-container placeholder-primary focus:bg-gray-700 focus:border-primary hover:border-tertiary text-text placeholder-primary"
          : "bg-dark-container placeholder-dark-primary focus:bg-white focus:border-dark-primary hover:border-dark-tertiary text-dark-text placeholder-dark-primary"
      } ring-0 outline-none border-b-2 border-transparent rounded-2xl block p-2.5 my-2 w-fit font-oswald ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputPrimary;
