import { useState } from "react";
import SVGEmail from "../../components/SVGs/CONTACT/SVGEmail";
import SVGUser from "../../components/SVGs/USER/SVGUser";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { User } from "../../API/API_utils";
import "../..//Home/Components/InfosCnpj.css";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 20;
/*SVG CONSTS*/ const height_svg = 20;

const InfoUSERItem = ({
  theme,
  data,
}: {
  theme: { theme: Etheme };
  data: User;
}) => {
  /*THEME*/ const [newtheme, setNewtheme] = useState(theme.theme);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light
          ? "divide-background text-primary"
          : "divide-dark-background text-dark-primary"
      } flex shadow-md mb-1.5 ml-1 rounded-2xl divide-x`}
      key={"infocnpjitem" + data.id}
    >
      {/* PRIMEIRA parte do container VVV */}
      <form
        className={`${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        } w-100 px-2 py-2 rounded-2xl font-roboto`}
      >
        {/* --------------- NOME E SOBRENOME --- USUARIO ---------------- */}
        <div className={`flex justify-start items-center ml-1`}>
          <SVGUser
            width={width_svg}
            height={height_svg}
            fill_one="none"
            fill_two={fill_Two_svg}
          />
          <p className="ml-1 truncate font-style-xlg">
            {data.name + " " + data.lastName}
          </p>

          <p className="ml-1 truncate text-size-xsm font-style-xlg">
            / username: {data.username}
          </p>
        </div>

        {/* --------------- LINHA DE CONTATO --- EMAILS ---------------- */}
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex items-center ml-1`}
        >
          <SVGEmail
            width={width_svg}
            height={height_svg}
            fill_one="none"
            fill_two={fill_Two_svg}
          />
          {/*EMAIL 01*/}
          <p
            className={`${
              newtheme === Etheme.light ? "light" : "dark"
            } ml-1 justify-start flex cnpj_contact`}
          >
            <span>{data.email}</span>
          </p>
        </div>
      </form>

      {/* SEGUNDA parte do container VVV */}
      {/*--- STATUS ---
      <form
        className={`w-10 ${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        }`}
      >
        <p className="ml-1 truncate font-style-xlg">ALGUMA INFO</p>
      </form>
      <form
        className={`w-10 ${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        } rounded-e-2xl`}
      >
        <p className="ml-1 truncate font-style-xlg">ALGUMA INFO</p>
      </form>*/}
    </div>
  );
};

export default InfoUSERItem;
