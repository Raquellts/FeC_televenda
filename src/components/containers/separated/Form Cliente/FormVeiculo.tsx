import React, { useState } from "react";
import { Etheme } from "../../../../themeConsts";
import { CNPJInterface } from "../../../../../InterfaceCNPJ";
import InputPrimary from "../InputPrimary";
import TextareaPrimary from "../textareaPrimary";
import useUpdateTheme from "../../../consts/updateTheme";

interface FormVeiculoProps {
  cnpj: CNPJInterface;
  theme: { theme: Etheme };
}

const FormVeiculo: React.FC<FormVeiculoProps> = ({ cnpj, theme }) => {
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
        Veiculo
      </p>
      {cnpj.veiculos.map(
        (compra) =>
          compra && (
            <>
              {/*---- informações do Veiculo ----*/}
              <form
                className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
                  newtheme === Etheme.light
                    ? "text-primary"
                    : "text-dark-primary"
                }`}
              >
                {/*  ------------*/}
                <label className={labelSelects_md}>
                  <span>Marca:</span>
                  <TextareaPrimary
                    theme={theme}
                    name={""}
                    placeholder={compra.marca}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.modelo}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.versao}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.link_anuncio}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.forma_pagamento}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.motivo_da_compra}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.prazo}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.quantidade}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.seguro}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.tipo_de_compra}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.usado_na_troca}
                    value={""}
                    onChange={() => {}}
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
                    placeholder={compra.valor_anunciado}
                    value={""}
                    onChange={() => {}}
                    className={inputTextareas}
                  />
                </label>
              </form>
            </>
          )
      )}
    </div>
  );
};

export default FormVeiculo;
