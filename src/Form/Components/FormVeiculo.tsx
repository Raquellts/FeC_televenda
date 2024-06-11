import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import InputPrimary from "../../components/Elements_for_Forms/InputPrimary";
import TextareaPrimary from "../../components/Elements_for_Forms/textareaPrimary";
import useUpdateTheme from "../../components/Hooks/updateTheme";

interface FormVeiculoProps {
  theme: { theme: Etheme };
}

const FormVeiculo: React.FC<FormVeiculoProps> = ({ theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*CLASSES REPETIDAS*/ const labelSelects_md =
    "flex w-full sm:w-1/2 items-center my-2";
  /*CLASSES REPETIDAS*/ const labelSelects_sm =
    "flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center";
  /*CLASSES REPETIDAS*/ const inputTextareas = "mx-2 w-full truncate";

  return (
    <>
      {/*---- informações do Veiculo ----*/}
      <form
        className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
          newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
        }`}
      >
        {/*  ------------*/}
        <label className={labelSelects_md}>
          <span>Marca:</span>
          <TextareaPrimary
            theme={theme}
            name={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
            maxRows={1}
          />
        </label>
        {/*  -----*/}
        <label className={labelSelects_md}>
          <span>Modelo:</span>
          <TextareaPrimary
            theme={theme}
            name={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
            maxRows={1}
          />
        </label>
        {/*  -----------*/}
        <label className={labelSelects_sm}>
          <span>Ano:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  -----------*/}
        <label className={labelSelects_sm}>
          <span>Anuncio:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  -----------*/}
        <label className={labelSelects_sm}>
          <span>Forma de Pagamento:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  -----------*/}
        <label className={labelSelects_sm}>
          <span>Motivo da Compra:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  */}
        <label className={labelSelects_sm}>
          <span>Prazo:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  */}
        <label className={labelSelects_sm}>
          <span>Quantidade:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  */}
        <label className={labelSelects_sm}>
          <span>Seguro:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  */}
        <label className={labelSelects_sm}>
          <span>Tipo de Compra:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  */}
        <label className={labelSelects_sm}>
          <span>Usado na Troca:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
        {/*  */}
        <label className={labelSelects_sm}>
          <span>Valor Anunciado:</span>
          <InputPrimary
            theme={theme}
            name={""}
            type={""}
            placeholder={""}
            value={""}
            onChange={() => {
              ("");
            }}
            className={inputTextareas}
          />
        </label>
      </form>
    </>
  );
};

export default FormVeiculo;
