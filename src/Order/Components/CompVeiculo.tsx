import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import InputPrimary from "../../components/Elements_for_Forms/InputPrimary";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { Cnpj, Item } from "../../API/API_utils";
import { postOrderByCnpjsId } from "../../API/API_cnpj";
import Tooltip from "../../components/containers/separated/tooltip";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import SVGCheck from "../../components/SVGs/CIRCLE/SVGCheck";
import ConfirmationModal from "../../components/containers/separated/modalConfirmSave";

const fill_Two_svg = "currentColor";
const width_svg = 18;
const height_svg = 18;

interface CompVeiculoProps {
  theme: { theme: Etheme };
  cnpj: Cnpj;
}

const CompVeiculo: React.FC<CompVeiculoProps> = ({ theme, cnpj }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*SAVE MODAL*/ const [save, setSave] = useState(false);
  /*SAVE MODAL*/ const [confirmed, setConfirmed] = useState(false);

  /*SAVE MODAL*/ const handlesave = () => {
    setSave(true);
  };

  /*SAVE MODAL*/ const handleCancelsave = () => {
    setSave(false);
    setConfirmed(false);
  };

  /*SAVE MODAL*/ const handleConfirmSave = () => {
    setSave(false);
    setConfirmed(true);
  };

  const [itemData, setItemData] = useState<Item>({
    brand: "",
    model: "",
    color: "",
    year: "",
    version: "",
    dueDate: "",
    amount: 1,
    payment: "",
    purchaseReason: "",
    maxPayment: "",
    tradeInValue: "",
    orderType: "",
  });

  const handleInputChange = (e: any) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = () => {
    postOrderByCnpjsId(cnpj.id, itemData).then(() => {
      alert("Veículo Cadastrado!");
      handleBack();
    });
  };
  /*CLASSES REPETIDAS*/ const labelSelects_md =
    "flex w-full sm:w-1/2 items-center";
  /*CLASSES REPETIDAS*/ const labelSelects_sm =
    "flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center";
  /*CLASSES REPETIDAS*/ const inputTextareas = "mx-2 w-full truncate";
  /*CLASSES REPETIDAS*/ const spans = `${
    newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
  }`;
  /*CLASSES REPETIDAS*/ const classSelects = `${
    newtheme === Etheme.light
      ? "text-text bg-container"
      : "text-dark-text bg-dark-container"
  } w-full text-opacity-70 md:h-[45px] hover:text-opacity-100 rounded-2xl h-inputsize text-center px-1`;

  const areInputsFilled = () => {
    return (
      itemData.brand && itemData.model && itemData.color && itemData.amount
    );
  };

  return (
    <>
      {/*---- informações do Veiculo ----*/}
      <form
        className={`w-100 flex flex-col p-8 md:p-5 font-oswald rounded-2xl bg-opacity-50 ${
          newtheme === Etheme.light
            ? "text-primary bg-container"
            : "text-dark-primary bg-dark-container"
        }`}
      >
        <div id="formVeiculo" className="flex flex-wrap w-100">
          {/* ------ MARCA ------*/}
          <label className={labelSelects_md}>
            <span className={spans}>*Marca:</span>
            <InputPrimary
              theme={theme}
              name={"brand"}
              value={itemData.brand}
              onChange={handleInputChange}
              className={inputTextareas}
            />
          </label>
          {/*----- MODELO -----*/}
          <label className={labelSelects_md}>
            <span className={spans}>*Modelo:</span>
            <InputPrimary
              theme={theme}
              name={"model"}
              value={itemData.model}
              onChange={handleInputChange}
              className={inputTextareas}
            />
          </label>
          {/*------ COR -----*/}
          <label className={`${labelSelects_sm} w-full flex flex-col`}>
            <div className="flex flex-row items-center w-full mt-2">
              <span className={spans}>*Cor:</span>
              <InputPrimary
                theme={theme}
                name={"color"}
                value={itemData.color}
                onChange={handleInputChange}
                className={inputTextareas}
              />
            </div>
            <p className="text-size-xsm h-2 mt-[-5px] mb-2 opacity-60">
              ⤤ se não houver, escreva "não informado"
            </p>
          </label>
          {/*----- ANO ------*/}
          <label className={labelSelects_sm}>
            <span className={spans}>Ano:</span>
            <InputPrimary
              type="number"
              onChange={handleInputChange}
              placeholder="YYYY"
              theme={theme}
              name={"year"}
              value={itemData.year}
              className={inputTextareas}
              min={1900} // opcional: mínimo valor permitido
              max={2099} // opcional: máximo valor permitido
            />
          </label>
          {/*------ VERSAO -------*/}
          <label className={labelSelects_sm}>
            <span className={spans}>Versão:</span>
            <InputPrimary
              theme={theme}
              name={"version"}
              value={itemData.version}
              onChange={handleInputChange}
              className={inputTextareas}
            />
          </label>
          {/*----- DATA DE ENTREGA -------*/}
          <label className={labelSelects_sm}>
            <span className={spans}>Data de Entrega:</span>
            <InputPrimary
              type="date"
              theme={theme}
              name={"dueDate"}
              value={itemData.dueDate}
              onChange={handleInputChange}
              className={inputTextareas}
            />
          </label>
          {/*------ QUANTIA -------*/}
          <label className={labelSelects_sm}>
            <span className={spans}>*Quantia:</span>
            <InputPrimary
              type="number"
              theme={theme}
              name={"amount"}
              value={itemData.amount.toString()}
              onChange={handleInputChange}
              className={inputTextareas}
            />
          </label>
          {/*------ PAGAMENTO -------*/}
          <label className={labelSelects_sm}>
            <span className={spans}>Pagamento:</span>
            <InputPrimary
              theme={theme}
              name={"payment"}
              value={itemData.payment}
              onChange={handleInputChange}
              className={inputTextareas}
            />
          </label>
          {/*------ MOTIVO DA COMPRA -------*/}
          <label className={labelSelects_sm}>
            <span className={spans}>Motivo da compra:</span>
            <InputPrimary
              theme={theme}
              name={"purchaseReason"}
              value={itemData.purchaseReason}
              onChange={handleInputChange}
              className={inputTextareas}
            />
          </label>
          {/*------ MAX. VALOR ACEITO -------*/}
          <label className={labelSelects_sm}>
            <span className={spans}>Max. valor aceito:</span>
            <InputPrimary
              theme={theme}
              name={"maxPayment"}
              value={itemData.maxPayment}
              onChange={handleInputChange}
              className={inputTextareas}
            />
          </label>
          {/*------ TROCA NA COMPRA -------*/}
          <label className={labelSelects_sm}>
            <span className={spans}>Troca na compra:</span>
            <select
              name="tradeInValue"
              value={itemData.tradeInValue}
              onChange={handleInputChange}
              className={classSelects}
            >
              <option value={""} defaultChecked>
                Não informado
              </option>
              <option value={"S"}>Sim</option>
              <option value={"N"}>Não</option>
            </select>
          </label>
          {/*------ TIPO DE COMPRA -------*/}
          <label className={labelSelects_sm}>
            <span className={`${spans} ml-2 mt-5`}>Tipo de compra:</span>
            <select
              name="orderType"
              value={itemData.orderType}
              onChange={handleInputChange}
              className={classSelects}
            >
              <option value={""} defaultChecked>
                Não informado
              </option>
              <option value={"V"}>Varejo</option>
              <option value={"A"}>Atacado</option>
            </select>
          </label>
        </div>
        <div
          id="formButtons"
          className={`w-full flex flex-col items-center mt-5`}
        >
          <div className={`px-4`}>
            <Tooltip
              message="Salvar pedido do cliente"
              theme={theme.theme}
              className={`${save ? "hidden" : ""} mb-9 text-center`}
            >
              <ButtonTertiary
                disabled={!areInputsFilled()} // disable button when message is shown or inputs are not filled
                onClick={handlesave}
                className={`${save ? "invisible" : ""} ${
                  !areInputsFilled()
                    ? "bg-primary cursor-not-allowed"
                    : "bg-green-700"
                } border-transparent text-text hover:border-secondary hover:bg-primary font-oswald px-4 py-2 text-[16px]`}
              >
                <div className="flex flex-row">
                  <SVGCheck
                    fill_one={"none"}
                    fill_two={fill_Two_svg}
                    width={width_svg}
                    height={height_svg}
                  />
                  <p>Enviar pedido</p>
                </div>
              </ButtonTertiary>
            </Tooltip>
          </div>

          {!areInputsFilled() ? (
            <p className={`text-red-500 text-size-xsm text-center`}>
              Preencha todos os campos obrigatórios
            </p>
          ) : null}

          <div className={`w-full lg:px-[35%] md:px-30 px-10`}>
            <ConfirmationModal
              actionName="Enviar pedido do cliente"
              theme={theme}
              isOpen={save}
              onCancel={handleCancelsave}
              onConfirm={handleConfirmSave}
              submitButton={handleSubmit}
            />
          </div>

          {confirmed ? (
            <p className={`text-green-500 text-size-xsm mr-1 mt-1.5`}>
              Pedido criado com sucesso
            </p>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default CompVeiculo;
