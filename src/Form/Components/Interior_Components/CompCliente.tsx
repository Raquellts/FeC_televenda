import React, { useState } from "react";
import { Etheme } from "../../../themeConsts";
import InputPrimary from "../../../components/Elements_for_Forms/InputPrimary";
import TextareaPrimary from "../../../components/Elements_for_Forms/textareaPrimary";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { Cnpj } from "../../../API/API_utils";

interface CompClienteProps {
  cnpj: Cnpj;
  theme: { theme: Etheme };
}

const CompCliente: React.FC<CompClienteProps> = ({ cnpj, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*CLASSES REPETIDAS*/ const labelSelects_md =
    "flex w-full sm:w-1/2 items-center my-2";
  /*CLASSES REPETIDAS*/ const labelSelects_sm =
    "flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center";
  /*CLASSES REPETIDAS*/ const inputTextareas = "mx-2 w-full truncate";
  /*CLASSES REPETIDAS*/ const spans = `${
    newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
  }`;

  return (
    <div>
      <p className="flex justify-center w-100 font-oswald text-[20px] text-primary pt-5">
        {cnpj && cnpj.razaoSocial}
      </p>
      {cnpj && (
        <>
          {/*---- informações do cliente ----*/}
          <div
            className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
              newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
            }`}
          >
            {/* NOME DA EMPRESA ------------*/}
            <label className={labelSelects_md}>
              <span className={spans}>Nome:</span>
              <TextareaPrimary
                theme={theme}
                name={"clientName"}
                value={cnpj.clientName || ""}
                onChange={() => {}}
                className={inputTextareas}
                maxRows={1}
              />
            </label>
            {/* ATIVIDADES DA EMPRESA -----*/}
            <label className={labelSelects_md}>
              <span className={spans}>Atividades:</span>
              <TextareaPrimary
                theme={theme}
                name={"activity"}
                value={cnpj.activity}
                onChange={() => {}}
                className={inputTextareas}
                maxRows={1}
              />
            </label>
            {/* TELEFONE 01 -----------*/}
            <label className={labelSelects_sm}>
              <span className={spans}>Telefone 01:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                value={cnpj.phone1 || ""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* TELEFONE 02 -----------*/}
            <label className={labelSelects_sm}>
              <span className={spans}>Telefone 02:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                value={cnpj.phone2 || ""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* EMAIL -----------*/}
            <label className={labelSelects_sm}>
              <span className={spans}>Email:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={"email"}
                value={cnpj.email || ""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* PROXIMA LIGAÇÃO CASO ADIADA */}
            <label className={labelSelects_sm}>
              <span className={spans}>Proxima ligação:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={"date"}
                value={cnpj.dateForCall || ""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* CNPJ EM NUMERO.TOSTRING() */}
            <label className={labelSelects_sm}>
              <span className={spans}>Cnpj:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                value={cnpj.cnpj.toString() || ""}
                onChange={() => {}}
                className={`${inputTextareas}`}
              />
            </label>
            {/* CNAE EM NUMERO.TOSTRING() */}
            <label className={labelSelects_sm}>
              <span className={spans}>Cnae:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                value={cnpj.cnae.toString() || ""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* PORTE DA EMPRESA */}
            <label className={labelSelects_sm}>
              <span className={spans}>Porte:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                value={cnpj.porte || ""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* MATRIZ OU FILIAL */}
            <label className={labelSelects_sm}>
              <span className={spans}>Tipo:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                value={
                  cnpj.identificadorMatrizFilial === 1
                    ? "Matriz"
                    : cnpj.identificadorMatrizFilial === 2
                    ? "Filial"
                    : "Sem porte"
                }
                onChange={() => {}}
                className={`${inputTextareas}`}
              />
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default CompCliente;
