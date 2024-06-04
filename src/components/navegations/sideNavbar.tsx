import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../consts/updateTheme";
// SVGs
import SVGCompany from "../SVGs/INFO/SVGCompany";
import SVGAddClient from "../SVGs/USER/SVGAddClient";
import SVGLogout from "../SVGs/USER/SVGLogout";
import SVGCircle from "../SVGs/CIRCLE/SVGCircle";
import SVGMenu from "../SVGs/CIRCLE/SVGMenu";
import SVGCheck from "../SVGs/CIRCLE/SVGCheck";
import SVGCancel from "../SVGs/CIRCLE/SVGCancel";
import SVGUser from "../SVGs/USER/SVGUser";

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
      } h-full w-50 lg:w-full px-3 py-4 shadow-md`}
    >
      <div className="h-90 lg:h-full flex flex-col justify-between divide-y divide-tertiary font-oswald uppercase">
        <ul>
          <li>
            {/*----- HOME - TODAS AS EMPRESAS ------*/}
            <a
              href="/home"
              className="flex items-center lg:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGCompany
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden lg:block lg:visible ml-3">
                Todas as empresas
              </span>
            </a>
            {/*----- ADD CLINTE - ADICIONAR CLIENTE NOVO ------*/}
            <a
              href="#"
              className="flex items-center lg:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGAddClient
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden lg:block flex-1 ms-3 whitespace-nowrap">
                Adicionar cliente
              </span>
            </a>
            {/*----- PENDING - PENDENTES AINDA NÃO LIGADOS ------*/}
            <a
              href="/Pending"
              className="flex items-center lg:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGCircle
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden lg:block flex-1 ms-3 whitespace-nowrap">
                Pendentes
              </span>
            </a>
            {/*----- SUSPEND - SUSPENDERAM A COMPRA ------*/}
            <a
              href="/Suspended"
              className="flex items-center lg:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGMenu
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden lg:block flex-1 ms-3 whitespace-nowrap">
                Suspensos
              </span>
            </a>
            {/*-----  APPROVED - APROVARAM A COMPRA ------*/}
            <a
              href="/Approved"
              className="flex items-center lg:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGCheck
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden lg:block flex-1 ms-3 whitespace-nowrap">
                Compras Aprovadas
              </span>
            </a>
            {/*-----  REJECTED - REJEITARAM A COMPRA ------*/}
            <a
              href="/Rejected"
              className="flex items-center lg:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGCancel
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden lg:block flex-1 ms-3 whitespace-nowrap">
                Recusas
              </span>
            </a>
          </li>
        </ul>
        {/*----------------- RODAPÉ DA SIDEBAR ------------------*/}
        <ul>
          <li>
            {/*----- USUARIOS - VER TABELA DOS USUARIOS ------*/}
            <a
              href="/Users"
              className="flex items-center lg:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGUser
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden lg:block flex-1 ms-3 whitespace-nowrap">
                Usuarios
              </span>
            </a>
            {/*----- LOGOUT - VOLTAR AO LOGIN ------*/}
            <a
              href="/login"
              className="flex items-center lg:justify-start justify-center p-2 rounded-lg hover:text-text hover:bg-tertiary group"
            >
              <SVGLogout
                width={width_svg}
                height={height_svg}
                fill_one="none"
                fill_two={fill_Two_svg}
              />
              <span className="hidden lg:block flex-1 ms-3 whitespace-nowrap">
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
