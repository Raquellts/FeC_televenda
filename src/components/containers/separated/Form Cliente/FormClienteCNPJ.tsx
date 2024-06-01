import { useState } from "react";
import { Etheme } from "../../../../themeConsts";
import { useLocation } from "react-router-dom";
import { CNPJInterface } from "../../../../../InterfaceCNPJ";
import InputPrimary from "../../separated/InputPrimary";
import TextareaPrimary from "../../separated/textareaPrimary";
import FormVeiculo from "../FIPE selects/FormVeiculo";
import useUpdateTheme from "../../../consts/updateTheme";

const FormCNPJ = (theme: { theme: Etheme }) => {
  const location = useLocation();
  const cnpj: CNPJInterface = location.state;

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*CLASSES REPETIDAS*/ const labelSelects_md =
    "flex w-full sm:w-1/2 items-center my-2";
  /*CLASSES REPETIDAS*/ const labelSelects_sm =
    "flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center";
  /*CLASSES REPETIDAS*/ const inputTextareas = "mx-2 w-full truncate";

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
      } shadow-md flex flex-col items-center justify-between p-1 rounded-2xl h-full bg-opacity-50`}
    >
      <div className={`divide-y divide-secondary divide-opacity-50 p-2`}>
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
                  placeholder={cnpj.name}
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
            <FormVeiculo
              theme={{
                theme: themes,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FormCNPJ;
