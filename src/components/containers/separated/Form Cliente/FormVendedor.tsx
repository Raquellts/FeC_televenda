import React, { useState } from "react";
import { Etheme } from "../../../../themeConsts";
import { CNPJInterface } from "../../../../../InterfaceCNPJ";
import InputPrimary from "../../../Elements_for_Forms/InputPrimary";
import useUpdateTheme from "../../../consts/updateTheme";

interface FormVendedorProps {
  cnpj: CNPJInterface;
  theme: { theme: Etheme };
}

const FormVendedor: React.FC<FormVendedorProps> = ({ cnpj, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*CLASSES REPETIDAS*/ const labelSelects_sm =
    "flex w-full sm:w-1/2 md:w-1/3 items-center";
  /*CLASSES REPETIDAS*/ const inputTextareas = "mx-2 w-full truncate";

  return (
    <div>
      <p className="flex justify-center w-100 font-oswald text-[20px] text-primary pt-5">
        Usuario - Vendedor
      </p>
      {cnpj && (
        <>
          {/*---- informações do Vendedor ----*/}
          <form
            className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
              newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
            }`}
          >
            {/*  */}
            <label className={labelSelects_sm}>
              <span>Usuario:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                placeholder={cnpj.vendedor.usuarioLogado}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/*  */}
            <label className={labelSelects_sm}>
              <span>Email do usuario:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                placeholder={cnpj.vendedor.emailUsuarioLogado}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
            {/*  */}
            <label className={labelSelects_sm}>
              <span>Telefone do usuario:</span>
              <InputPrimary
                theme={theme}
                name={""}
                type={""}
                placeholder={cnpj.vendedor.telefoneUsuarioLogado}
                value={""}
                onChange={() => {}}
                className={inputTextareas}
              />
            </label>
          </form>
        </>
      )}
    </div>
  );
};

export default FormVendedor;
