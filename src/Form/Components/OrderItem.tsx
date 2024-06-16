import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { CnpjOrder } from "../../API/API_utils";
import OrderStatus from "./Interior_Components/OrderStatus";
import OrderItemView from "./Interior_Components/OrderItemView";

const OrderItem = ({
  theme,
  Order,
  Index,
}: {
  theme: { theme: Etheme };
  Order: CnpjOrder;
  Index: number;
}) => {
  /*THEME*/ const [newtheme, setNewtheme] = useState(theme.theme);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
      } w-full shadow-md flex flex-col items-center justify-between p-1 rounded-2xl h-full bg-opacity-50`}
    >
      {/* PRIMEIRA parte do container VVV */}
      <form
        className={`${
          newtheme === Etheme.light ? "text-text" : "text-dark-text"
        } w-full px-2 py-2 rounded-2xl bg-opacity-50`}
        key={"form1" + Order.id}
      >
        {/* --------------- NOME DA EMPRESA --- SVG BADGE ---------------- */}
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex justify-between items-center md:px-8 py-2 px-2 w-full`}
        >
          <p className="truncate font-style-xlg">Pedido {Index + 1}</p>
          <p className="truncate font-style-xlg">
            <span>ID do pedido: </span>
            {String(Order.id)}
          </p>
          {/* --------------- OrderStatus: Pendente, Cancelado, Suspenso, Pago ---------------- */}
          <div className="flex items-center">
            <span className="font-style-xlg mr-2">Atualizar status:</span>
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
          </div>
        </div>

        {/* --------------- LINHA DE ATIVIDADES --- CNAE DESC.. ---------------- */}
        <div className={`flex flex-col w-full items-center`}>
          <OrderItemView theme={theme} Item={Order.orderItem} />
        </div>
      </form>
    </div>
  );
};

export default OrderItem;
