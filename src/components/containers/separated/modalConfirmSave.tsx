import React, { useState } from "react";
import ButtonTertiary from "../../buttons/ButtonTertiary";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../Hooks/updateTheme";

const ConfirmationModal: React.FC<{
  actionName?: string;
  theme: { theme: Etheme };
  isOpen: boolean;
  onConfirm?: () => void;
  onCancel: () => void;
}> = ({ actionName, isOpen, onConfirm, onCancel, theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  if (!isOpen) return null;

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className={`font-medium overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50`}
    >
      <div
        className={`${
          newtheme === Etheme.light
            ? "bg-container text-text"
            : "bg-dark-container text-dark-text"
        } relative p-4 w-95 max-w-2xl max-h-95 rounded-lg shadow`}
      >
        <div className="flex flex-col items-center justify-center w-full font-inter divide-y divide-gray-300">
          <p
            className={`flex flex-col items-center w-full pb-2 text-size-md opacity-60 font-style-xlg`}
          >
            {actionName}
          </p>

          <p
            className={`w-full flex flex-col items-center pb-1 pt-3 text-size-xsm`}
          >
            <span>Tem certeza que deseja salvar as alterações?</span>

            <span className={`pb-3 text-size-xsm text-red-500 font-oswald`}>
              ( Isso é <span className="uppercase">irreversível</span> )
            </span>
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
    </div>
  );
};

export default ConfirmationModal;
