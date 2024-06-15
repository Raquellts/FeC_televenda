import React from "react";
import { Etheme, themes } from "../../themeConsts";
import ButtonTertiary from "../../components/buttons/ButtonTertiary";
import ConfirmationModal from "../../components/containers/separated/modalConfirmSave";
import Tooltip from "../../components/containers/separated/tooltip";
import { Cnpj, CnpjOrder, Item } from "../../API/API_utils";
import AddPedido from "./Interior_Components/AddPedido";
import SVGCheck from "../../components/SVGs/CIRCLE/SVGCheck";

/*SVG CONSTS*/ const fill_Two_svg = "currentColor";
/*SVG CONSTS*/ const width_svg = 18;
/*SVG CONSTS*/ const height_svg = 18;

interface FormPedidoProps {
  theme: { theme: Etheme };
  cnpj: Cnpj;
}

interface FormPedidoState {
  theme: Etheme;
  save: boolean;
  confirmed: boolean;
  orderItems: Item[];
  orders: CnpjOrder;
}

class FormPedido extends React.Component<FormPedidoProps, FormPedidoState> {
  loading: boolean = false;

  constructor(props: FormPedidoProps) {
    super(props);

    this.state = {
      theme: themes.activeTheme,
      save: false,
      confirmed: false,
      orderItems: [],
      orders: {
        id: "",
        leadId: "",
        userId: "",
        status: "pending",
        orderItem: [],
      },
    };
  }

  //handlesubmit Order _____________
  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    this.setState({ save: false });
    setTimeout(() => {
      this.setState({ confirmed: true });
    }, 1000);
  };
  handleOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedOrderItems = this.state.orderItems.map((item) => ({
      ...item,
      [name]: value,
    }));
    this.setState({ orderItems: updatedOrderItems });
  };

  //confirmação de salvamento _____________
  handlesave = () => {
    this.setState({ save: true });
  };
  handleCancelsave = () => {
    this.setState({ save: false, confirmed: false });
  };

  //setTheme _____________
  setTheme = (theme: Etheme) => {
    this.setState({ theme });
  };
  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as Etheme;
    this.setTheme(selectedTheme);
  };
addItem = (novositens:Item) => {
  this.setState((prevState) => ({
    orderItems: [
      ...prevState.orderItems.slice(),
     ...novositens
    ],
  }));

  render() {
    const { save, confirmed, orderItems } = this.state;
    const { theme, cnpj } = this.props;
    const { handleCancelsave, handlesave, handleSubmit, handleOrderChange } =
      this;
    return (
      <>
        {/*------ FORMULARIO DO CLIENTE/CNPJ ------*/}

        <form onSubmit={handleSubmit}>
          <div className={`pb-6 flex flex-row flex-wrap w-100 justify-center`}>
            <AddPedido
              handleOrderChange={handleOrderChange}
              ordems={orderItems}
              theme={theme}
              cnpj={cnpj}
            />

            <div className={`w-full flex justify-center items-end pt-6`}>
              <div className={`px-4`}>
                <Tooltip
                  message="Salvar pedido do cliente"
                  theme={theme.theme}
                  className={`${save ? "hidden" : ""} mb-9 text-center`}
                >
                  <ButtonTertiary
                    onClick={handlesave}
                    className={`${
                      save ? "invisible" : ""
                    } border-transparent bg-green-700 text-text hover:border-secondary hover:bg-primary font-oswald px-4 py-2 text-[16px]`}
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
            </div>
            {/*------ MODAL CONFIRMAR ATUALIZACAO DE CLIENTE ------*/}

            <div className={`w-full lg:px-[35%] md:px-30 px-10`}>
              <ConfirmationModal
                actionName="Enviar pedido do cliente"
                theme={theme}
                isOpen={save}
                onCancel={handleCancelsave}
              />
            </div>

            {/*------ MENSAGEM DE SUCESSO AO ATUALIZAR CLIENTE ------*/}

            {confirmed ? (
              <p className={`text-green-500 text-size-xsm mr-1 mt-1.5`}>
                Salvo com sucesso
              </p>
            ) : null}
          </div>
        </form>
      </>
    );
  }
}

export default FormPedido;
