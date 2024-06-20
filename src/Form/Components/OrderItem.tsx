import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { CnpjOrder, User } from "../../API/API_utils";
import OrderStatus from "./Interior_Components/OrderStatus";
import OrderItemView from "./Interior_Components/OrderItemView";
import Tooltip from "../../components/containers/separated/tooltip";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import SVGCancel from "../../components/SVGs/CIRCLE/SVGCancel";
import SVGCheck from "../../components/SVGs/CIRCLE/SVGCheck";
import ConfirmationModal from "../../components/containers/separated/modalConfirmSave";
import { putStatusOrder } from "../../API/API_cnpj";
import { usePrintState } from "../../components/Hooks/isPrinting";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 20;
/*SVG CONSTS*/ const height_svg = 20;

const OrderItem = ({
  theme,
  Order,
  Index,
  user,
}: {
  theme: { theme: Etheme };
  Order: CnpjOrder;
  Index: number;
  user: User;
}) => {
  const { isPrinting } = usePrintState();

  /*THEME*/ const [newtheme, setNewtheme] = useState(theme.theme);
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

  const handleCancelled = async () => {
    handleReload();
    await putStatusOrder(Order.id, "CANCELLED");
  };

  const handlePaid = async () => {
    handleReload();
    await putStatusOrder(Order.id, "PAID");
  };

  const handleReload = () => {
    window.location.reload();
  };

  const buttonStatusChange = `border-transparent text-text hover:border-secondary hover:bg-primary font-oswald py-2 px-3 text-[16px] mx-0.5 lg:mx-1 mt-2`;
  const tooltip = `top-12 left-0 h-[50px] ${
    newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
  }`;

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
      } w-full flex flex-col items-center justify-between p-1 rounded-2xl h-full ${
        isPrinting ? "" : "shadow-md"
      }`}
    >
      {/* PRIMEIRA parte do container VVV */}
      <form
        className={`${
          newtheme === Etheme.light ? "text-text" : "text-dark-text"
        } w-full py-2 rounded-2xl`}
        key={"form1" + Order.id}
      >
        {/* --------------- NOME DA EMPRESA --- SVG BADGE ---------------- */}
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex justify-between items-center md:px-8 py-2 px-2 w-full`}
        >
          {/* --------------- OrderStatus: Pendente, Cancelado, Suspenso, Pago ---------------- */}
          <div className="flex items-center">
            <div
              className={`border-2 border-b-4 ${
                Order.status === "PAID"
                  ? "border-green-500"
                  : Order.status === "SUSPENDED"
                  ? "border-yellow-500"
                  : Order.status === "CANCELLED"
                  ? "border-red-500"
                  : "border-tertiary"
              } rounded-2xl`}
            >
              <OrderStatus theme={theme} Order={Order.status} />
            </div>

            {/* --------------- NOME DA EMPRESA ---------------- */}
            <p className="pl-4 truncate font-style-xlg">Pedido {Index + 1}</p>
          </div>

          {/* --------------- ID DO PEDIDO ---------------- */}
          <p className="truncate font-style-xlg">
            <span>ID do pedido: </span>
            {String(Order.id)}
          </p>

          {/* --------------- BOTOES DE ACOES ---------------- */}
          <div
            className={`flex items-center ${isPrinting ? "hidden" : ""} ${
              user.roleAsString === "USER" ? "hidden" : ""
            }`}
          >
            {/* suspended */}
            <Tooltip
              message={"Pedido encerrado e pago"}
              theme={newtheme}
              className={tooltip}
            >
              <ButtonTertiary
                onClick={handlesave}
                className={`${buttonStatusChange} bg-green-500`}
              >
                <div className="flex flex-row justify-center items-center">
                  <SVGCheck
                    fill_one={"none"}
                    fill_two={fill_Two_svg}
                    width={width_svg}
                    height={height_svg}
                  />
                </div>
              </ButtonTertiary>
            </Tooltip>
            {/* refused */}
            <Tooltip
              message={"Pedido cancelado"}
              theme={newtheme}
              className={tooltip}
            >
              <ButtonTertiary
                onClick={handleCancelled}
                className={`${buttonStatusChange} bg-red-500`}
              >
                <div className="flex flex-row justify-center items-center">
                  <SVGCancel
                    fill_one={"none"}
                    fill_two={fill_Two_svg}
                    width={width_svg}
                    height={height_svg}
                  />
                </div>
              </ButtonTertiary>
            </Tooltip>
          </div>
        </div>

        <div className={`w-full lg:px-[35%] md:px-30 px-10`}>
          <ConfirmationModal
            actionName="Enviar pedido do cliente"
            theme={theme}
            isOpen={save}
            onCancel={handleCancelsave}
            onConfirm={handleConfirmSave}
            submitButton={handlePaid}
          />
        </div>

        {/* --------------- LINHA DE ATIVIDADES --- CNAE DESC.. ---------------- */}
        <div className={`flex flex-col w-full items-center`}>
          <OrderItemView theme={theme} Item={Order.orderItem} />

          {confirmed ? (
            <p className={`text-green-500 text-size-xsm mr-1 mt-1.5`}>
              Pedido pago e encerrado
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default OrderItem;
