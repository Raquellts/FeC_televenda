import { useState } from "react";
import { Etheme } from "../../themeConsts";
import useUpdateTheme from "../../components/Hooks/updateTheme";
import { CnpjOrder } from "../../API/API_utils";
import OrderStatus from "./Interior_Components/OrderStatus";
import OrderItemView from "./Interior_Components/OrderItemView";

const OrderItem = ({
  theme,
  Order,
}: {
  theme: { theme: Etheme };
  Order: CnpjOrder;
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
        }px-2 py-2 rounded-2xl bg-opacity-50`}
        key={"form1" + Order.id}
      >
        {/* --------------- NOME DA EMPRESA --- SVG BADGE ---------------- */}
        <div
          className={`${
            newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
          } flex justify-between items-center`}
        >
          <p className="ml-4 truncate font-style-xlg">
            <span>ID do pedido: </span>
            {String(Order.id)}
          </p>
          {/* --------------- OrderStatus: Pendente, Cancelado, Suspenso, Pago ---------------- */}
          <span className="font-style-xlg md:ml-[28%] sm:ml-[18%]">
            Status:{" "}
          </span>
          <div
            className={`border-2 border-b-4 mr-4 ${
              Order.status === "PAID"
                ? "border-GREEN"
                : Order.status === "SUSPENDED"
                ? "border-YELLOW"
                : Order.status === "CANCELLED"
                ? "border-RED"
                : "border-tertiary"
            } rounded-2xl`}
          >
            <OrderStatus theme={theme} Order={Order.status} />
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
