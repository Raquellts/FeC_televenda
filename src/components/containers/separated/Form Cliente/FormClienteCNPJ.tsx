import React, { useState } from "react";
import { Etheme } from "../../../../themeConsts";
import { CNPJInterface } from "../../../../../InterfaceCNPJ";
import InputPrimary from "../../separated/InputPrimary";
import TextareaPrimary from "../../separated/textareaPrimary";
import useUpdateTheme from "../../../consts/updateTheme";

interface ClienteCNPJProps {
  cnpj: CNPJInterface;
  theme: { theme: Etheme };
}

const FormClienteCNPJ: React.FC<ClienteCNPJProps> = ({ cnpj, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*CLASSES REPETIDAS*/ const labelSelects_md =
    "flex w-full sm:w-1/2 items-center my-2";
  /*CLASSES REPETIDAS*/ const labelSelects_sm =
    "flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center";
  /*CLASSES REPETIDAS*/ const inputTextareas = "mx-2 w-full truncate";

  return (
    <div>
      <p className="flex justify-center w-100 font-oswald text-[20px] text-primary pt-5">
        Cliente
      </p>
      {cnpj && (
        <>
          {/*---- informações do cliente ----*/}
          <form
            className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
              newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
            }`}
          >
            {/* NOME DA EMPRESA ------------*/}
            <label className={labelSelects_md}>
              <span>Nome:</span>
              <TextareaPrimary
                theme={theme}
                name={""}
                placeholder={cnpj.name_cnpj}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
                maxRows={1}
              />
            </label>
            {/* ATIVIDADES DA EMPRESA -----*/}
            <label className={labelSelects_md}>
              <span>Atividades:</span>
              <TextareaPrimary
                theme={theme}
                name={""}
                placeholder={cnpj.activity}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
                maxRows={1}
              />
            </label>
            {/* TELEFONE 01 -----------*/}
            <label className={labelSelects_sm}>
              <span>Telefone 01:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                placeholder={cnpj.contact}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* TELEFONE 02 -----------*/}
            <label className={labelSelects_sm}>
              <span>Telefone 02:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                placeholder={cnpj.contact}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* EMAIL -----------*/}
            <label className={labelSelects_sm}>
              <span>Email:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={"email"}
                placeholder={cnpj.email}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/* PROXIMA LIGAÇÃO CASO ADIADA */}
            <label className={labelSelects_sm}>
              <span>Proxima ligação:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={"date"}
                placeholder={cnpj.dateForCall}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
          </form>
        </>
      )}
    </div>
  );
};

export default FormClienteCNPJ;
