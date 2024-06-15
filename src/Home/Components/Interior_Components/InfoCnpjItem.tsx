import React, { useState } from "react";
import { Etheme } from "../../../themeConsts";
import SVGBadge from "../../../components/SVGs/USER/SVGBadge";
import Status from "./partStatus";
import style from "../infosCnpj.module.css";
import DateToCall from "./partDateCall";
import EditButton from "./partEditButton";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import ModalComments from "../../../components/containers/separated/modalComments";
import SVGPhoneCall from "../../../components/SVGs/PHONE/SVGPhoneCall";
import ClipboardButton from "../../../components/buttons/Clipboard";
import SVGEmail from "../../../components/SVGs/CONTACT/SVGEmail";
import { Cnpj } from "../../../API/API_utils";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 20;
/*SVG CONSTS*/ const height_svg = 20;

interface InfoCnpjItemProps {
  cnpj: Cnpj;
  theme: { theme: Etheme };
  data: Cnpj[];
  setData: any;
}

const InfoCnpjItem: React.FC<InfoCnpjItemProps> = ({
  cnpj,
  theme,
  data,
  setData,
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
        } w-70 px-2 py-2 rounded-s-2xl font-roboto`}
        key={"form1" + cnpj.cnpj}
      >
        {/* --------------- NOME DA EMPRESA --- SVG BADGE ---------------- */}
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
            <p className="ml-1 truncate font-style-xlg">{cnpj.razaoSocial}</p>

            {/* --------------- MODAL DE COMENTARIOS ---------------- */}
          </div>
          <ModalComments
            theme={theme}
            comments={cnpj.comments || ""}
            cnpj={cnpj}
            data={data}
            setData={setData}
          />
        </div>

        {/* --------------- LINHA DE CONTATO --- TELEFONES ---------------- */}
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex flex-wrap my-[1px]`}
        >
          <div className="flex items-center">
            <SVGPhoneCall
              width={width_svg}
              height={height_svg}
              fill_one="none"
              fill_two={fill_Two_svg}
            />
            {/*CONTATO 01*/}
            <p
              className={`${
                newtheme === Etheme.light ? style.light : style.dark
              } ml-1 justify-start flex ${style.cnpj_contact}`}
            >
              <span>{cnpj.phone1}</span>
              <ClipboardButton textToCopy={cnpj.phone1} theme={theme} />
            </p>

            {/*CONTATO 02*/}
            <p
              className={`${
                newtheme === Etheme.light ? style.light : style.dark
              } ml-1 justify-start flex ${style.cnpj_contact}`}
            >
              <span>{cnpj.phone2}</span>
              <ClipboardButton textToCopy={cnpj.phone2} theme={theme} />
            </p>
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
              <span>{cnpj.email}</span>
              <ClipboardButton textToCopy={cnpj.email} theme={theme} />
            </p>
          </div>
        </div>

        {/* --------------- LINHA DE ATIVIDADES --- CNAE DESC.. ---------------- */}
        <div
          className={`flex opacity-70 text-xs lowercase ${
            newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
          }`}
        >
          <p className={`ml-6 font-inter truncate ${style.cnpj_atividade}`}>
            {cnpj.activity}
          </p>
        </div>
      </form>

      {/* SEGUNDA parte do container VVV */}
      {/*--- STATUS ---*/}
      <form
        className={`w-10 ${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        }`}
        key={"form2" + cnpj.cnpj}
      >
        <Status theme={newtheme} status={cnpj.status} />
      </form>

      {/* TERCEIRA parte do container VVV */}
      {/*--- DATA PARA PROSIMA LIGAÇÃO ---*/}
      <form
        className={`w-10 ${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        }`}
        key={"form3" + cnpj.cnpj}
      >
        <DateToCall
          status={cnpj.status}
          theme={newtheme}
          date={cnpj.dateForCall || ""}
        />
      </form>

      {/* QUARTA parte do container VVV */}
      {/*--- EDITAR INFORMAÇÕES -- BOTÃO EDIT ---*/}
      <form
        className={`w-10 ${
          newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
        } rounded-e-2xl`}
        key={"form4" + cnpj.cnpj}
      >
        <EditButton theme={theme} cnpj={cnpj} id={cnpj.userId} />
      </form>
    </div>
  );
};

export default InfoCnpjItem;
