import React, { useState, MouseEvent } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../Hooks/updateTheme";
import SVGClipboard from "../SVGs/INFO/SVGClipboard";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 16;
/*SVG CONSTS*/ const height_svg = 16;

type CopyProps = {
  textToCopy: string;
  theme: { theme: Etheme };
};

const ClipboardButton: React.FC<CopyProps> = ({ textToCopy, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const copyToClipboard = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Texto copiado para o clipboard");
    } catch (err) {
      alert("Falha ao copiar o texto:");
      console.error(err);
    }
  };

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className={`${
        newtheme === Etheme.dark ? "bg-tertiary" : "bg-[#1d2f5a]"
      } rounded-xl text-text hover:text-primary ml-[2px]`}
    >
      <SVGClipboard
        width={width_svg}
        height={height_svg}
        fill_one="none"
        fill_two={fill_Two_svg}
      />
    </button>
  );
};

export default ClipboardButton;
