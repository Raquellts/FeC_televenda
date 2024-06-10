import React, { useState } from "react";
import { Etheme } from "../../themeConsts";
import { CNPJInterface } from "../../../InterfaceCNPJ";
import useUpdateTheme from "../../components/consts/updateTheme";
import FormVeiculo from "./FormVeiculo";

interface NewFormVeiculoProps {
  cnpj: CNPJInterface;
  theme: { theme: Etheme };
}

const NewFormVeiculo: React.FC<NewFormVeiculoProps> = ({ theme }) => {
  // THEME
  const themes = theme.theme;
  const [newtheme, setNewtheme] = useState(themes);
  const [forms, setForms] = useState<JSX.Element[]>([]);

  const handleAddForm = () => {
    setForms((prevForms) => [
      ...prevForms,
      <FormVeiculo key={prevForms.length} theme={theme} />,
    ]);
  };

  const handleRemoveForm = (index: number) => {
    setForms((prevForms) => prevForms.filter((_, i) => i !== index));
  };

  useUpdateTheme(theme, setNewtheme);

  return (
    <div
      className={`flex flex-col justify-center w-100 font-oswald text-primary pt-5 ${newtheme}`}
    >
      <p className={`flex justify-center w-100 text-[20px]`}>Veiculo</p>
      {forms.map((form, index) => (
        <div key={index}>
          {form}
          <button onClick={() => handleRemoveForm(index)}>Remove Form</button>
        </div>
      ))}
      <button onClick={handleAddForm}>Add Form</button>
    </div>
  );
};

export default NewFormVeiculo;
