import React, { useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../consts/updateTheme";

interface TextareaPrimaryProps {
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
  name,
  value,
  placeholder,
  onChange,
  className,
  minRows,
  maxRows,
  theme,
}) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const textareaStyle = {
    minHeight: `${minRows ? minRows * 2 : 4}rem`,
    maxHeight: `${maxRows ? maxRows * 2 : 8}rem`,
  };

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      required
      className={`${
        newtheme === Etheme.light
          ? "bg-container focus:bg-gray-700 text-text focus:border-primary hover:border-tertiary"
          : "bg-dark-container focus:bg-white text-dark-text focus:border-dark-primary hover:border-dark-tertiary"
      } ring-0 outline-none border-b-2 border-transparent placeholder-primary rounded-2xl block px-2.5 pt-1 ${className}`}
      style={textareaStyle}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextareaPrimary;
