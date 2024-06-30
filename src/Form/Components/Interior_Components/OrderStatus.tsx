import { useState } from "react";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { Etheme } from "../../../themeConsts";

const OrderStatus = ({
  theme,
  Order,
}: {
  theme: { theme: Etheme };
  Order: "PENDING" | "CANCELLED" | "SUSPENDED" | "PAID";
}) => {
  /*THEME*/ const [newtheme, setNewtheme] = useState(theme.theme);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div className="flex items-center">
      <span
        className={`${newtheme} font-oswald font-style-lg text-size-sm truncate p-2 ${
          Order === "PENDING" ? "PURPLE" : Order === "PAID" ? "GREEN" : "RED"
        }`}
      >
        {Order === "PENDING"
          ? "Pendente"
          : Order === "PAID"
          ? "Pago"
          : Order === "SUSPENDED"
          ? "Suspenso"
          : "Cancelado"}
      </span>
    </div>
  );
};

export default OrderStatus;
