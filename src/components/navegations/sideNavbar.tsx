import React from "react";
import SVGCompany from "../SVGs/INFO/SVGCompany";
import SVGAddClient from "../SVGs/USER/SVGAddClient";
import SVGLogout from "../SVGs/USER/SVGLogout";

const SideNavbar: React.FC = () => {
  const primaryColor_svg = "currentColor";
  const width_svg = 24;
  const height_svg = 24;

  return (
    <div className="h-full w-50 md:w-full px-3 py-4 bg-container text-primary">
      <div className="h-90 md:h-full flex flex-col justify-between divide-y divide-tertiary">
        <ul className="font-medium">
          <li>
            <a
              href="#"
              className="flex items-center md:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGCompany
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={primaryColor_svg}
              />
              <span className="hidden md:block md:visible ml-3">
                Lista de CNPJs
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
                fill_two={primaryColor_svg}
              />
              <span className="hidden md:block flex-1 ms-3 whitespace-nowrap">
                Adicionar cliente
              </span>
            </a>
          </li>
        </ul>
        <ul className="font-medium">
          <li>
            <a
              href="#"
              className="flex items-center md:justify-start justify-center p-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGLogout
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={primaryColor_svg}
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
