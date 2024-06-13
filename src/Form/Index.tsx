import { useCallback, useEffect, useState } from "react";
import { Etheme, themes } from "../themeConsts";
import ModalSideNav from "../components/navegations/modalSideNav";
import ButtonTheme from "../themeButton";
import CompleteForm from "./Components/CompleteFormulario";
import Cabecalho from "../components/navegations/cabecalho";
import { Cnpj, CnpjOrder } from "../API/API_utils";
import { getOrderByCnpjsId } from "../API/API_cnpj";
import OrdemItem from "./Components/OrderItem";
import AddPedido from "./Components/Interior_Components/AddPedido";

function Form(id: string, cnpj: Cnpj) {
  const [theme, setTheme] = useState(themes.activeTheme);
  const pageName = "Formulario do pedido";

  // GET ORDER CNPJS vvv ___________

  const [orders, setOrders] = useState<CnpjOrder[]>();

  const handleOrders = useCallback(() => {
    getOrderByCnpjsId(id).then((data) => {
      setOrders([data]);
    });
  }, [id]);

  useEffect(() => {
    handleOrders();
  }, [handleOrders]);

  return (
    <div
      className={`${
        theme === Etheme.light ? "bg-background" : "bg-dark-background"
      } Flex min-h-screen h-full`}
    >
      <ModalSideNav theme={theme} />
      {/* CABECALHO E TITLEBAR */}
      <div
        className={`sticky top-0 z-10 lg:ml-64 pb-[1px] pt-2 px-4 ${
          theme === Etheme.light ? "bg-background" : "bg-dark-background"
        }`}
      >
        <Cabecalho theme={{ theme }} pageName={pageName} />
      </div>
      <div className="px-4 pb-4 lg:ml-64">
        <CompleteForm theme={theme} />
        <AddPedido cnpj={cnpj} theme={{ theme }} />
        {/* LISTA DE PEDIDOS */}
        {orders?.map((Order) =>
          Order ? (
            <div key={Order.id}>
              <OrdemItem Order={Order} theme={{ theme }} />
            </div>
          ) : (
            <p>teste testando</p>
          )
        )}
      </div>
      <div className="fixed bottom-5 right-4">
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default Form;
