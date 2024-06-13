import { useState } from "react";
import style from "../..//Home/Components/InfosCnpj.module.css";
import SVGEmail from "../../components/SVGs/CONTACT/SVGEmail";
import SVGUser from "../../components/SVGs/USER/SVGUser";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { CnpjOrder } from "../../API/API_utils";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 20;
/*SVG CONSTS*/ const height_svg = 20;

const OrdemItem = ({
  theme,
  Order,
}: {
  theme: { theme: Etheme };
  Order: CnpjOrder;
}) => {
  /*THEME*/ const [newtheme, setNewtheme] = useState(theme.theme);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light
          ? "divide-background"
          : "divide-dark-background"
      } flex shadow-md mb-1.5 ml-1 rounded-2xl divide-x`}
      key={"infocnpjitem" + Order}
    >
      {/* PRIMEIRA parte do container VVV */}
      <form
        className={`${
          newtheme === Etheme.light
            ? "bg-container text-text"
            : "bg-dark-container text-dark-text"
        } w-full px-2 py-2 rounded-2xl font-roboto`}
        key={"form1" + Order.id}
      >
        {/* --------------- NOME DA EMPRESA --- SVG BADGE ---------------- */}
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex justify-start`}
        >
          <SVGUser
            width={width_svg}
            height={height_svg}
            fill_one="none"
            fill_two={fill_Two_svg}
          />
          <p className="ml-1 truncate font-style-xlg">{Order.leadId}</p>
        </div>

        {/* --------------- LINHA DE CONTATO --- EMAILS ---------------- */}
        <div className="flex items-center ml-1">
          <SVGEmail
            width={width_svg}
            height={height_svg}
            fill_one="none"
            fill_two={fill_Two_svg}
          />
          {/*EMAIL 01*/}
          <p
            className={`${
              newtheme === Etheme.light ? style.light : style.dark
            } ml-1 justify-start flex ${style.cnpj_contact}`}
          >
            <span>{Order.status}</span>
          </p>
        </div>

        {/* --------------- LINHA DE ATIVIDADES --- CNAE DESC.. ---------------- */}
        <div
          className={`flex opacity-70 text-xs lowercase ${
            newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
          }`}
        >
          <p className={`ml-6 font-inter truncate ${style.cnpj_atividade}`}>
            {Order.userId}
          </p>
        </div>
      </form>
    </div>
  );
};

export default OrdemItem;
