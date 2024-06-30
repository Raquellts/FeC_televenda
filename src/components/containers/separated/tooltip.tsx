import { useState } from "react";
import useUpdateTheme from "../../Hooks/updateTheme";
import { Etheme } from "../../../themeConsts";

type TooltipProps = {
  message: string;
  children: JSX.Element;
  theme: Etheme;
  className?: string;
};

export default function Tooltip({
  message,
  children,
  theme,
  className,
}: TooltipProps) {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  return (
    <div className="group relative flex">
      {children}
      <span
        className={`${
          newtheme === Etheme.light
            ? "text-text bg-container"
            : "text-dark-text bg-dark-container"
        } absolute bottom-0 scale-0 transition-all rounded p-2 text-size-xsm group-hover:scale-100 z-50 ${className}`}
      >
        {message}
      </span>
    </div>
  );
}
