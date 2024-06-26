import { useState } from "react";
import "./titlebar.css";
import useUpdateTheme from "../Hooks/updateTheme";
import { Etheme } from "../../themeConsts";

const TitleBar = (theme: { theme: Etheme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const handleBack = () => {
    window.history.back();
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoToHref = () => {
    window.location.href = "/";
  };

  const buttonClasses = `rounded-xl text-md ${
    newtheme === Etheme.light
      ? "hover:text-text hover:bg-container"
      : "hover:text-dark-text hover:bg-dark-container"
  }`;

  return (
    <div
      className={`title-bar w-full ${
        newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
      }`}
    >
      <div className={`window-controls flex flex-row justify-end w-full`}>
        <button
          onClick={handleBack}
          className={`${buttonClasses} text-size-md`}
        >
          <p style={{ paddingBottom: "4px" }}>←</p>
        </button>
        <button
          onClick={handleReload}
          className={`${buttonClasses} text-size-sm`}
        >
          <p>⟲</p>
        </button>
        <button
          onClick={handleGoToHref}
          className={`${buttonClasses} text-size-lg`}
        >
          <p style={{ paddingBottom: "5px" }}>⌂</p>
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
