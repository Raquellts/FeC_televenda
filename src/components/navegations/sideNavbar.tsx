import { useState } from "react";
import { Etheme } from "../../themeConsts";
import SVGCompany from "../SVGs/INFO/SVGCompany";
import SVGAddClient from "../SVGs/USER/SVGAddClient";
import SVGLogout from "../SVGs/USER/SVGLogout";
import useUpdateTheme from "../consts/updateTheme";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

const SideNavbar = (theme: { theme: Etheme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light
          ? "text-primary bg-container"
          : "text-dark-primary bg-dark-container"
      } h-full w-50 md:w-full px-3 py-4 shadow-md`}
    >
      <div className="h-90 md:h-full flex flex-col justify-between divide-y divide-tertiary font-oswald uppercase">
        <ul>
          <li>
            <a
              href="/home"
              className="flex items-center md:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGCompany
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden md:block md:visible ml-3">
                Lista de empresas
              </span>
            </a>
            <a
              href="#"
              className="flex items-center md:justify-start justify-center p-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGAddClient
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden md:block flex-1 ms-3 whitespace-nowrap">
                Adicionar cliente
              </span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="/login"
              className="flex items-center md:justify-start justify-center p-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGLogout
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden md:block flex-1 ms-3 whitespace-nowrap">
                Logout
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
