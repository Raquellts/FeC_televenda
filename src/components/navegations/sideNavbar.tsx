import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../Hooks/updateTheme";
import Cookies from "js-cookie";
//Components
import logo from "../../assets/SVG/LOGO FOR WEB.svg";
// SVGs
import SVGCompany from "../SVGs/INFO/SVGCompany";
import SVGLogout from "../SVGs/USER/SVGLogout";
import SVGCircle from "../SVGs/CIRCLE/SVGCircle";
import SVGMenu from "../SVGs/CIRCLE/SVGMenu";
import SVGCheck from "../SVGs/CIRCLE/SVGCheck";
import SVGCancel from "../SVGs/CIRCLE/SVGCancel";
import SVGUser from "../SVGs/USER/SVGUser";
import Tooltip from "../containers/separated/tooltip";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

const SideNavbar = (theme: { theme: Etheme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const handleLogout = () => {
    Cookies.remove("Token");
    window.location.reload();
  };

  return (
    <div
      className={`${
        newtheme === Etheme.light
          ? "text-primary bg-container"
          : "text-dark-primary bg-dark-container"
      } h-full w-50 lg:w-full px-3 py-4 shadow-md`}
    >
      <div className="h-90 lg:h-full flex flex-col justify-between divide-y divide-tertiary font-oswald uppercase">
        <ul className="divide-y divide-tertiary">
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className="h-14 my-5 logo_filter" />
            <div className="hidden lg:block pl-2">
              <p className={`font-oswald text-size-lg`}>Freitas & Coutinho</p>
              <p className={`font-inter text-size-xsm font-style-lg`}>
                inteligência comercial
              </p>
            </div>
          </div>
          <li>
            {/*----- HOME - TODAS AS EMPRESAS ------*/}
            <a
              href="/"
              className="flex items-center lg:justify-start justify-center p-2 mb-2 rounded-lg hover:text-text hover:bg-tertiary group mt-5"
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
                Aprovados
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
              href="/Login"
              onClick={handleLogout}
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
            <div className="flex justify-center px-2 pt-2 group text-size-2xsm">
              <Tooltip
                message={
                  "Todos os dias a partir das 23:00 o servidor ficara inativo para backup e pode demorar alguns minutos para regularizar."
                }
                theme={newtheme}
              >
                <span className="opacity-50">
                  Inatividade a partir das 23:00<span className="ml-1">⚠︎</span>
                </span>
              </Tooltip>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
