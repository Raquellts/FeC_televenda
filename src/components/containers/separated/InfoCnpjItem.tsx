import React, { useState } from "react";
import { CNPJInterface, USERInterface } from "../../../../InterfaceCNPJ";
import { Etheme } from "../../../themeConsts";
import SVGBadge from "../../SVGs/USER/SVGBadge";
import useUpdateTheme from "../../consts/updateTheme";
import ModalComments from "./modalComments";
import Status from "./status";
import style from "../infosCnpj.module.css";
import SVGPhoneCall from "../../SVGs/PHONE/SVGPhoneCall";
import SVGEmail from "../../SVGs/CONTACT/SVGEmail";
import { Link } from "react-router-dom";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 24;
/*SVG CONSTS*/ const height_svg = 24;

const InfoCnpjItem = ({
  cnpj,
  theme,
  data,
  setData,
}: {
  cnpj: CNPJInterface;
  theme: { theme: Etheme };
  data: USERInterface;
  setData: React.Dispatch<React.SetStateAction<USERInterface>>;
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
      key={"infocnpjitem" + cnpj.cnpj}
    >
      {/* PRIMEIRA parte do container VVV */}
      <form
        className={`${
          newtheme === Etheme.light
            ? "bg-container text-text"
            : "bg-dark-container text-dark-text"
        } w-70 px-2 py-2 rounded-s-2xl font-oswald`}
        key={"form1" + cnpj.cnpj}
      >
        <div className={`flex justify-between items-center ${style.cnpj_name}`}>
          <div
            className={`${
              newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
            } flex justify-start`}
          >
            <SVGBadge
              width={width_svg}
              height={height_svg}
              fill_one="none"
              fill_two={fill_Two_svg}
            />
            <p className="ml-1 mt-[2px] font-semibold font-inter truncate ...">
              {cnpj.name}
            </p>
          </div>
          <ModalComments
            theme={theme}
            comments={cnpj.comments}
            cnpj={cnpj}
            data={data}
            setData={setData}
          />
        </div>

        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex flex-wrap`}
        >
          <div className="flex items-center mb-1">
            <SVGPhoneCall
              width={width_svg}
              height={height_svg}
              fill_one="none"
              fill_two={fill_Two_svg}
            />
            <p
              className={`${
                newtheme === Etheme.light ? style.light : style.dark
              } ml-1 ${style.cnpj_contact}`}
            >
              {cnpj.contact}
            </p>
            <p
              className={`${
                newtheme === Etheme.light ? style.light : style.dark
              } mx-1 ${style.cnpj_contact}`}
            >
              {cnpj.contact}
            </p>
          </div>

          <div className="flex items-center mb-1">
            <SVGEmail
              width={width_svg}
              height={height_svg}
              fill_one="none"
              fill_two={fill_Two_svg}
            />
            <p
              className={`${
                newtheme === Etheme.light ? style.light : style.dark
              } ml-1 ${style.cnpj_contact}`}
            >
              {cnpj.email}
            </p>
          </div>
        </div>

        <div
          className={`flex opacity-70 text-xs ${
            newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
          }`}
        >
          <p className="ml-8 truncate ...">{cnpj.activity}</p>
        </div>
      </form>

      {/* SEGUNDA parte do container VVV */}
      <form
        className={`w-10 ${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        }`}
        key={"form2" + cnpj.cnpj}
      >
        <Status status={cnpj.status} />
      </form>

      {/* TERCEIRA parte do container VVV */}
      <form
        className={`w-10 ${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        }`}
        key={"form3" + cnpj.cnpj}
      >
        <p className="ml-6">{cnpj.dateForCall}</p>
      </form>

      {/* QUARTA parte do container VVV */}
      <form
        className={`w-10 ${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        } rounded-e-2xl`}
        key={"form4" + cnpj.cnpj}
      >
        <Link to="/form" state={cnpj}>
          iala
        </Link>
      </form>
    </div>
  );
};

export default InfoCnpjItem;
