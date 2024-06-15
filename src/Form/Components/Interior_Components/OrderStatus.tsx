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

  /*CLASSES REPETIDAS*/ const classSelects = `${
    newtheme === Etheme.light
      ? "text-text bg-container"
      : "text-dark-text bg-dark-container"
  } w-full hover:text-opacity-100 rounded-2xl h-inputsize text-center px-2 font-oswald`;

  console.log(Order);
  return (
    <select
      className={classSelects}
      name="Order"
      id="Order"
      value={Order.toString()}
    >
      <option value={Order} disabled defaultChecked>
        {Order}
      </option>

      <option value="PENDING">Pendente</option>
      <option value="SUSPENDED">Pago</option>
      <option value="CANCELLED">Cancelado</option>
      <option value="PAID">Suspenso</option>
    </select>
  );
};

export default OrderStatus;
