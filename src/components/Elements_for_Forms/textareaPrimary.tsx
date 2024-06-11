import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../Hooks/updateTheme";

interface TextareaPrimaryProps {
  required?: boolean;
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  minRows?: number;
  maxRows?: number;
  theme: { theme: Etheme };
}

const TextareaPrimary: React.FC<TextareaPrimaryProps> = ({
  required,
  name,
  value,
  placeholder,
  onChange,
  className,
  maxRows,
  theme,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const textareaStyle = {
    minHeight: "43px",
    maxHeight: `${maxRows ? maxRows * 2 : 8}rem`,
  };

  return (
    <textarea
      required={required}
      name={name}
      placeholder={placeholder}
      className={`${
        newtheme === Etheme.light
          ? "bg-container focus:bg-gray-700 focus:border-primary hover:border-tertiary placeholder-text"
          : "bg-dark-container focus:bg-white focus:border-dark-primary hover:border-dark-tertiary placeholder-dark-text"
      } placeholder-opacity-70 hover:placeholder-opacity-100 ring-0 outline-none border-b-2 border-transparent rounded-2xl block px-2.5 pt-2 ${className}`}
      style={textareaStyle}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextareaPrimary;
