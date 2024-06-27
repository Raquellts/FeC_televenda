import { useState } from "react";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { Etheme } from "../../../themeConsts";
import { Item } from "../../../API/API_utils";
import { usePrintState } from "../../../components/Hooks/isPrinting";
import formatarData from "../../../components/Elements_for_Forms/DateFormatter";

const OrderItemView = ({
  theme,
  Item,
}: {
  theme: { theme: Etheme };
  Item: Item;
}) => {
  /*THEME*/ const [newtheme, setNewtheme] = useState<Etheme>(theme.theme);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);
  const { isPrinting } = usePrintState();

  const pClass = `${
    newtheme === Etheme.light ? "text-primary" : "text-dark-primary "
  } py-2 mx-6 font-inter font-style-xlg text-[15px] truncate`;
  const spanClass = `px-1 font-style-md truncate`;

  const dueDate = Item.dueDate;

  return (
    <>
      <div
        className={`w-full flex flex-wrap my-4 ${
          isPrinting ? "justify-between" : "lg:justify-around flex-row"
        }`}
      >
        <div>
          {/* ------ MARCA ------*/}
          <p className={pClass}>
            <span className={spanClass}>Marca:</span>
            {Item.brand || "Não informado"}
          </p>
          {/* ------ MODELO ------*/}
          <p className={pClass}>
            <span className={spanClass}>Modelo:</span>
            {Item.model || "Não informado"}
          </p>
          {/* ------ COR ------*/}
          <p className={pClass}>
            <span className={spanClass}>Cor:</span>
            {Item.color || "Não informado"}
          </p>
          {/* ------ ANO ------*/}
          <p className={pClass}>
            <span className={spanClass}>Ano:</span>
            {Item.year || "Não informado"}
          </p>
        </div>
        <div>
          {/* ------ VERSAO ------*/}
          <p className={pClass}>
            <span className={spanClass}>Versão:</span>
            {Item.version || "Não informado"}
          </p>
          {/* ------ DATA DE ENTREGA ------*/}
          <p className={pClass}>
            <span className={spanClass}>Data de Entrega:</span>
            {dueDate ? formatarData(dueDate) : "Não informado"}
          </p>
          {/* ------ QUANTIA ------*/}
          <p className={pClass}>
            <span className={spanClass}>Quantia:</span>
            {Item.amount || "Não informado"}
          </p>
          {/* ------ PAGAMENTO ------*/}
          <p className={pClass}>
            <span className={spanClass}>Pagamento:</span>
            {Item.payment || "Não informado"}
          </p>
        </div>
        <div>
          {/* ------ MOTIVO DA COMPRA ------*/}
          <p className={pClass}>
            <span className={spanClass}>Motivo da compra:</span>
            {Item.purchaseReason || "Não informado"}
          </p>
          {/* ------ MAX. VALOR ACEITO ------*/}
          <p className={pClass}>
            <span className={spanClass}>Max. Valor Aceito:</span>
            {Item.maxPayment || "Não informado"}
          </p>
          {/* ------ TROCA NA COMPRA ------*/}
          <p className={pClass}>
            <span className={spanClass}>Troca na Compra:</span>
            {Item.tradeInValue || "Não informado"}
          </p>
          {/* ------ TIPO DE COMPRA ------*/}
          <p className={pClass}>
            <span className={spanClass}>Tipo de Compra:</span>
            {Item.orderType || "Não informado"}
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderItemView;
