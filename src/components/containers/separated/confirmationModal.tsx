import React, { useState } from "react";
import ButtonTertiary from "../../buttons/ButtonTertiary";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../Hooks/updateTheme";

const ConfirmationModal: React.FC<{
  theme: { theme: Etheme };
  isOpen: boolean;
  onConfirm?: () => void;
  onCancel: () => void;
}> = ({ isOpen, onConfirm, onCancel, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  if (!isOpen) return null;

  return (
    <div
      className={`modal ${
        newtheme === Etheme.light ? "text-text" : "text-dark-text"
      }`}
    >
      <div className="flex flex-col items-center justify-center w-full mb-3 text-size-xsm font-inter">
        <p>Tem certeza que deseja salvar as alterações?</p>
        <p className="text-size-xsm text-red-500 font-oswald">
          ( Isso é <span className="uppercase">irreversível</span> )
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <ButtonTertiary
          buttonContent="✓ Salvar"
          onClick={onConfirm}
          className="w-1/2 py-2 mx-1 bg-green-600 border-green-700 hover:bg-green-400 my-1 tracking-wide uppercase text-text"
        />
        <ButtonTertiary
          buttonContent="✕ Cancelar"
          onClick={onCancel}
          className="w-1/2 py-2 mx-1 bg-red-600 border-red-700 hover:bg-red-400 my-1 tracking-wide uppercase text-text"
        />
      </div>
    </div>
  );
};

export default ConfirmationModal;
