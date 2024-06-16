import React from "react";
import { getOrderByCnpjsId } from "../../API/API_cnpj";
import { Cnpj, CnpjOrder } from "../../API/API_utils";
import { Etheme, themes } from "../../themeConsts";
import OrderItem from "./OrderItem";

interface MapOrdersState {
  theme: Etheme;
  Order: CnpjOrder[];
}

interface MapOrdersProps {
  theme: Etheme;
  cnpj: Cnpj;
}

class MapOrders extends React.Component<MapOrdersProps, MapOrdersState> {
  loading: boolean = false;

  constructor(props: MapOrdersProps) {
    super(props);

    this.state = {
      theme: themes.activeTheme,
      Order: [] as CnpjOrder[],
    };
  }

  componentDidMount(): void {
    if (this.loading === false) {
      this.loading = true;
      getOrderByCnpjsId(this.props.cnpj.id)
        .then((Order) => {
          this.setState({ Order });
        })
        .finally(() => (this.loading = false));
    }
  }

  render() {
    const { theme } = this.props;
    const { Order } = this.state;

    return (
      <div
        className={`${
          theme === Etheme.light ? "text-primary" : "text-dark-primary"
        } flex flex-col w-full items-center font-oswald mb-2 mt-6`}
      >
        <p>Pedidos Associados</p>
        {Order &&
          Order.map((order, index) => (
            <div key={index} className="mt-4 w-full">
              <OrderItem
                key={"mapOrders" + index}
                Order={order}
                theme={{ theme }}
                Index={index}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default MapOrders;
