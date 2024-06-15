import React, { useState } from "react";
import { Etheme } from "../../../themeConsts";
import InputPrimary from "../../../components/Elements_for_Forms/InputPrimary";
import TextareaPrimary from "../../../components/Elements_for_Forms/textareaPrimary";
import useUpdateTheme from "../../../components/Hooks/updateTheme";

interface CompVeiculoProps {
  theme: { theme: Etheme };
  handleOrderChange: any;
}

const CompVeiculo: React.FC<CompVeiculoProps> = ({
  theme,
  handleOrderChange,
}) => {
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
    <>
      {/*---- informações do Veiculo ----*/}
      <form
        onChange={handleOrderChange}
        className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
          newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
        }`}
      >
        {/*  ------ MARCA ------*/}
        <label className={labelSelects_md}>
          <span className={spans}>Marca:</span>
          <TextareaPrimary
            theme={theme}
            name={"brand"}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
            maxRows={1}
          />
        </label>
        {/* ----- MODELO -----*/}
        <label className={labelSelects_md}>
          <span className={spans}>Modelo:</span>
          <TextareaPrimary
            theme={theme}
            name={"model"}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
            maxRows={1}
          />
        </label>
        {/* ------ COR -----*/}
        <label className={labelSelects_md}>
          <span className={spans}>Cor:</span>
          <TextareaPrimary
            theme={theme}
            name={"color"}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
            maxRows={1}
          />
        </label>
        {/* ----- ANO ------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Ano:</span>
          <InputPrimary
            theme={theme}
            name={"year"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
        {/* ------ VERSAO -------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Versão:</span>
          <InputPrimary
            theme={theme}
            name={"version"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
        {/* ----- DATA DE ENTREGA -------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Data de Entrega:</span>
          <InputPrimary
            theme={theme}
            name={"dueDate"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
        {/* ------ QUANTIA -------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Quantia:</span>
          <InputPrimary
            theme={theme}
            name={"amount"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
        {/* ------ PAGAMENTO -------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Pagamento:</span>
          <InputPrimary
            theme={theme}
            name={"payment"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
        {/* ------ MOTIVO DA COMPRA -------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Motivo da compra:</span>
          <InputPrimary
            theme={theme}
            name={"purchaseReason"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
        {/* ------ MAX. VALOR ACEITO -------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Max. valor aceito:</span>
          <InputPrimary
            theme={theme}
            name={"maxPayment"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
        {/* ------ TROCA NA COMPRA -------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Troca na compra:</span>
          <InputPrimary
            theme={theme}
            name={"tradeInValue"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
        {/* ------ TIPO DE COMPRA -------*/}
        <label className={labelSelects_sm}>
          <span className={spans}>Tipo de compra:</span>
          <InputPrimary
            theme={theme}
            name={"orderType"}
            type={""}
            value={""}
            onChange={handleOrderChange}
            className={inputTextareas}
          />
        </label>
      </form>
    </>
  );
};

export default CompVeiculo;
