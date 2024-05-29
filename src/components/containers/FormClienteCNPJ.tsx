import { useState } from "react";
import { Etheme } from "../../themeConsts";
import { useLocation } from "react-router-dom";
import { CNPJInterface } from "../../../InterfaceCNPJ";
import InputPrimary from "./separated/InputPrimary";
import TextareaPrimary from "./separated/textareaPrimary";
import FormVeiculo from "./FormVeiculo";
import useUpdateTheme from "../consts/updateTheme";

const FormCNPJ = (theme: { theme: Etheme }) => {
  const location = useLocation();
  const cnpj: CNPJInterface = location.state;

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.light ? "bg-container" : "bg-dark-container"
      } shadow-md flex flex-col items-center justify-between p-1 rounded-2xl h-full bg-opacity-50`}
    >
      <div className="divide-y divide-secondary divide-opacity-50 p-2">
        {cnpj && (
          <>
            {/* informações do cliente */}
            <form
              className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
                newtheme === Etheme.light ? "text-text" : "text-dark-text"
              }`}
            >
              <label className="flex w-50 items-center">
                Name:
                <TextareaPrimary
                  theme={theme}
                  name={""}
                  placeholder={cnpj.name}
                  value={""}
                  onChange={() => {}}
                  className="mx-2 w-full"
                  minRows={1}
                  maxRows={1}
                />
              </label>
              <label className="flex w-50 items-center">
                Activity:
                <TextareaPrimary
                  theme={theme}
                  name={""}
                  placeholder={cnpj.activity}
                  value={""}
                  onChange={() => {}}
                  className="mx-2 w-full truncate ..."
                  minRows={1}
                  maxRows={1}
                />
              </label>
              <label className="flex items-center">
                Contact 1:
                <InputPrimary
                  theme={theme}
                  name={""}
                  type={""}
                  placeholder={cnpj.contact}
                  value={""}
                  onChange={() => {}}
                  className="mx-2"
                />
              </label>
              <label className="flex items-center">
                Contact 2:
                <InputPrimary
                  theme={theme}
                  name={""}
                  type={""}
                  placeholder={cnpj.contact}
                  value={""}
                  onChange={() => {}}
                  className="mx-2"
                />
              </label>
              <label className="flex items-center">
                Email:
                <InputPrimary
                  theme={theme}
                  name={""}
                  type={""}
                  placeholder={cnpj.email}
                  value={""}
                  onChange={() => {}}
                  className="mx-2"
                />
              </label>
              <label className="flex items-center">
                Date for Call:
                <InputPrimary
                  theme={theme}
                  name={""}
                  type={""}
                  placeholder={cnpj.dateForCall}
                  value={""}
                  onChange={() => {}}
                  className="mx-2"
                />
              </label>
            </form>
            <FormVeiculo
              theme={{
                theme: themes,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FormCNPJ;
