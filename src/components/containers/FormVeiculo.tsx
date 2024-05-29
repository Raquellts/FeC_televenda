import { useLocation } from "react-router-dom";
import { CNPJInterface } from "../../../InterfaceCNPJ";
import { Etheme } from "../../themeConsts";
import { useState, useEffect } from "react";
import SelectTipo from "./separated/selectTipo";

const FormVeiculo = ({ theme }: { theme: { theme: Etheme } }) => {
  /*THEME*/ const [newtheme, setNewtheme] = useState(theme.theme);

  const location = useLocation();
  const cnpj: CNPJInterface = location.state;

  useEffect(() => {
    setNewtheme(theme.theme);
  }, [theme.theme]);

  return (
    <div className="">
      {cnpj && (
        <>
          {/* informações do veiculo desejado */}
          <form
            className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
              newtheme === Etheme.light ? "text-text" : "text-dark-text"
            }`}
          >
            <SelectTipo theme={newtheme} />
          </form>
        </>
      )}
    </div>
  );
};

export default FormVeiculo;
